#!/bin/bash
# One-time EC2 setup script for Membes homepage.
# Run as the default user (ubuntu) after SSHing into the instance.
# Usage:  bash ~/public/scripts/setup-ec2.sh

set -e

APP_DIR="$HOME/public"

echo "==> 1. System update"
sudo apt-get update -y && sudo apt-get upgrade -y

echo "==> 2. Add 2 GB swap (keeps next build alive on t3.micro)"
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

echo "==> 3. Install Node.js 20 via nvm"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20
nvm alias default 20
node --version && npm --version

echo "==> 4. Install PM2"
npm install -g pm2

echo "==> 5. Install Nginx"
sudo apt-get install -y nginx

echo "==> 6. Frontend — install deps and build"
cd "$APP_DIR/frontend"
cp .env.example .env
npm ci
npm run build

echo "==> 7. Backend — install deps"
cd "$APP_DIR/backend"
cp .env.example .env
npm ci

echo "==> 8. Start apps with PM2"
cd "$APP_DIR"
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup | grep "sudo" | sudo bash

echo "==> 9. Configure Nginx"
sudo cp "$APP_DIR/scripts/nginx.conf" /etc/nginx/sites-available/membes
sudo ln -sf /etc/nginx/sites-available/membes /etc/nginx/sites-enabled/membes
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo ""
echo "==> All done!"
echo "    Site: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
echo "    PM2 status: pm2 list"
echo "    Nginx logs: sudo tail -f /var/log/nginx/error.log"
