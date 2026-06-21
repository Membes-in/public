import type { Metadata } from "next";
import LegalPage from "@/globalComponents/legalPage/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Membes",
  description: "How Membes collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, store, and protect the information you and your members share with Membes."
      lastUpdated="7 June 2026"
      intro={[
        "Membes (“Membes”, “we”, “our”, or “us”) operates a B2B gym management platform that helps fitness businesses digitise memberships, attendance, renewals, and their online presence. This policy explains what information we handle when you use our platform and the websites we generate on your behalf.",
        "By creating an account or using our services, you agree to the practices described in this Privacy Policy.",
      ]}
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "We collect information you provide directly and information generated as you use the platform:",
          ],
          bullets: [
            "Business details: gym name, address, contact information, GST and business identifiers, and bank/payout details.",
            "Account & manager data: name, email, phone number, and login credentials.",
            "Member data you upload: member names, contact details, membership plans, attendance, and session history.",
            "Usage & device data: IP address, browser type, pages viewed, and interactions, collected to operate and improve the service.",
          ],
        },
        {
          heading: "How We Use Your Information",
          bullets: [
            "To provide, maintain, and improve the Membes platform and the webpages we host for you.",
            "To process subscriptions, payments, renewals, and send related notifications.",
            "To provide analytics and insights on memberships, attendance, and revenue.",
            "To respond to enquiries and provide customer support.",
            "To detect, prevent, and address technical issues, fraud, or abuse.",
          ],
        },
        {
          heading: "Sharing & Disclosure",
          paragraphs: [
            "We do not sell your personal information. We share data only with trusted service providers who help us operate the platform — for example, payment gateways (such as Razorpay), cloud hosting, and communication services — and only to the extent necessary to deliver the service. We may also disclose information where required by law or to protect our rights and users.",
          ],
        },
        {
          heading: "Data Storage & Security",
          paragraphs: [
            "Your data is stored on secured servers with access controls and encryption in transit. While we apply industry-standard safeguards, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "Data Retention",
          paragraphs: [
            "We retain your information for as long as your account is active or as needed to provide the service, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your data subject to applicable legal and contractual requirements.",
          ],
        },
        {
          heading: "Your Rights",
          bullets: [
            "Access and request a copy of the personal data we hold about you.",
            "Request correction of inaccurate or incomplete information.",
            "Request deletion of your data, subject to legal limits.",
            "Withdraw consent or object to certain processing where applicable.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "We use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used. You can control cookies through your browser settings, though some features may not function correctly without them.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the “Last updated” date above, and where appropriate we will notify you within the platform.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "For any questions about this Privacy Policy or your data, contact us at business@membes.in.",
          ],
        },
      ]}
    />
  );
}
