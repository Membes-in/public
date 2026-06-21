import type { Metadata } from "next";
import LegalPage from "@/globalComponents/legalPage/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Membes",
  description: "How Membes uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="How and why Membes uses cookies and similar technologies across our platform and the webpages we host."
      lastUpdated="7 June 2026"
      intro={[
        "This Cookie Policy explains what cookies are, the types of cookies Membes uses, and how you can manage them. It should be read together with our Privacy Policy.",
        "By continuing to use the platform with cookies enabled, you consent to our use of cookies as described below.",
      ]}
      sections={[
        {
          heading: "What Are Cookies",
          paragraphs: [
            "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to remember your preferences, and to provide information to the site owners. Similar technologies such as local storage and pixels serve comparable purposes.",
          ],
        },
        {
          heading: "Types of Cookies We Use",
          paragraphs: [
            "We use the following categories of cookies:",
          ],
          bullets: [
            "Strictly necessary: required to run the platform, keep you signed in, and maintain security. These cannot be switched off without breaking core features.",
            "Functional: remember your preferences and settings to give you a smoother experience.",
            "Analytics & performance: help us understand how the platform is used so we can improve it (for example, which pages are visited and where errors occur).",
            "Session: temporary cookies that expire when you close your browser, used for things like form submissions and active sessions.",
          ],
        },
        {
          heading: "Third-Party Cookies",
          paragraphs: [
            "Some cookies may be set by trusted third-party services we use to operate the platform — for example, payment partners (such as Razorpay) during checkout, or map and analytics providers. These third parties have their own privacy and cookie policies governing their use of data.",
          ],
        },
        {
          heading: "How We Use Cookies",
          bullets: [
            "To authenticate users and keep accounts secure.",
            "To remember preferences and improve usability.",
            "To measure and analyse platform performance and usage.",
            "To support payment processing and fraud prevention.",
          ],
        },
        {
          heading: "Managing Your Cookies",
          paragraphs: [
            "You can control and delete cookies through your browser settings, including blocking some or all cookies or asking to be notified when a cookie is set. Please note that disabling certain cookies may affect the functionality of the platform and prevent some features from working correctly.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this Cookie Policy from time to time to reflect changes in technology or regulation. The “Last updated” date above indicates the most recent revision.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "For questions about our use of cookies, contact us at business@membes.in.",
          ],
        },
      ]}
    />
  );
}
