import Link from "next/link";
import Logo from "../logo/Logo";
import FooterBar from "../footerBar/FooterBar";
import Reveal from "../reveal/Reveal";
import styles from "./LegalPage.module.css";

export interface LegalSection {
  heading: string;
  /** Body paragraphs for the section. */
  paragraphs?: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

export interface LegalPageProps {
  title: string;
  /** Short line shown under the title. */
  subtitle: string;
  /** Human-readable last-updated date. */
  lastUpdated: string;
  /** Lead paragraph(s) shown above the numbered sections. */
  intro: string[];
  sections: LegalSection[];
}

/**
 * Shared layout for the static legal pages (Privacy Policy, Terms &
 * Conditions, Refund Policy). Mirrors the landing-page design system:
 * dark-teal atmosphere, lime accents, glass surfaces, scroll reveals.
 */
function LegalPage({
  title,
  subtitle,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className={styles.page}>
      {/* Lightweight glass header (legal pages have no on-page sections to
          scroll to, so we use a simple logo + back link instead of NavBar). */}
      <header className={styles.topBar}>
        <Link href="/" className={styles.brand}>
          <Logo />
          <span>Membes</span>
        </Link>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>
      </header>

      <main className={styles.main}>
        <Reveal from="up">
          <div className={styles.hero}>
            <span className={styles.watermark} aria-hidden="true">
              {title.split(" ")[0]}
            </span>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowMark} aria-hidden="true" />
              Legal
            </p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.updated}>Last updated: {lastUpdated}</p>
          </div>
        </Reveal>

        <Reveal from="up">
          <article className={styles.card}>
            {intro.map((para, i) => (
              <p key={i} className={styles.lead}>
                {para}
              </p>
            ))}

            <ol className={styles.sections}>
              {sections.map((section, i) => (
                <li key={i} className={styles.section}>
                  <h2 className={styles.sectionHeading}>
                    <span className={styles.sectionNumber}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((para, j) => (
                    <p key={j} className={styles.paragraph}>
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className={styles.bullets}>
                      {section.bullets.map((bullet, k) => (
                        <li key={k}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            <p className={styles.disclaimer}>
              This document is provided for general informational purposes and
              does not constitute legal advice. For questions, reach us at{" "}
              <a href="mailto:business@membes.in" className={styles.inlineLink}>
                business@membes.in
              </a>
              .
            </p>
          </article>
        </Reveal>
      </main>

      <FooterBar />
    </div>
  );
}

export default LegalPage;
