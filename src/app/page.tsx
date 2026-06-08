'use client';
import styles from './page.module.css'

import Header from "./sections/headerSection/Header";
import TargetSection from "./sections/targetSection/TargetSection"; // copied from DefaultPage
import ServiceSection from "./sections/serviceSection/ServiceSection";
import CustomerSection from "./sections/customerSection/CustomerSection"; // copied from DefaultPage
import ObjectiveSection from "./sections/objectiveSection/ObjectiveSection"; // copied from DefaultPage
import UsageSection from "./sections/usageSection/UsageSection"; // copied from DefaultPage
import PlanSections from './sections/planSections/PlanSection'; // copied from DefaultPage
import ContactSection from "./sections/contactSection/ContactSection";

import FooterBar from "@/globalComponents/footerBar/FooterBar";
import Reveal from "@/globalComponents/reveal/Reveal";

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <Reveal from="up"><TargetSection /></Reveal>
      <Reveal from="up"><ServiceSection /></Reveal>
      <Reveal from="up"><CustomerSection /></Reveal>
      <Reveal from="up"><ObjectiveSection /></Reveal>
      <Reveal from="up"><UsageSection /></Reveal>
      <Reveal from="up"><PlanSections /></Reveal>
      <Reveal from="up"><ContactSection /></Reveal>
      <FooterBar />
    </div>
  );
}