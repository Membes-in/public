import { convertGoogleDriveLink } from '@/lib/convertGoogleDriveLink';
import styles from './ServiceCard.module.css'
import Image, { type StaticImageData } from 'next/image';

interface itemProps {
    icon : string | StaticImageData,
    description: string,
    label: string,
    value: string
}

interface cardProps{
    item : itemProps
}

function ServiceCard({item} : cardProps) {

  // Locally imported SVGs arrive as objects (StaticImageData) and must be used
  // directly; only remote Google Drive links (strings) need conversion.
  const iconSrc =
    typeof item.icon === 'string' ? convertGoogleDriveLink(item.icon) : item.icon;

  return (
    <div className={styles.serviceCard}>
        <span className={styles.iconChip}>
          {iconSrc ? (
            <Image src={iconSrc} alt="" height={28} width={28} />
          ) : null}
        </span>
        <div className={styles.text}>
            <h1>{item.label}</h1>
            <p>{item.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard