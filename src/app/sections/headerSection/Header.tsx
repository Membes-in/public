"use client";
import NavBar from "@/globalComponents/navBar/NavBar";
import styles from "./Header.module.css";
import PrimaryButton from "@/globalComponents/buttons/primaryButton/PrimaryButton";
import { memo } from "react";
import Image from "next/image";

const Header = memo(function Header() {
  const scrollToSection = () => {
    const section = document.getElementById("plansSection");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const section = document.getElementById("servicesSection");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const backgroundStyle = {
    background: "url('/landingPageImages/headerSection/yoga.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.header} style={backgroundStyle}>
      <div>
        <NavBar />
        <div className={styles.heroSection}>
          <div className={styles.heroSectionText}>
            <div className={styles.heroSectionTitle}>
              <hr />
              <h1>Membes App</h1>
              <hr />
            </div>
            <div className={styles.heroSectionDescription}>
              <p>Dual-Interface Membership Management System</p>
              <p>
                Our Gym Membership Management System is a B2B dual-interface
                platform designed to digitize gym operations. It provides
                solutions for establishing a strong digital presence, offering
                flexible membership options, and automating essential
                administrative tasks.
              </p>
              <div className={styles.heroStats} aria-label="Platform highlights">
                <span>Webpage builder</span>
                <span>Smart renewals</span>
                <span>Member analytics</span>
              </div>
              <div className={styles.heroActions}>
                <PrimaryButton onClick={scrollToSection}>
                  <Image
                    src="/headerSection/topRightArrow.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Get Started
                </PrimaryButton>
                <button
                  className={styles.secondaryAction}
                  onClick={scrollToServices}
                >
                  View features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
