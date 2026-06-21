"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: React.ReactNode;
  /** Delay in ms before the reveal animation starts once in view. */
  delay?: number;
  /** Direction the content travels from. */
  from?: "up" | "left" | "right" | "scale";
  className?: string;
}

/**
 * Wraps content and fades/slides it into view the first time it enters the
 * viewport. Respects prefers-reduced-motion (content shows immediately).
 */
function Reveal({ children, delay = 0, from = "up", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[from]} ${
        visible ? styles.visible : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
