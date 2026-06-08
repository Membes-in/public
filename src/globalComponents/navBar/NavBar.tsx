"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../logo/Logo";
import cross from "./icons/cross.svg";
import more from "./icons/more.svg";
import styles from "./styles/NavBar.module.css";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const path = usePathname();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContent}>
        <Link href="/" className={styles.logo}>
          <Logo />
          <p>{path === "/" ? "Membes" : "FlexFit"}</p>
        </Link>
        <ul className={styles.navBarLinks}>
          <li onClick={() => handleClick("servicesSection")}>Services</li>
          {path === "/" && (
            <li onClick={() => handleClick("usageSection")}>How it works?</li>
          )}
          <li onClick={() => handleClick("plansSection")}>Membership</li>
          {path !== "/" && (
            <li onClick={() => handleClick("trainersSection")}>Trainers</li>
          )}
          <li onClick={() => handleClick("contactSection")}>Contact us</li>
        </ul>
        <button
          className={styles.more}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <Image src={cross} alt="close" width={20} height={20} />
          ) : (
            <Image src={more} alt="more" width={20} height={20} />
          )}
        </button>
      </div>

      {isExpanded && (
        <>
          <hr className={styles.divider} />
          <ul className={styles.moreContent}>
            <li onClick={() => handleClick("servicesSection")}>Services</li>
            {path === "/" && (
              <li onClick={() => handleClick("usageSection")}>How it works?</li>
            )}
            <li onClick={() => handleClick("plansSection")}>Membership</li>
            {path !== "/" && (
              <li onClick={() => handleClick("trainersSection")}>Trainers</li>
            )}
            <li onClick={() => handleClick("contactSection")}>Contact us</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default NavBar;
