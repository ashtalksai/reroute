import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Reroute",
  description: "How Reroute collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "Introduction",
    content: `Reroute ("we", "us", "our") is operated by ChimeStream B.V., a company registered in the Netherlands, and provides an automated flight compensation recovery service. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services at reroute.app. By creating an account or using our services, you consent to the data practices described in this policy. We are committed to protecting your personal data and complying fully with the General Data Protection Regulation (GDPR) and applicable Dutch data protection laws.`,
  },
  {
    title: "Information We Collect",
    content: `We collect several categories of information to provide and improve our service. Personal identification information includes your full name, email address, and a securely hashed version of your password — we never store your password in plain text. Flight data includes flight numbers, travel dates, departure and arrival airports, airline names, and disruption details you provide or that we retrieve on your behalf. Payment information for compensation payouts, including bank account details or payment processor tokens, is collected solely to transfer recovered compensation to you. We also collect usage data such as pages visited, features used, session duration, and device or browser type through privacy-preserving analytics to improve our platform.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used exclusively to deliver the flight compensation recovery service you have signed up for. We use your flight data to monitor for disruptions, assess eligibility under EU Regulation 261/2004, and automatically prepare and submit compensation claims to airlines on your behalf. We use your contact information to communicate with you about claim status, approvals, rejections, and payouts via email notifications. Your payment details are used solely to process and transfer compensation amounts to your bank account once a claim is resolved. We use aggregated, anonymised usage data to identify bugs, improve product features, and ensure platform reliability — this data cannot be linked back to you as an individual.`,
  },
  {
    title: "Data Sharing",
    content: `We share your personal data only when strictly necessary to deliver the service. We share relevant flight data and personal details with airlines and their legal representatives as required to file compensation claims on your behalf. We work with regulated payment processors to facilitate payout transfers; these partners are contractually bound to process your payment data only for the purpose of completing your transaction. In contested cases, we may share documentation with licensed legal partners or national aviation enforcement bodies to pursue your claim. We do not sell, rent, lease, or otherwise commercialise your personal data to third parties under any circumstances. Any third parties we engage are required to maintain data security standards equivalent to our own.`,
  },
  {
    title: "Data Security",
    content: `We apply bank-level 256-bit AES encryption to all sensitive data at rest, and all data transmitted between your browser and our servers is protected by TLS 1.3 encryption in transit. Our infrastructure is hosted in ISO 27001-certified data centres located within the European Union, ensuring your data never leaves the EU without explicit notification. We conduct regular third-party penetration tests and security audits, and our development team follows OWASP secure coding standards. Access to personal data within our organisation is restricted to personnel who require it to perform their job functions, and all access is logged and reviewed. In the unlikely event of a data breach, we will notify affected users and the relevant supervisory authority within 72 hours as required by GDPR.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal data for the duration of your account with us, plus a further three years after account closure. This three-year retention period corresponds to the statutory limitation period under EU Regulation 261/2004, during which compensation claims may still be filed or contested. Flight and claim records are kept for this full period to allow us to defend against any legal challenges and to comply with regulatory audit requirements. You may request deletion of your data at any time; upon receiving a verified deletion request, we will remove your personal information within 30 days, except where retention is required by law. Anonymised, aggregated statistical data derived from your usage may be retained indefinitely as it cannot be used to identify you.`,
  },
  {
    title: "Your Rights",
    content: `As a data subject under GDPR, you have a comprehensive set of rights regarding your personal data. You have the right of access — to receive a copy of all personal data we hold about you, free of charge, within 30 days of your request. You have the right to rectification — to correct any inaccurate or incomplete data we hold. You have the right to erasure ("right to be forgotten") — to request that we delete your personal data, subject to legal retention obligations. You have the right to data portability — to receive your data in a structured, machine-readable format for transfer to another service. You have the right to object to processing or to request restriction of processing in certain circumstances. To exercise any of these rights, contact us at hello@reroute.app. You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at autoriteitpersoonsgegevens.nl.`,
  },
  {
    title: "Cookies",
    content: `Reroute uses only essential, strictly necessary cookies required for the operation of the service. These include session cookies to keep you logged in, CSRF protection tokens to secure form submissions, and preference cookies to remember your in-app settings. We do not use third-party advertising cookies, social media tracking pixels, or cross-site analytics cookies. We do not participate in any ad networks or tracking consortia. You may disable cookies in your browser settings, but doing so will prevent you from logging in and using the service. Our cookie usage is fully compliant with the EU ePrivacy Directive, and because we use only strictly necessary cookies, no consent banner is required.`,
  },
  {
    title: "Contact",
    content: `If you have questions, concerns, or requests relating to this Privacy Policy or the handling of your personal data, please contact our privacy team at hello@reroute.app. We aim to respond to all privacy enquiries within five business days. For formal data subject access requests or complaints, please write to: ChimeStream B.V., Attn: Data Protection, Rotterdam, The Netherlands. If you are not satisfied with our response, you have the right to escalate your complaint to the Autoriteit Persoonsgegevens, the Dutch national data protection supervisory authority.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-32 pb-16 mx-auto max-w-[680px] px-6">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-muted mb-12">Last updated: January 1, 2024</p>

        <div className="prose-reroute">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold text-text-primary mt-10 mb-4">
                {section.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
