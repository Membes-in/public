#!/bin/bash
# One-time EC2 setup script for Membes homepage.
# Run as the default user (ubuntu / ec2-user) after SSHing into the instance.
# Usage:  bash setup-ec2.sh

set -e

REPO_URL="https://github.com/Membes-in/public.git"
APP_DIR="$HOME/public"
DOMAIN="YOUR_DOMAIN"   # replace before running (e.g. membes.in)

echo "==> 1. System update"
sudo apt-get update -y && sudo apt-get upgrade -y

echo "==> 2. Add 2 GB swap (keeps next build alive on t3.micro)"
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

echo "==> 3. Install Node.js 20 via NodeSource"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "==> 4. Install PM2 globally"
sudo npm install -g pm2

echo "==> 5. Install Nginx"
sudo apt-get install -y nginx

echo "==> 6. Clone repo"
git clone "$REPO_URL" "$APP_DIR"
cd "$APP_DIR"

echo "==> 7. Frontend — install deps and build"
cd frontend
cp .env.example .env
# Edit .env here if needed: nano .env
npm ci
npm run build
cd ..

echo "==> 8. Backend — install deps"
cd backend
cp .env.example .env
# Edit .env here with SMTP creds, DB URL, etc.: nano .env
npm ci
cd ..

echo "==> 9. Start apps with PM2"
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup | tail -1 | sudo bash   # registers PM2 to start on reboot

echo "==> 10. Configure Nginx"
sudo cp scripts/nginx.conf /etc/nginx/sites-available/membes
sudo sed -i "s/YOUR_DOMAIN/$DOMAIN/g" /etc/nginx/sites-available/membes
sudo ln -sf /etc/nginx/sites-available/membes /etc/nginx/sites-enabled/membes
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo ""
echo "==> Done! Site should be live at http://$DOMAIN"
echo "    To add HTTPS: sudo apt install certbot python3-certbot-nginx -y"
echo "                  sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
