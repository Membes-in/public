"use client";
import styles from "./FooterBar.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
import publicSiteConfig from "@/content/publicSiteConfig";
import facebook from "./icons/faceBookIcon.svg";
import instagram from "./icons/instagramIcon.svg";
import linkedin from "./icons/linkedInIcon.svg";
import x from "./icons/xIcon.svg";
import youtube from "./icons/youtubeIcon.svg";

function FooterBar() {
  const socials = publicSiteConfig.socials;
  const path = usePathname();
  const isBusinessPage = path?.startsWith("/business") ?? false;

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const getSocialIcon = (type: string): string | null => {
    switch (type.toLowerCase()) {
      case "facebook":
        return facebook;
      case "instagram":
        return instagram;
      case "twitter":
        return x;
      case "x":
        return x;
      case "linkedin":
        return linkedin;
      case "youtube":
        return youtube;
      default:
        return null;
    }
  };

  const list = socials.map((item, index) => {
    const iconSrc = getSocialIcon(item.platform);
    if (!iconSrc) return null;

    return (
      <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={iconSrc}
          alt={`${item.platform} icon`}
          className={styles.socialIcon}
          width={30}
          height={30}
        />
      </a>
    );
  });

  return (
    <div className={styles.footerBar}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
          <p>{isBusinessPage ? "FlexFit" : "Membes"}</p>
        </div>
        <ul className={styles.links}>
          <li onClick={() => handleClick("servicesSection")}>Services</li>
          {!isBusinessPage && (
            <li onClick={() => handleClick("usageSection")}>How it works?</li>
          )}
          <li onClick={() => handleClick("plansSection")}>Membership</li>
          {isBusinessPage && (
            <li onClick={() => handleClick("trainersSection")}>Trainers</li>
          )}
          <li onClick={() => handleClick("contactSection")}>Contact us</li>
        </ul>
        <div className={styles.socials}>{list}</div>
      </div>
      <div className={styles.credits}>
        <hr className={styles.divider} />
        <div className={styles.creditsText}>
          <h1 className={styles.membes}>
            Powered by <span>Membes</span>
          </h1>
          <div>
            <Link className={styles.legalLink} href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className={styles.legalLink} href="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
            <Link className={styles.legalLink} href="/refund-policy">
              Refund Policy
            </Link>
            <Link className={styles.legalLink} href="/cookie-policy">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBar;
