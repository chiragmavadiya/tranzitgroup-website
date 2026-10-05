export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: "Is Tranzit a courier company?",
    a: "No. Tranzit is the software layer that connects your store to courier networks. We handle booking, labels, tracking and notifications. The couriers (Australia Post, Aramex, Couriers Please and others) handle the actual pickup and delivery.",
  },
  {
    q: "Do I need my own carrier accounts?",
    a: "You can bring your own negotiated carrier accounts and ship at your rates with no markup, or use Tranzit's pre-negotiated rates from day one. Many merchants combine both to get the best price on every shipment.",
  },
  {
    q: "Which platforms do you support?",
    a: "Shopify, WooCommerce, eBay, Squarespace, Shopline and Etsy are supported today, with Temu and Amazon on the way. Orders sync automatically and fulfilment writes straight back to your store.",
  },
  {
    q: "Are there any lock-in contracts?",
    a: "None. You can upgrade, downgrade or cancel anytime with no penalties. We would rather you stay because Tranzit works, not because you are trapped.",
  },
  {
    q: "How long does setup take?",
    a: "Most merchants are printing their first labels within minutes once set-up is done. Our onboarding team will contact you soon after you register to onboard you properly so you do not miss any settings. Connect your store, add a carrier and you are shipping.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    q: "What is included in the 30-day free trial?",
    a: "You can use the Tranzit platform for 30 days without paying software or Tranzit label-processing fees. You can connect unlimited supported BYO courier accounts, connect supported ecommerce integrations, import orders, compare rates, generate labels and manage tracking.",
  },
  {
    q: "Do I need to enter payment details to start?",
    a: "You can create your account and begin setting up your shipping workflow for the free trial. Any payment or billing details required for courier freight charges will depend on the courier account or service you use.",
  },
  {
    q: "Are courier freight charges free during the trial?",
    a: "No. The free trial covers Tranzit software access and Tranzit label-processing fees. Courier freight charges, fuel levies, surcharges and optional courier services remain payable.",
  },
  {
    q: "How many courier accounts can I connect?",
    a: "You can connect unlimited supported BYO courier accounts. Availability depends on the courier integrations currently supported by Tranzit.",
  },
  {
    q: "Which ecommerce integrations can I connect?",
    a: "You can connect ecommerce platforms currently supported by Tranzit. Available integrations may include platforms such as Shopify, WooCommerce and other supported sales channels.",
  },
  {
    q: "What happens after the 30-day trial?",
    a: "After your trial, you can continue using Tranzit on a per-label pricing model. Your exact label rate will be based on your eligible weekly parcel-volume tier.",
  },
  {
    q: "Is there a monthly subscription fee after the trial?",
    a: "No. There is no monthly software subscription fee under this pricing model. You pay based on the labels generated through Tranzit.",
  },
  {
    q: "Does every customer receive the $0.02 per-label rate?",
    a: "The $0.02 per-label rate applies to eligible weekly parcel-volume tiers. Your exact rate will be confirmed based on your expected or actual weekly shipping volume.",
  },
];

export const integrationFaqs: Faq[] = [
  generalFaqs[2],
  generalFaqs[1],
  pricingFaqs[3],
  generalFaqs[0],
  {
    q: "Can I use Tranzit with more than one store or warehouse?",
    a: "Yes. If you run several storefronts or warehouses you can manage them all from one Tranzit account.",
  },
  {
    q: "Is there an API?",
    a: "Yes. You can quote, book and track programmatically with Tranzit's REST API and webhooks.",
  },
];

export const platformFaqs: Faq[] = [
  generalFaqs[0],
  generalFaqs[1],
  generalFaqs[2],
  generalFaqs[3],
  generalFaqs[4],
  pricingFaqs[0],
  pricingFaqs[5],
  pricingFaqs[6],
  {
    q: "Can Tranzit choose the carrier for me?",
    a: "Yes. Smart shipping rules automate carrier choice by weight, value, zone or service level. Tell Tranzit to always pick the cheapest, the fastest or your preferred carrier per zone.",
  },
  {
    q: "What happens to tracking numbers?",
    a: "Tracking syncs back to your store automatically and every order is marked fulfilled, so there is no manual copy-pasting. Customers can follow their parcel on a branded tracking page and receive SMS and email updates at dispatch, in transit and on delivery.",
  },
];
