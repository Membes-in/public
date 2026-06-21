import type { Metadata } from "next";
import LegalPage from "@/globalComponents/legalPage/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy — Membes",
  description: "Our policy on subscription refunds and cancellations.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="How refunds, cancellations, and billing adjustments work for Membes subscriptions and add-ons."
      lastUpdated="7 June 2026"
      intro={[
        "This Refund Policy explains the circumstances under which refunds may be issued for payments made to Membes. It applies to subscription plans, webpage hosting plans, and optional add-ons purchased through the platform.",
      ]}
      sections={[
        {
          heading: "Subscription Charges",
          paragraphs: [
            "Membes subscriptions are billed in advance for the selected billing cycle. Because access to the platform is provided immediately upon payment, subscription fees are generally non-refundable except as described in this policy or as required by law.",
          ],
        },
        {
          heading: "Cancellations",
          paragraphs: [
            "You may cancel your subscription at any time from your account or by contacting us. Cancellation stops future renewals; you will continue to have access until the end of your current paid billing cycle. We do not provide pro-rated refunds for the unused portion of a billing cycle unless stated otherwise.",
          ],
        },
        {
          heading: "Eligibility for Refunds",
          paragraphs: [
            "Refunds may be considered in the following situations:",
          ],
          bullets: [
            "Duplicate or accidental charges for the same subscription.",
            "A verified technical failure on our side that prevents you from using the service and that we are unable to resolve within a reasonable time.",
            "Charges made after a valid, timely cancellation request was submitted.",
          ],
        },
        {
          heading: "Non-Refundable Items",
          bullets: [
            "Fees for billing cycles that have already been substantially used.",
            "One-time setup, customisation, or onboarding charges, once work has begun.",
            "Add-ons and services that have already been delivered or consumed.",
          ],
        },
        {
          heading: "How to Request a Refund",
          paragraphs: [
            "To request a refund, email business@membes.in from your registered account email within 7 days of the charge, including your business name, the transaction reference, and the reason for the request. We may ask for additional details to verify the claim.",
          ],
        },
        {
          heading: "Processing Time",
          paragraphs: [
            "Approved refunds are processed to the original payment method via our payment partner (such as Razorpay). Once approved, refunds typically reflect within 5–10 business days, depending on your bank or card issuer.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this Refund Policy from time to time. The “Last updated” date above reflects the most recent revision, which applies to purchases made after that date.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "For any billing or refund questions, contact us at business@membes.in.",
          ],
        },
      ]}
    />
  );
}
