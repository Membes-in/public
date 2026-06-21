import type { Metadata } from "next";
import LegalPage from "@/globalComponents/legalPage/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Membes",
  description: "The terms that govern your use of the Membes platform.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms that govern your access to and use of the Membes gym management platform and related services."
      lastUpdated="7 June 2026"
      intro={[
        "These Terms & Conditions (“Terms”) form a binding agreement between you (the gym or fitness business and its authorised users) and Membes. By accessing or using the platform, you agree to be bound by these Terms. If you do not agree, do not use the service.",
      ]}
      sections={[
        {
          heading: "Eligibility & Accounts",
          paragraphs: [
            "You must be a registered business or an authorised representative of one to use Membes. You are responsible for the accuracy of the information you provide and for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account.",
          ],
        },
        {
          heading: "Use of the Service",
          paragraphs: [
            "We grant you a limited, non-exclusive, non-transferable right to use the platform to manage your fitness business. You agree to use the service only for lawful purposes and in compliance with these Terms.",
          ],
          bullets: [
            "Do not misuse, reverse engineer, or attempt to disrupt the platform.",
            "Do not upload unlawful, infringing, or harmful content.",
            "Do not use the platform to store or transmit data you are not authorised to handle.",
          ],
        },
        {
          heading: "Subscriptions & Billing",
          paragraphs: [
            "Membes operates on a subscription-based model. Applicable fees, billing cycles, and inclusions are presented at the time of purchase. Subscriptions renew according to the plan you select unless cancelled. You authorise us and our payment partners to charge the applicable fees to your chosen payment method.",
          ],
        },
        {
          heading: "Member Data & Your Responsibilities",
          paragraphs: [
            "You are responsible for the data you and your members enter into the platform, including obtaining any necessary consents from your members. You confirm that you have the right to upload and process such data and that you will handle it in compliance with applicable laws.",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "The Membes platform, including its software, design, and branding, is owned by Membes and protected by intellectual property laws. Content you upload remains yours; you grant us a licence to host and process it solely to provide the service.",
          ],
        },
        {
          heading: "Service Availability",
          paragraphs: [
            "We strive to keep the platform available and reliable but do not guarantee uninterrupted access. We may modify, suspend, or discontinue features with reasonable notice where practicable, and may perform maintenance that temporarily affects availability.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "To the maximum extent permitted by law, Membes is not liable for indirect, incidental, or consequential damages, or for loss of data, revenue, or profits arising from your use of the platform. Our total liability is limited to the amount you paid for the service in the preceding twelve months.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "You may stop using the service at any time. We may suspend or terminate access if you breach these Terms or use the platform in a way that risks harm to us, other users, or third parties. Upon termination, your right to use the service ends, subject to provisions that survive by their nature.",
          ],
        },
        {
          heading: "Governing Law",
          paragraphs: [
            "These Terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts of Lucknow, Uttar Pradesh.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "For questions about these Terms, contact us at business@membes.in.",
          ],
        },
      ]}
    />
  );
}
