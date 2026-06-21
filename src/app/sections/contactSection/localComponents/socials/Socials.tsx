import styles from "./Socials.module.css";
import location from "../../icons/location.svg";
import phone from "../../icons/phone.svg";
import mail from "../../icons/mail.svg";
import Image from "next/image";
import publicSiteConfig from "@/content/publicSiteConfig";

function Socials() {
  const { contact } = publicSiteConfig;

  return (
    <div className={styles.socials}>
      <div>
        <div className={styles.imageFrame}>
          <Image src={location} alt="Location Icon" width={12} height={12} />
        </div>
        <hr className={styles.verticalDivider} />
        <p>{contact.address}</p>
      </div>
      <div>
        <div className={styles.imageFrame}>
          <Image src={phone} alt="Phone Icon" width={12} height={12} />
        </div>
        <hr className={styles.verticalDivider} />
        <p>{contact.phone}</p>
      </div>
      <div>
        <div className={styles.imageFrame}>
          <Image src={mail} alt="Mail Icon" width={12} height={12} />
        </div>
        <hr className={styles.verticalDivider} />
        <p>{contact.email}</p>
      </div>
    </div>
  );
}

export default Socials;
