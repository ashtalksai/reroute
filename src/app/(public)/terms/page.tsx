import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Reroute",
  description: "The terms and conditions governing your use of Reroute.",
};

const sections = [
  {
    title: "Agreement to Terms",
    content: `By accessing or using the Reroute service at reroute.app ("Service"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy, which is incorporated herein by reference. These Terms constitute a legally binding agreement between you and ChimeStream B.V., a company registered in the Netherlands ("Reroute", "we", "us"). If you do not agree to these Terms, you must not use our Service. We reserve the right to update these Terms at any time; continued use of the Service after changes are posted constitutes acceptance of the revised Terms. We will notify registered users of material changes via email at least 14 days before they take effect.`,
  },
  {
    title: "Service Description",
    content: `Reroute is an automated flight compensation recovery service that monitors your past and future flights, identifies disruptions that may qualify for compensation under EU Regulation 261/2004 ("EU261"), and files compensation claims with airlines on your behalf. By using the Service, you authorise us to act as your representative and agent for the purpose of submitting, pursuing, and negotiating flight compensation claims. We do not guarantee the outcome of any claim, as final decisions rest with airlines and, in contested cases, national enforcement bodies or courts. Our service covers flights departing from EU airports and flights operated by EU-based carriers arriving into EU airports, subject to the specific conditions of EU261.`,
  },
  {
    title: "User Accounts",
    content: `You must be at least 18 years of age to create an account and use the Service. You agree to provide accurate, complete, and current information during registration and to keep your account information up to date. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately at hello@reroute.app if you suspect any unauthorised use of your account. Reroute cannot and will not be liable for any loss or damage arising from your failure to maintain adequate account security. We reserve the right to suspend or terminate accounts that are found to contain false information or that have been used in violation of these Terms.`,
  },
  {
    title: "Subscription Plans",
    content: `Reroute offers two subscription tiers. The Spotter plan is free of charge and allows you to file EU261 compensation claims with a 35% success fee deducted from any recovered amount; there is no charge if a claim is unsuccessful. The Guardian plan is billed at €29 per month and includes a reduced 10% success fee, priority claim processing, legal team representation, and instant payouts via Revolut. Guardian subscriptions renew automatically on a monthly basis unless cancelled. You may cancel your Guardian subscription at any time through your account settings, and cancellation will take effect at the end of the current billing period with no further charges. A separate Success Fee plan is available at 15% per successful claim with no monthly commitment; plan terms are available on our pricing page.`,
  },
  {
    title: "Fees and Payment",
    content: `For Spotter and Success Fee plan users, our fee is a percentage of the compensation amount successfully recovered on your behalf; no fee is charged if a claim is unsuccessful or results in no payment. The applicable percentage will be clearly displayed before you authorise us to pursue a claim. For Guardian subscribers, the monthly fee of €29 is charged in advance to your payment method at the start of each billing cycle. If a payment fails, we will make up to two additional attempts over seven days before suspending your Guardian access. We do not offer refunds on monthly subscription fees once a billing period has commenced, except where required by applicable consumer protection law. All prices are inclusive of applicable VAT where required by Dutch law.`,
  },
  {
    title: "User Obligations",
    content: `You agree to provide accurate and truthful flight information when submitting or verifying claims, and to promptly respond to any requests for supporting documentation, such as boarding passes, booking confirmations, or expense receipts, that may be needed to substantiate your claim. You warrant that you are the passenger named on the relevant ticket or that you have legal authority to claim on behalf of named passengers. You must not use the Service to submit fraudulent, duplicate, or vexatious claims, and must not interfere with or circumvent the technical systems of the Service. You agree not to use the Service for any unlawful purpose or in any manner that could damage, disable, or impair the Service or the interests of Reroute or other users.`,
  },
  {
    title: "Limitation of Liability",
    content: `Reroute provides its service on a best-efforts basis and does not guarantee the success of any individual compensation claim. Claim outcomes are subject to airline responses, applicable law, and the facts of each individual case, all of which are outside our direct control. To the fullest extent permitted by applicable law, Reroute's total liability to you for any claim arising out of or related to the Service shall not exceed the total fees you have paid to Reroute in the 12-month period preceding the event giving rise to the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use of the Service. Nothing in these Terms limits our liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.`,
  },
  {
    title: "Intellectual Property",
    content: `All content, software, design elements, trademarks, trade names, logos, and other intellectual property comprising the Reroute platform are owned by or licensed to ChimeStream B.V. and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial purposes only. You may not copy, reproduce, modify, distribute, publicly display, or create derivative works of any part of the Service without our prior written consent. The Reroute name, logo, and taglines are registered or unregistered trademarks of ChimeStream B.V. and may not be used without our express written permission.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate the relationship governed by these Terms at any time. You may close your account at any time through your account settings or by contacting hello@reroute.app. Reroute may suspend or terminate your access if you breach these Terms, provide false information, or engage in fraudulent activity. Upon termination, any claim that is already in progress or has been submitted to an airline on your behalf will continue to be processed under the terms applicable at the time of submission, and any compensation recovered after termination will be paid to you less the applicable success fee. Following termination, we will retain your data in accordance with our Privacy Policy and applicable law before securely deleting it.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law principles. Any dispute arising out of or in connection with these Terms or the Service that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the competent courts located in Rotterdam, the Netherlands. If you are a consumer resident in another EU member state, you may also be entitled to bring proceedings in the courts of your country of residence under mandatory consumer protection laws. The European Commission provides an online dispute resolution platform at ec.europa.eu/consumers/odr which you may use as an alternative means of resolving disputes.`,
  },
  {
    title: "Contact",
    content: `If you have any questions about these Terms of Service, or if you need to contact us regarding your account, a claim, or any other matter, please reach out to us at hello@reroute.app. We aim to respond to all enquiries within two business days. For formal legal notices, please write to: ChimeStream B.V., Attn: Legal, Rotterdam, The Netherlands. Notices sent by email are considered received on the date sent, provided no delivery failure notice is received.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-32 pb-16 mx-auto max-w-[680px] px-6">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-2">
          Terms of Service
        </h1>
        <p className="text-text-muted mb-12">Last updated: January 1, 2024</p>

        <div>
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
