/*
 * Privacy Policy and Terms & Conditions, copied word for word from the Tranzit customer portal:
 *   https://app.tranzitgroup.com.au/privacy-policy
 *   https://app.tranzitgroup.com.au/terms-and-conditions
 * (both "Updated: 17 August 2026"). Imported 5 October 2026.
 *
 * Structure: each document has intro paragraphs and numbered sections made of blocks.
 * Inline `html` strings contain only <a href>, <strong> and <em>.
 * To update: replace the text here, or re-run the import, and change `legalUpdated`.
 */

export const legalUpdated = "17 August 2026";

export type LegalBlock =
  | { t: "p"; html: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "labelled"; items: { label: string; html: string }[] }
  | { t: "defs"; items: { term: string; html: string }[] }
  | { t: "contact"; items: { label: string; lines: string[] }[] };

export type LegalSection = { n: number; title: string; blocks: LegalBlock[] };
export type LegalDoc = { title: string; intro: { t: "p"; html: string }[]; sections: LegalSection[] };

export const privacyPolicy: LegalDoc = {
  "title": "Privacy Policy",
  "intro": [
    {
      "t": "p",
      "html": "Tranzit Group ABN 12 690 967 198 (\"Tranzit Group\", \"we\", \"us\" or \"our\") provides a technology and freight-management platform that enables customers to compare freight services, obtain quotations, book shipments, generate shipping labels, track consignments and manage related shipping functionality (the \"Platform\" and \"Services\")."
    },
    {
      "t": "p",
      "html": "This Privacy Policy explains how we collect, hold, use and disclose personal information, and how you can access and correct that information or make a privacy complaint. We are committed to handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (\"APPs\")."
    },
    {
      "t": "p",
      "html": "By using our website, Platform or Services, or by providing personal information to us, you consent to the collection, use and disclosure of personal information as described in this Privacy Policy. This Privacy Policy should be read together with our Terms and Conditions."
    }
  ],
  "sections": [
    {
      "n": 1,
      "title": "What Is Personal Information",
      "blocks": [
        {
          "t": "p",
          "html": "\"Personal information\" means information or an opinion about an identified individual, or an individual who is reasonably identifiable, whether the information is true or not and whether it is recorded in material form or not."
        }
      ]
    },
    {
      "n": 2,
      "title": "Personal Information We Collect",
      "blocks": [
        {
          "t": "p",
          "html": "The personal information we collect depends on how you interact with the Platform. It may include:"
        },
        {
          "t": "labelled",
          "items": [
            {
              "label": "Account information",
              "html": "name, business name, ABN, email address, telephone number, business address, username and account preferences."
            },
            {
              "label": "Shipment information",
              "html": "sender and recipient names, collection and delivery addresses, contact telephone numbers, email addresses, delivery instructions, descriptions and values of goods, and related consignment details."
            },
            {
              "label": "Payment and billing information",
              "html": "billing address, bank account details for direct debit, payment card details (processed and stored by our third-party payment providers — we do not store full card numbers on our own systems), wallet transactions, invoices and credit account information."
            },
            {
              "label": "Integration data",
              "html": "order, product, customer and fulfilment information received from ecommerce platforms and other systems you connect to the Platform (for example Shopify or WooCommerce stores), and API credentials associated with those connections."
            },
            {
              "label": "Tracking and delivery data",
              "html": "consignment status, scan events, proof-of-delivery information, delivery photographs and signatures provided by Carriers."
            },
            {
              "label": "Communications",
              "html": "records of your correspondence with us, including support requests, emails, phone calls and messages sent through the Platform."
            },
            {
              "label": "Technical and usage data",
              "html": "IP address, device and browser information, pages visited, actions taken on the Platform, log data, and information collected through cookies and similar technologies."
            }
          ]
        }
      ]
    },
    {
      "n": 3,
      "title": "How We Collect Personal Information",
      "blocks": [
        {
          "t": "p",
          "html": "We collect personal information:"
        },
        {
          "t": "ul",
          "items": [
            "directly from you, when you create an account, request a quotation, book a shipment, contact support or otherwise use the Services;",
            "from systems you connect to the Platform, such as your ecommerce store, marketplace or accounting software;",
            "from Carriers and their systems, such as tracking events and proof-of-delivery records;",
            "from payment providers, credit reporting and identity-verification services where relevant to your account; and",
            "automatically, through cookies, log files and similar technologies when you use our website or Platform."
          ]
        }
      ]
    },
    {
      "n": 4,
      "title": "Personal Information About Senders and Recipients",
      "blocks": [
        {
          "t": "p",
          "html": "Because the Platform is used to arrange the transport of goods, our customers routinely provide us with personal information about other individuals — in particular, the names, addresses and contact details of senders and parcel recipients."
        },
        {
          "t": "p",
          "html": "Where you provide us with personal information about another individual, you must ensure that you are authorised to do so, and that the individual has been made aware (where practicable) that their information will be used to arrange collection and delivery of a shipment and handled in accordance with this Privacy Policy."
        },
        {
          "t": "p",
          "html": "We use sender and recipient information only for the purpose of providing the Services — principally to arrange bookings, generate shipping documentation, enable collection and delivery by Carriers, provide tracking and notifications, and manage claims and enquiries."
        }
      ]
    },
    {
      "n": 5,
      "title": "How We Use Personal Information",
      "blocks": [
        {
          "t": "p",
          "html": "We collect, hold and use personal information to:"
        },
        {
          "t": "ol",
          "items": [
            "provide, operate and administer the Platform and Services;",
            "obtain quotations and process freight bookings with Carriers;",
            "generate shipping labels and consignment documentation;",
            "provide tracking updates and delivery notifications;",
            "process payments, wallet transactions, invoices and adjustments;",
            "assess and administer credit accounts where applicable;",
            "provide customer support and respond to enquiries;",
            "manage freight claims with Carriers;",
            "operate integrations with ecommerce and other third-party platforms;",
            "maintain the security of the Platform and prevent fraud and misuse;",
            "comply with our legal and regulatory obligations;",
            "improve and develop the Platform and Services; and",
            "with your consent or as permitted by law, send marketing communications about our Services."
          ]
        }
      ]
    },
    {
      "n": 6,
      "title": "Who We Disclose Personal Information To",
      "blocks": [
        {
          "t": "p",
          "html": "We may disclose personal information to:"
        },
        {
          "t": "ul",
          "items": [
            "Carriers and their agents and contractors, to enable collection, transport, delivery and claims handling for your shipments;",
            "payment processors, banks and financial institutions, to process payments and manage billing;",
            "ecommerce and software platforms you have connected to your account (such as Shopify or WooCommerce), to operate the relevant integration;",
            "our service providers, including hosting, data storage, communications, analytics, customer-support and IT providers, who assist us in operating the Platform;",
            "credit reporting bodies and identity-verification providers, where relevant to credit accounts;",
            "our professional advisers, including lawyers, accountants and insurers, where reasonably required;",
            "a purchaser or prospective purchaser of our business or assets, subject to appropriate confidentiality protections; and",
            "government agencies, regulators, law enforcement and courts, where required or authorised by law."
          ]
        },
        {
          "t": "p",
          "html": "We do not sell personal information."
        }
      ]
    },
    {
      "n": 7,
      "title": "Overseas Disclosure",
      "blocks": [
        {
          "t": "p",
          "html": "Some of our service providers — for example, cloud hosting, email and analytics providers — may store or process information on servers located outside Australia, including in the United States and other jurisdictions in which those providers operate. In addition, where a shipment is sent to or from an overseas destination, shipment details will be disclosed to the Carriers and authorities involved in transporting and clearing that shipment."
        },
        {
          "t": "p",
          "html": "Where we disclose personal information overseas, we take reasonable steps to ensure the recipient handles the information in a manner consistent with the APPs, or the disclosure is otherwise permitted under the Privacy Act."
        }
      ]
    },
    {
      "n": 8,
      "title": "Marketing Communications",
      "blocks": [
        {
          "t": "p",
          "html": "We may send you marketing communications about our Services where you have consented or where otherwise permitted by law, including under the Spam Act 2003 (Cth)."
        },
        {
          "t": "p",
          "html": "You can opt out of marketing communications at any time by using the unsubscribe link in the communication or by contacting us using the details below. Opting out of marketing does not affect operational communications relating to your account, bookings, tracking, billing or security, which we will continue to send while you use the Services."
        }
      ]
    },
    {
      "n": 9,
      "title": "Cookies and Analytics",
      "blocks": [
        {
          "t": "p",
          "html": "Our website and Platform use cookies and similar technologies to keep you signed in, remember preferences, maintain security and understand how the Platform is used. We may use analytics and advertising services (such as Google Analytics and advertising platforms) that collect usage information through their own cookies in accordance with their own privacy policies."
        },
        {
          "t": "p",
          "html": "You can control or delete cookies through your browser settings. Disabling cookies may affect the functionality of parts of the Platform."
        }
      ]
    },
    {
      "n": 10,
      "title": "How We Hold and Protect Personal Information",
      "blocks": [
        {
          "t": "p",
          "html": "Personal information is held in electronic systems operated by us and our service providers. We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, modification or disclosure. These steps include access controls, authentication requirements, encryption of data in transit, network and application security measures, and staff confidentiality obligations."
        },
        {
          "t": "p",
          "html": "You are responsible for maintaining the security of your own account credentials, API keys and connected systems, and for notifying us promptly if you suspect unauthorised access to your account. No method of transmission or storage is completely secure, and we cannot guarantee absolute security."
        }
      ]
    },
    {
      "n": 11,
      "title": "Retention of Personal Information",
      "blocks": [
        {
          "t": "p",
          "html": "We retain personal information for as long as it is reasonably required for the purposes described in this Privacy Policy, including to provide the Services, maintain business and transaction records, manage claims and disputes, and comply with legal obligations such as taxation and corporate record-keeping requirements."
        },
        {
          "t": "p",
          "html": "When personal information is no longer required, we take reasonable steps to destroy it or de-identify it in accordance with the Privacy Act."
        }
      ]
    },
    {
      "n": 12,
      "title": "Access and Correction",
      "blocks": [
        {
          "t": "p",
          "html": "You may request access to the personal information we hold about you, and ask us to correct information that is inaccurate, out of date, incomplete, irrelevant or misleading, by contacting us using the details below."
        },
        {
          "t": "p",
          "html": "We will respond to access and correction requests within a reasonable period. We may need to verify your identity before providing access. In some circumstances we may refuse access where permitted by law — if we do, we will tell you why and how you may complain about the refusal. Account holders can also view and update much of their information directly within the Platform."
        }
      ]
    },
    {
      "n": 13,
      "title": "Data Breaches",
      "blocks": [
        {
          "t": "p",
          "html": "We maintain processes for identifying, assessing and responding to suspected data breaches. If a data breach occurs that is likely to result in serious harm to affected individuals, we will notify affected individuals and the Office of the Australian Information Commissioner in accordance with the Notifiable Data Breaches scheme under the Privacy Act."
        }
      ]
    },
    {
      "n": 14,
      "title": "Third-Party Websites and Services",
      "blocks": [
        {
          "t": "p",
          "html": "The Platform may contain links to, or integrate with, third-party websites and services, including Carrier websites, ecommerce platforms and payment providers. Those third parties operate under their own privacy policies, and we are not responsible for their privacy practices. We encourage you to review the privacy policy of any third-party service you use in connection with the Platform."
        }
      ]
    },
    {
      "n": 15,
      "title": "Privacy Complaints",
      "blocks": [
        {
          "t": "p",
          "html": "If you believe we have breached the Privacy Act or the APPs, or you have a concern about how we have handled your personal information, please contact us using the details below with reasonable details of your complaint."
        },
        {
          "t": "p",
          "html": "We will acknowledge your complaint, investigate it, and respond within a reasonable period (generally within 30 days). If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href=\"https://www.oaic.gov.au\">www.oaic.gov.au</a> or by calling 1300 363 992."
        }
      ]
    },
    {
      "n": 16,
      "title": "Changes to This Privacy Policy",
      "blocks": [
        {
          "t": "p",
          "html": "We may update this Privacy Policy from time to time to reflect changes to our Services, business operations or legal requirements. The current version will be published on our website, and the \"Last Updated\" date above indicates when it was most recently revised. Where a change materially affects how we handle personal information, we will take reasonable steps to bring it to your attention."
        }
      ]
    },
    {
      "n": 17,
      "title": "Contact Us",
      "blocks": [
        {
          "t": "p",
          "html": "Questions, requests or complaints about privacy can be directed to:"
        },
        {
          "t": "contact",
          "items": [
            {
              "label": "Business Details",
              "lines": [
                "Tranzit Group",
                "ABN: 12 690 967 198"
              ]
            },
            {
              "label": "Website",
              "lines": [
                "<a href=\"https://tranzitgroup.com.au\">tranzitgroup.com.au</a>",
                "Official Portal"
              ]
            },
            {
              "label": "Privacy Email",
              "lines": [
                "<a href=\"mailto:info@tranzitgroup.com.au\">info@tranzitgroup.com.au</a>",
                "Response within 24-48h"
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const termsAndConditions: LegalDoc = {
  "title": "Terms & Conditions",
  "intro": [
    {
      "t": "p",
      "html": "These Terms and Conditions (\"Terms\") govern access to and use of the Tranzit Group website, shipping platform, applications, integrations, APIs and related freight-management services. Tranzit Group ABN 12 690 967 198 is referred to in these Terms as \"Tranzit Group\", \"we\", \"us\" or \"our\"."
    },
    {
      "t": "p",
      "html": "By creating an account, accessing the Platform, obtaining a quotation, booking a shipment, purchasing a shipping service or otherwise using our Services, you agree to be bound by these Terms. If you are using the Platform on behalf of a company or other organisation, you represent that you have authority to bind that organisation to these Terms."
    }
  ],
  "sections": [
    {
      "n": 1,
      "title": "Definitions",
      "blocks": [
        {
          "t": "p",
          "html": "For these Terms:"
        },
        {
          "t": "defs",
          "items": [
            {
              "term": "Account",
              "html": "means an account registered to access the Platform."
            },
            {
              "term": "Additional Charges",
              "html": "means any additional freight charge, fee, surcharge, adjustment, penalty or cost imposed in connection with a Shipment."
            },
            {
              "term": "Business Day",
              "html": "means a day other than a Saturday, Sunday or public holiday in Victoria, Australia."
            },
            {
              "term": "Carrier",
              "html": "means an independent third-party transport, courier, postal, freight or logistics provider whose services may be available through the Platform."
            },
            {
              "term": "Carrier Terms",
              "html": "means the conditions of carriage, service terms, policies, restrictions and other conditions imposed by a Carrier."
            },
            {
              "term": "Customer, you or your",
              "html": "means the person or business accessing or using the Platform or Services."
            },
            {
              "term": "Goods",
              "html": "means items contained in or forming part of a Shipment."
            },
            {
              "term": "GST",
              "html": "has the meaning given in the A New Tax System (Goods and Services Tax) Act 1999 (Cth)."
            },
            {
              "term": "Platform",
              "html": "means the Tranzit Group website, customer portal, software applications, APIs, integrations and related technology."
            },
            {
              "term": "Services",
              "html": "means the technology, freight-management, quotation, booking, label generation, tracking, billing, integration and other services provided by Tranzit Group."
            },
            {
              "term": "Shipment or Consignment",
              "html": "means Goods submitted or proposed to be submitted for transport through a Carrier using the Platform."
            }
          ]
        }
      ]
    },
    {
      "n": 2,
      "title": "Tranzit Group's Role",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group provides a technology and freight-management platform that enables Customers to access freight services, compare available delivery services, obtain quotations, make freight bookings, generate shipping documentation, manage consignments and access related shipping functionality."
        },
        {
          "t": "p",
          "html": "Unless expressly agreed otherwise in writing, transportation of Goods is performed by independent third-party Carriers."
        },
        {
          "t": "p",
          "html": "A Carrier may impose its own Carrier Terms on a Shipment. By selecting and booking a Carrier service, you acknowledge and agree that the Shipment may also be subject to the applicable Carrier Terms."
        },
        {
          "t": "p",
          "html": "Where there is an inconsistency between these Terms and mandatory terms imposed by a Carrier in relation to the physical transportation of Goods, the applicable Carrier Terms may apply to that transportation service to the extent required."
        }
      ]
    },
    {
      "n": 3,
      "title": "Account Registration",
      "blocks": [
        {
          "t": "p",
          "html": "You may be required to create an Account to access certain Services. You must:"
        },
        {
          "t": "ul",
          "items": [
            "provide accurate and complete information;",
            "keep your Account information current;",
            "maintain the confidentiality of your username, password and security credentials;",
            "prevent unauthorised use of your Account; and",
            "notify Tranzit Group promptly if you become aware of unauthorised Account access."
          ]
        },
        {
          "t": "p",
          "html": "You are responsible for activity undertaken through your Account by persons whom you have authorised to access it. You must not allow an unauthorised third party to use your Account."
        }
      ]
    },
    {
      "n": 4,
      "title": "Business Use",
      "blocks": [
        {
          "t": "p",
          "html": "The Platform is designed primarily for businesses and organisations requiring freight, courier and logistics-management services."
        },
        {
          "t": "p",
          "html": "Subject to these Terms, Tranzit Group grants you a limited, non-exclusive, non-transferable and revocable right to access and use the Platform for legitimate business purposes. You must not:"
        },
        {
          "t": "ul",
          "items": [
            "copy or reproduce the Platform except as permitted by law;",
            "reverse engineer or attempt to derive source code from the Platform except where such restriction is prohibited by law;",
            "resell access to the Platform without our written approval;",
            "interfere with the operation or security of the Platform;",
            "access another Customer's Account without permission;",
            "scrape or systematically extract data from the Platform without approval; or",
            "use the Platform for unlawful, fraudulent or abusive purposes."
          ]
        }
      ]
    },
    {
      "n": 5,
      "title": "Freight Quotations",
      "blocks": [
        {
          "t": "p",
          "html": "Freight rates displayed through the Platform are calculated using information available at the time of the quotation. This may include:"
        },
        {
          "t": "ul",
          "items": [
            "collection location;",
            "delivery location;",
            "suburb and postcode;",
            "package quantity;",
            "actual weight;",
            "dimensions;",
            "cubic or volumetric weight;",
            "service type;",
            "Goods classification;",
            "delivery requirements;",
            "Carrier pricing;",
            "fuel levies;",
            "applicable surcharges; and",
            "other information supplied by you."
          ]
        },
        {
          "t": "p",
          "html": "Unless expressly stated otherwise, a freight quotation is based on the information provided by the Customer and may be subject to adjustment. A quotation does not guarantee that a Carrier will accept a Shipment."
        }
      ]
    },
    {
      "n": 6,
      "title": "Rate Availability",
      "blocks": [
        {
          "t": "p",
          "html": "Freight rates may change as a result of:"
        },
        {
          "t": "ul",
          "items": [
            "Carrier pricing changes;",
            "fuel levy changes;",
            "service availability;",
            "destination classification changes;",
            "remote or regional area classifications;",
            "changes to Carrier surcharges;",
            "pricing errors;",
            "changes in taxes or government charges; or",
            "other circumstances outside Tranzit Group's reasonable control."
          ]
        },
        {
          "t": "p",
          "html": "The applicable price will generally be the price displayed or agreed when the Shipment is booked, subject to adjustments permitted under these Terms."
        }
      ]
    },
    {
      "n": 7,
      "title": "Customer Shipment Information",
      "blocks": [
        {
          "t": "p",
          "html": "You are responsible for providing accurate information for each Shipment. This includes, where applicable:"
        },
        {
          "t": "ul",
          "items": [
            "sender name and address;",
            "collection address;",
            "recipient name and address;",
            "correct suburb and postcode combination;",
            "contact telephone numbers;",
            "email addresses;",
            "number of packages;",
            "package dimensions;",
            "actual weight;",
            "description of Goods;",
            "value of Goods;",
            "packaging type;",
            "dangerous goods information;",
            "delivery instructions; and",
            "any other information required by Tranzit Group or the Carrier."
          ]
        },
        {
          "t": "p",
          "html": "Tranzit Group is not responsible for additional costs or delays resulting from inaccurate, incomplete or misleading information supplied by the Customer, except to the extent caused by Tranzit Group."
        }
      ]
    },
    {
      "n": 8,
      "title": "Weight and Dimensions",
      "blocks": [
        {
          "t": "p",
          "html": "You must accurately declare the weight and dimensions of every package."
        },
        {
          "t": "p",
          "html": "Where a Carrier calculates charges based on cubic, volumetric or dimensional weight, the chargeable weight may be greater than the physical weight of the Shipment. Carrier-specific formulas and measurement methods may apply."
        },
        {
          "t": "p",
          "html": "You are responsible for ensuring that declared measurements are accurate before submitting the Shipment."
        }
      ]
    },
    {
      "n": 9,
      "title": "Reweighing and Remeasurement",
      "blocks": [
        {
          "t": "p",
          "html": "Carriers may weigh, measure, scan or otherwise inspect Shipments after collection."
        },
        {
          "t": "p",
          "html": "If a Carrier determines that the actual weight, dimensions, cubic weight, classification, quantity, packaging or other characteristics differ from the information supplied when the Shipment was booked, the Carrier may adjust the freight charge."
        },
        {
          "t": "p",
          "html": "Where such an adjustment occurs, Tranzit Group may pass the adjustment and any reasonably incurred associated Carrier charges on to the Customer. The Customer authorises Tranzit Group to invoice or otherwise recover these legitimate adjustments."
        },
        {
          "t": "p",
          "html": "Where reasonably requested, Tranzit Group will provide available supporting information relating to an adjustment."
        }
      ]
    },
    {
      "n": 10,
      "title": "Additional Carrier Charges",
      "blocks": [
        {
          "t": "p",
          "html": "A Shipment may incur Additional Charges that were not known when the original booking was made. These may include, where applicable:"
        },
        {
          "t": "ul",
          "items": [
            "fuel surcharges;",
            "remote area charges;",
            "residential delivery charges;",
            "overweight charges;",
            "oversize charges;",
            "manual handling charges;",
            "tailgate charges;",
            "waiting time;",
            "redelivery fees;",
            "futile pickup charges;",
            "address correction fees;",
            "return-to-sender charges;",
            "storage charges;",
            "additional handling fees;",
            "signature services;",
            "dangerous goods charges;",
            "after-hours services;",
            "incorrect declaration charges; or",
            "other legitimate Carrier charges applicable to the Shipment."
          ]
        },
        {
          "t": "p",
          "html": "You agree that Tranzit Group may recover such charges from you where they relate to your Shipment."
        }
      ]
    },
    {
      "n": 11,
      "title": "Bookings",
      "blocks": [
        {
          "t": "p",
          "html": "Submitting a booking request through the Platform does not necessarily guarantee acceptance by the selected Carrier. A booking may be rejected or cancelled where, for example:"
        },
        {
          "t": "ul",
          "items": [
            "the Carrier does not service the location;",
            "incorrect information has been supplied;",
            "the Goods exceed Carrier limits;",
            "the Goods are prohibited;",
            "the service is unavailable;",
            "the Customer's Account is suspended;",
            "applicable charges have not been paid; or",
            "the Carrier otherwise declines the Shipment."
          ]
        },
        {
          "t": "p",
          "html": "Where a Carrier rejects a booking before transportation commences, Tranzit Group will deal with amounts already paid in accordance with the applicable circumstances, these Terms and any rights available under law."
        }
      ]
    },
    {
      "n": 12,
      "title": "Labels and Shipping Documentation",
      "blocks": [
        {
          "t": "p",
          "html": "Shipping labels and other documentation generated through the Platform must only be used for the Shipment for which they were generated. You must not:"
        },
        {
          "t": "ul",
          "items": [
            "alter Carrier labels in a misleading manner;",
            "reuse labels;",
            "duplicate labels for multiple Shipments;",
            "change barcodes or tracking numbers;",
            "use another Customer's label; or",
            "use shipping documentation fraudulently."
          ]
        },
        {
          "t": "p",
          "html": "You are responsible for correctly attaching labels and required documentation to your Shipment."
        }
      ]
    },
    {
      "n": 13,
      "title": "Collection and Pickup",
      "blocks": [
        {
          "t": "p",
          "html": "Collection times displayed or communicated through the Platform are estimates unless expressly confirmed as guaranteed. Carrier pickup schedules may be affected by:"
        },
        {
          "t": "ul",
          "items": [
            "traffic;",
            "weather;",
            "vehicle availability;",
            "network capacity;",
            "peak periods;",
            "operational disruptions;",
            "public holidays; and",
            "events outside reasonable control."
          ]
        },
        {
          "t": "p",
          "html": "You must ensure that Goods are appropriately packaged, labelled, accessible and ready for collection at the nominated location."
        }
      ]
    },
    {
      "n": 14,
      "title": "Transit Times and Delivery Estimates",
      "blocks": [
        {
          "t": "p",
          "html": "Any estimated delivery date, delivery timeframe or transit time displayed through the Platform is an estimate only unless expressly described as a guaranteed service."
        },
        {
          "t": "p",
          "html": "Tranzit Group does not guarantee that a Shipment will be collected or delivered within an estimated timeframe where delays result from the Carrier or circumstances outside Tranzit Group's reasonable control."
        },
        {
          "t": "p",
          "html": "Delivery may be affected by circumstances including severe weather, natural disasters, road closures, network congestion, peak trading periods, incorrect addresses, industrial action, government restrictions or other operational events."
        }
      ]
    },
    {
      "n": 15,
      "title": "Authority to Leave and Safe Drop",
      "blocks": [
        {
          "t": "p",
          "html": "Some Carrier services may allow delivery without obtaining a signature, including Authority to Leave (\"ATL\"), Safe Drop or similar services."
        },
        {
          "t": "p",
          "html": "Where you select, request or authorise such a service, you acknowledge that the Carrier may leave the Goods at the delivery location in accordance with the Carrier's applicable terms."
        },
        {
          "t": "p",
          "html": "Any claim relating to Goods delivered under ATL or Safe Drop will be assessed in accordance with applicable law, these Terms and the relevant Carrier Terms."
        }
      ]
    },
    {
      "n": 16,
      "title": "Packaging",
      "blocks": [
        {
          "t": "p",
          "html": "You are responsible for ensuring Goods are appropriately packaged for the nature, size, weight and method of transportation involved. Packaging must comply with applicable Carrier requirements."
        },
        {
          "t": "p",
          "html": "Failure to adequately package Goods may result in:"
        },
        {
          "t": "ul",
          "items": [
            "damage;",
            "Carrier rejection;",
            "additional fees;",
            "delayed delivery; or",
            "rejection or reduction of a freight claim where permitted under applicable law and Carrier Terms."
          ]
        }
      ]
    },
    {
      "n": 17,
      "title": "Prohibited Goods",
      "blocks": [
        {
          "t": "p",
          "html": "You must not use the Platform to arrange transport of Goods that are prohibited by law or by the selected Carrier. Depending on the Carrier and service, restricted or prohibited Goods may include:"
        },
        {
          "t": "ul",
          "items": [
            "illegal goods;",
            "explosives;",
            "firearms or ammunition;",
            "certain dangerous goods;",
            "hazardous chemicals;",
            "radioactive substances;",
            "illegal drugs;",
            "certain controlled substances;",
            "cash or negotiable instruments;",
            "jewellery or precious metals;",
            "live animals;",
            "certain perishables;",
            "certain alcohol or tobacco products;",
            "lithium batteries;",
            "biological materials; or",
            "other Goods designated as prohibited or restricted by the Carrier."
          ]
        },
        {
          "t": "p",
          "html": "Carrier restrictions vary. You are responsible for checking whether your Goods are accepted by the selected Carrier before making a booking."
        }
      ]
    },
    {
      "n": 18,
      "title": "Dangerous Goods",
      "blocks": [
        {
          "t": "p",
          "html": "You must not tender dangerous goods for transportation unless:"
        },
        {
          "t": "ul",
          "items": [
            "the selected Carrier permits the Goods;",
            "you have accurately declared the Goods;",
            "all legal and regulatory requirements have been satisfied;",
            "the Goods have been appropriately packaged and labelled; and",
            "all documentation required by the Carrier or law has been completed."
          ]
        },
        {
          "t": "p",
          "html": "You are responsible for reasonable losses, penalties, Carrier charges or expenses incurred by Tranzit Group as a direct result of your failure to correctly declare dangerous goods, except to the extent caused or contributed to by Tranzit Group."
        }
      ]
    },
    {
      "n": 19,
      "title": "Loss or Damage",
      "blocks": [
        {
          "t": "p",
          "html": "Transportation of Goods involves inherent risks. If a Shipment is lost or damaged while in a Carrier's possession, any claim may be subject to:"
        },
        {
          "t": "ul",
          "items": [
            "the relevant Carrier Terms;",
            "applicable transit cover;",
            "statutory rights;",
            "claim time limits;",
            "packaging requirements;",
            "exclusions;",
            "evidence requirements; and",
            "compensation limits."
          ]
        },
        {
          "t": "p",
          "html": "Tranzit Group does not independently guarantee that a Carrier will approve a claim. Where appropriate, Tranzit Group may assist the Customer in submitting or administering a claim with the relevant Carrier."
        }
      ]
    },
    {
      "n": 20,
      "title": "Freight Claims",
      "blocks": [
        {
          "t": "p",
          "html": "Customers must notify Tranzit Group of loss or damage as soon as reasonably practicable after becoming aware of it. A claim may require:"
        },
        {
          "t": "ul",
          "items": [
            "tracking information;",
            "photographs;",
            "proof of damage;",
            "proof of value;",
            "purchase invoices;",
            "sales invoices;",
            "proof of adequate packaging;",
            "a description of the Goods; and",
            "other documentation reasonably required by the Carrier."
          ]
        },
        {
          "t": "p",
          "html": "Carrier claim deadlines may apply. You are responsible for providing requested information within sufficient time to allow the claim to be submitted within applicable Carrier deadlines."
        }
      ]
    },
    {
      "n": 21,
      "title": "Transit Cover",
      "blocks": [
        {
          "t": "p",
          "html": "Where optional or included transit cover is offered through the Platform, the specific terms, limits, exclusions and eligibility requirements applying to that cover will apply. The availability of transit cover may depend on:"
        },
        {
          "t": "ul",
          "items": [
            "the selected Carrier;",
            "type of Goods;",
            "declared value;",
            "destination;",
            "packaging;",
            "Shipment service; and",
            "other eligibility conditions."
          ]
        },
        {
          "t": "p",
          "html": "Unless expressly stated otherwise, purchasing freight through Tranzit Group does not mean that every Shipment is automatically insured against all risks."
        }
      ]
    },
    {
      "n": 22,
      "title": "Carrier Liability",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group does not control the day-to-day transportation operations of independent Carriers."
        },
        {
          "t": "p",
          "html": "To the extent permitted by law, Tranzit Group is not responsible for an act or omission of a Carrier that is outside Tranzit Group's reasonable control."
        },
        {
          "t": "p",
          "html": "Nothing in these Terms limits any liability which Tranzit Group is not legally permitted to limit or exclude."
        }
      ]
    },
    {
      "n": 23,
      "title": "Fees and Payment",
      "blocks": [
        {
          "t": "p",
          "html": "You must pay all applicable charges associated with your use of the Services. Depending on your Account arrangements, payment may be made through:"
        },
        {
          "t": "ul",
          "items": [
            "prepaid funds;",
            "wallet balance;",
            "debit or credit card;",
            "an approved credit account;",
            "invoice;",
            "direct debit; or",
            "another payment method approved by Tranzit Group."
          ]
        },
        {
          "t": "p",
          "html": "Applicable prices, rates, fees and payment terms may be displayed on the Platform or agreed separately with you."
        }
      ]
    },
    {
      "n": 24,
      "title": "GST",
      "blocks": [
        {
          "t": "p",
          "html": "Unless otherwise expressly stated, prices displayed or quoted may be exclusive of GST."
        },
        {
          "t": "p",
          "html": "Where GST is payable, Tranzit Group may add GST to the relevant taxable supply in accordance with Australian taxation requirements. For clarity, Additional Charges, freight adjustments and surcharges are also subject to GST where applicable."
        },
        {
          "t": "p",
          "html": "Tax invoices will be issued where required."
        }
      ]
    },
    {
      "n": 25,
      "title": "Credit Accounts",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group may, at its discretion and subject to separate approval, provide a Customer with credit terms. Where credit is provided:"
        },
        {
          "t": "ul",
          "items": [
            "a credit limit may apply;",
            "invoices must be paid by their applicable due date;",
            "Tranzit Group may review the credit arrangement periodically;",
            "available credit may be reduced where invoices remain outstanding; and",
            "further bookings may be restricted where the Account exceeds its approved limit or has overdue amounts."
          ]
        },
        {
          "t": "p",
          "html": "Any change to an existing credit arrangement will be handled reasonably having regard to the circumstances and any applicable agreement with the Customer."
        }
      ]
    },
    {
      "n": 26,
      "title": "Wallet or Prepaid Balance",
      "blocks": [
        {
          "t": "p",
          "html": "Where the Platform provides a prepaid wallet or account balance:"
        },
        {
          "t": "ul",
          "items": [
            "amounts added may be used to pay eligible Tranzit Group charges;",
            "deductions may be made for authorised bookings and legitimate adjustments;",
            "the balance shown in the Platform may be updated when adjustments are processed;",
            "paid (non-promotional) wallet balances do not expire while your Account remains open;",
            "promotional or complimentary credits may be subject to separate conditions, including expiry; and",
            "refunds will be dealt with in accordance with applicable law and any agreed account conditions."
          ]
        },
        {
          "t": "p",
          "html": "If your Account is closed, any unused paid wallet balance will, on request and subject to verification and any amounts owing, be refunded in accordance with applicable law."
        },
        {
          "t": "p",
          "html": "A Platform wallet is a payment functionality for accessing Tranzit Group Services and is not represented as a bank account."
        }
      ]
    },
    {
      "n": 27,
      "title": "Payment Processing Fees",
      "blocks": [
        {
          "t": "p",
          "html": "Where legally permitted and clearly disclosed, Tranzit Group may apply a payment processing surcharge or fee to certain payment methods."
        },
        {
          "t": "p",
          "html": "Any payment surcharge imposed by Tranzit Group will not exceed the amount permitted under applicable law."
        }
      ]
    },
    {
      "n": 28,
      "title": "Invoice Disputes",
      "blocks": [
        {
          "t": "p",
          "html": "If you dispute an invoice or a charge in good faith, you must notify Tranzit Group within 14 days of the invoice date, providing reasonable details of the disputed amount and the basis of the dispute."
        },
        {
          "t": "p",
          "html": "The parties will work together in good faith to resolve the dispute promptly. Any undisputed portion of an invoice remains payable by its due date."
        },
        {
          "t": "p",
          "html": "Tranzit Group will not suspend an Account solely because a genuinely disputed amount is withheld while the dispute is being resolved in accordance with this clause."
        }
      ]
    },
    {
      "n": 29,
      "title": "Overdue Accounts",
      "blocks": [
        {
          "t": "p",
          "html": "If an undisputed invoice remains overdue, Tranzit Group may, after providing reasonable notice where appropriate:"
        },
        {
          "t": "ul",
          "items": [
            "restrict new bookings;",
            "suspend credit facilities;",
            "suspend access to part or all of the Platform; or",
            "take reasonable steps to recover the overdue amount."
          ]
        },
        {
          "t": "p",
          "html": "The Customer remains responsible for legitimate charges incurred before suspension. Tranzit Group may seek reasonable debt-recovery costs where permitted by law and where such costs have actually been incurred."
        }
      ]
    },
    {
      "n": 30,
      "title": "Cancellations and Refunds",
      "blocks": [
        {
          "t": "p",
          "html": "A Customer may request cancellation of a Shipment. Whether a Shipment can be cancelled and whether a refund applies will depend on factors including:"
        },
        {
          "t": "ul",
          "items": [
            "whether the Carrier has collected the Goods;",
            "whether a pickup fee has already been incurred;",
            "whether the Carrier has processed the booking;",
            "whether the label has been used;",
            "Carrier cancellation terms; and",
            "the particular service booked."
          ]
        },
        {
          "t": "p",
          "html": "Where no Carrier cost has been incurred and the service has not commenced, Tranzit Group will process eligible cancellations in accordance with the applicable booking conditions."
        },
        {
          "t": "p",
          "html": "Where a refund is approved, it will be processed to the original payment method or credited to your wallet balance (as applicable) within 10 Business Days of approval, unless otherwise agreed or required by law."
        },
        {
          "t": "p",
          "html": "Nothing in this clause limits rights or remedies that cannot legally be excluded."
        }
      ]
    },
    {
      "n": 31,
      "title": "Third-Party Platforms and Integrations",
      "blocks": [
        {
          "t": "p",
          "html": "The Platform may integrate with third-party services including ecommerce platforms, marketplaces, payment providers, accounting platforms, Carriers and other software providers. Such services may include platforms such as Shopify, WooCommerce or other supported systems."
        },
        {
          "t": "p",
          "html": "Third-party services are controlled by their respective providers. Tranzit Group does not guarantee that a third-party service will remain available, unchanged or compatible with the Platform indefinitely."
        },
        {
          "t": "p",
          "html": "Where a third-party provider changes or discontinues its API, functionality, policies or services, Tranzit Group may need to modify, suspend or discontinue the affected integration. We will take reasonable steps to minimise disruption where practicable."
        }
      ]
    },
    {
      "n": 32,
      "title": "Platform Availability",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group aims to provide reliable Platform availability but cannot guarantee uninterrupted or error-free operation. Access may occasionally be interrupted for:"
        },
        {
          "t": "ul",
          "items": [
            "maintenance;",
            "security updates;",
            "software updates;",
            "emergency maintenance;",
            "Carrier API outages;",
            "third-party outages;",
            "hosting or network failures; or",
            "events outside reasonable control."
          ]
        },
        {
          "t": "p",
          "html": "Where reasonably practicable, planned maintenance that materially affects the Services will be communicated in advance."
        }
      ]
    },
    {
      "n": 33,
      "title": "Australian Consumer Law",
      "blocks": [
        {
          "t": "p",
          "html": "Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty, right or remedy that cannot lawfully be excluded, restricted or modified under the Competition and Consumer Act 2010 (Cth), including the Australian Consumer Law, or other applicable legislation."
        },
        {
          "t": "p",
          "html": "Where the law permits Tranzit Group to limit its liability for a failure to comply with a statutory guarantee, that liability will be limited only to the extent permitted by law."
        }
      ]
    },
    {
      "n": 34,
      "title": "Limitation of Liability",
      "blocks": [
        {
          "t": "p",
          "html": "To the maximum extent permitted by law, Tranzit Group will not be liable for indirect, incidental, special or consequential loss arising from use of the Platform or Services where such loss was not reasonably foreseeable. This may include loss of profits, business interruption or loss of business opportunity."
        },
        {
          "t": "p",
          "html": "However, nothing in these Terms excludes liability:"
        },
        {
          "t": "ul",
          "items": [
            "that cannot legally be excluded;",
            "for fraud;",
            "for wilful misconduct; or",
            "to the extent a loss was caused by Tranzit Group's negligence where liability cannot lawfully be excluded or limited."
          ]
        },
        {
          "t": "p",
          "html": "Where permitted by law, Tranzit Group's liability in relation to the Services may be limited to the amount paid by the Customer for the particular service giving rise to the claim or another amount expressly agreed between the parties. This limitation does not apply where such a limitation would be unlawful or unfair in the circumstances."
        }
      ]
    },
    {
      "n": 35,
      "title": "Customer Indemnity",
      "blocks": [
        {
          "t": "p",
          "html": "To the extent permitted by law, you indemnify Tranzit Group against reasonable losses, liabilities, Carrier charges, penalties, claims and expenses directly arising from:"
        },
        {
          "t": "ul",
          "items": [
            "your unlawful use of the Platform;",
            "your intentional or negligent breach of these Terms;",
            "inaccurate Shipment information supplied by you;",
            "prohibited Goods knowingly tendered by you;",
            "undeclared or incorrectly declared dangerous goods;",
            "infringement of a third party's rights by materials supplied by you; or",
            "fraudulent activity undertaken through your Account by you or a person you authorised."
          ]
        },
        {
          "t": "p",
          "html": "Your liability under this clause will be reduced to the extent that Tranzit Group caused or contributed to the relevant loss."
        }
      ]
    },
    {
      "n": 36,
      "title": "Intellectual Property",
      "blocks": [
        {
          "t": "p",
          "html": "The Platform and its contents, including software, interface designs, logos, branding, databases, documentation, text, graphics and proprietary technology, are owned by or licensed to Tranzit Group."
        },
        {
          "t": "p",
          "html": "Except as expressly permitted under these Terms or by law, you must not reproduce, distribute, modify, commercially exploit or create derivative works from Tranzit Group intellectual property without prior written permission."
        }
      ]
    },
    {
      "n": 37,
      "title": "Customer Data",
      "blocks": [
        {
          "t": "p",
          "html": "You retain ownership of data and information that you or your authorised systems provide to Tranzit Group. You grant Tranzit Group a non-exclusive right to use, process, transmit and store that data to the extent reasonably necessary to:"
        },
        {
          "t": "ul",
          "items": [
            "provide the Services;",
            "process Shipments;",
            "communicate with Carriers;",
            "provide integrations;",
            "process payments;",
            "provide support;",
            "maintain security;",
            "comply with legal obligations; and",
            "operate and improve the Platform."
          ]
        },
        {
          "t": "p",
          "html": "Tranzit Group does not acquire ownership of your underlying business data merely because you use the Platform."
        }
      ]
    },
    {
      "n": 38,
      "title": "Privacy",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group may collect and process personal information including names, business details, addresses, telephone numbers, email addresses, recipient information, order information and other information necessary to provide its Services."
        },
        {
          "t": "p",
          "html": "Personal information will be handled in accordance with Tranzit Group's Privacy Policy, available on the Tranzit Group website, and applicable privacy laws."
        },
        {
          "t": "p",
          "html": "You are responsible for ensuring that you have lawful authority to provide personal information relating to senders, recipients, customers, employees and other individuals to Tranzit Group."
        }
      ]
    },
    {
      "n": 39,
      "title": "Security",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group will take reasonable steps to protect the security of the Platform and information under its control."
        },
        {
          "t": "p",
          "html": "You must also maintain appropriate security measures for your Account, integrations, passwords, API credentials and connected services."
        },
        {
          "t": "p",
          "html": "You must promptly notify Tranzit Group if you reasonably suspect that your Account, API credentials or integration credentials have been compromised."
        }
      ]
    },
    {
      "n": 40,
      "title": "API Usage",
      "blocks": [
        {
          "t": "p",
          "html": "Where Tranzit Group provides API access, you must:"
        },
        {
          "t": "ul",
          "items": [
            "keep API credentials confidential;",
            "use the API only for authorised purposes;",
            "comply with applicable technical limits;",
            "not deliberately overload the API;",
            "not attempt to bypass security controls;",
            "not use the API to access another Customer's information; and",
            "comply with any separately provided API documentation or policies."
          ]
        },
        {
          "t": "p",
          "html": "Tranzit Group may temporarily restrict API access where reasonably necessary to protect security, Platform stability or other Customers."
        }
      ]
    },
    {
      "n": 41,
      "title": "Prohibited Platform Activities",
      "blocks": [
        {
          "t": "p",
          "html": "You must not use the Platform:"
        },
        {
          "t": "ul",
          "items": [
            "unlawfully;",
            "fraudulently;",
            "to impersonate another person;",
            "to transmit malware;",
            "to gain unauthorised access to systems;",
            "to interfere with Platform security;",
            "to submit fraudulent freight bookings;",
            "to generate fraudulent shipping labels;",
            "to conduct payment fraud;",
            "to harass or threaten another person;",
            "to infringe intellectual property rights; or",
            "in a way reasonably likely to materially damage Tranzit Group's systems or services."
          ]
        }
      ]
    },
    {
      "n": 42,
      "title": "Suspension",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group may suspend or restrict access to an Account where reasonably necessary because of:"
        },
        {
          "t": "ul",
          "items": [
            "material or repeated breach of these Terms;",
            "overdue undisputed amounts;",
            "suspected fraud;",
            "a serious security risk;",
            "misuse of Carrier services;",
            "shipment of prohibited or dangerous Goods contrary to these Terms;",
            "fraudulent chargebacks;",
            "legal or regulatory requirements; or",
            "conduct presenting a material risk to Tranzit Group, a Carrier or another person."
          ]
        },
        {
          "t": "p",
          "html": "Where appropriate and reasonably practicable, Tranzit Group will notify the Customer of the reason for suspension and provide an opportunity to remedy the issue."
        }
      ]
    },
    {
      "n": 43,
      "title": "Termination",
      "blocks": [
        {
          "t": "p",
          "html": "Either party may cease using or providing the Services subject to any applicable contractual arrangements and outstanding obligations. Termination does not affect:"
        },
        {
          "t": "ul",
          "items": [
            "amounts already payable;",
            "existing freight bookings;",
            "pending freight adjustments;",
            "claims relating to previous Shipments;",
            "accrued rights; or",
            "provisions intended to survive termination."
          ]
        },
        {
          "t": "p",
          "html": "Where feasible, Customers may request export of eligible Account information before Account closure."
        }
      ]
    },
    {
      "n": 44,
      "title": "Force Majeure",
      "blocks": [
        {
          "t": "p",
          "html": "Neither party will be liable for failure or delay in performing an obligation, other than an obligation to pay an amount already properly due, where the failure is caused by events outside that party's reasonable control. Such events may include:"
        },
        {
          "t": "ul",
          "items": [
            "natural disasters;",
            "floods;",
            "bushfires;",
            "severe weather;",
            "pandemics;",
            "war;",
            "civil disturbance;",
            "industrial action;",
            "government restrictions;",
            "road closures;",
            "major telecommunications failures;",
            "widespread internet outages;",
            "Carrier network disruption; or",
            "major infrastructure failure."
          ]
        },
        {
          "t": "p",
          "html": "The affected party must take reasonable steps to minimise the effect of the disruption."
        }
      ]
    },
    {
      "n": 45,
      "title": "Changes to the Platform",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group may update, improve or modify Platform functionality from time to time. This may include introducing, modifying or discontinuing particular features, Carriers or integrations."
        },
        {
          "t": "p",
          "html": "Where a change materially reduces functionality relied upon by Customers, Tranzit Group will endeavour to provide reasonable notice where practicable."
        }
      ]
    },
    {
      "n": 46,
      "title": "Changes to These Terms",
      "blocks": [
        {
          "t": "p",
          "html": "Tranzit Group may update these Terms from time to time to reflect changes to:"
        },
        {
          "t": "ul",
          "items": [
            "the Platform;",
            "Services;",
            "Carrier arrangements;",
            "business operations;",
            "legal requirements; or",
            "regulatory requirements."
          ]
        },
        {
          "t": "p",
          "html": "The current Terms will be published on the Tranzit Group website or Platform. Where a change materially affects an existing Customer's rights or obligations, Tranzit Group will provide reasonable notice by email, through the Platform or another reasonable communication method."
        },
        {
          "t": "p",
          "html": "Your continued use of the Platform or Services after updated Terms take effect (or after any notice period stated in the notice) constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you should stop using the Platform and contact Tranzit Group regarding your Account."
        }
      ]
    },
    {
      "n": 47,
      "title": "Communications and Notices",
      "blocks": [
        {
          "t": "p",
          "html": "You consent to receive operational communications relating to:"
        },
        {
          "t": "ul",
          "items": [
            "Account administration;",
            "freight bookings;",
            "tracking;",
            "billing;",
            "security;",
            "Carrier issues;",
            "Platform changes; and",
            "these Terms."
          ]
        },
        {
          "t": "p",
          "html": "Marketing communications will be managed separately in accordance with applicable law and available opt-out mechanisms."
        }
      ]
    },
    {
      "n": 48,
      "title": "Disputes",
      "blocks": [
        {
          "t": "p",
          "html": "If a dispute arises relating to these Terms or the Services, the parties should first attempt to resolve the dispute in good faith. A Customer should provide Tranzit Group with reasonable details of the dispute and supporting information."
        },
        {
          "t": "p",
          "html": "Tranzit Group will review the matter and attempt to reach a commercially reasonable resolution. Nothing in this clause prevents either party from seeking urgent court relief or exercising rights available under applicable law."
        }
      ]
    },
    {
      "n": 49,
      "title": "Assignment",
      "blocks": [
        {
          "t": "p",
          "html": "You must not assign or transfer material rights or obligations under these Terms without Tranzit Group's consent, which will not be unreasonably withheld where the proposed transfer does not materially prejudice Tranzit Group."
        },
        {
          "t": "p",
          "html": "Tranzit Group may assign its rights and obligations as part of a genuine sale, restructure or transfer of its business, provided doing so does not materially reduce the Customer's contractual rights."
        }
      ]
    },
    {
      "n": 50,
      "title": "Severability",
      "blocks": [
        {
          "t": "p",
          "html": "If any provision of these Terms is determined to be invalid or unenforceable, that provision will be severed or read down to the minimum extent necessary. The remaining provisions will continue in effect."
        }
      ]
    },
    {
      "n": 51,
      "title": "Waiver",
      "blocks": [
        {
          "t": "p",
          "html": "Failure by either party to immediately enforce a provision of these Terms does not constitute a waiver of that provision or any other right."
        }
      ]
    },
    {
      "n": 52,
      "title": "Entire Agreement",
      "blocks": [
        {
          "t": "p",
          "html": "These Terms, together with any pricing agreement, credit agreement, service agreement, Carrier Terms, Privacy Policy or other terms expressly incorporated into them, constitute the agreement relating to your use of the relevant Services."
        },
        {
          "t": "p",
          "html": "Where the parties have entered into a separately signed agreement that expressly overrides these Terms, the signed agreement will prevail to the extent of any inconsistency."
        }
      ]
    },
    {
      "n": 53,
      "title": "Governing Law",
      "blocks": [
        {
          "t": "p",
          "html": "These Terms are governed by the laws of Victoria, Australia."
        },
        {
          "t": "p",
          "html": "Subject to any rights that cannot lawfully be restricted, the parties submit to the non-exclusive jurisdiction of the courts of Victoria and applicable Commonwealth courts."
        }
      ]
    },
    {
      "n": 54,
      "title": "Contact Information",
      "blocks": [
        {
          "t": "p",
          "html": "Questions about these Terms or the Tranzit Group Services can be directed to:"
        },
        {
          "t": "contact",
          "items": [
            {
              "label": "Business Details",
              "lines": [
                "Tranzit Group",
                "ABN: 12 690 967 198",
                "<a href=\"https://tranzitgroup.com.au\">tranzitgroup.com.au</a>"
              ]
            },
            {
              "label": "Address",
              "lines": [
                "12B Bass Ct, Keysborough",
                "VIC 3173, Australia"
              ]
            },
            {
              "label": "Contact Details",
              "lines": [
                "<a href=\"mailto:info@tranzitgroup.com.au\">info@tranzitgroup.com.au</a>"
              ]
            }
          ]
        }
      ]
    },
    {
      "n": 55,
      "title": "Acceptance",
      "blocks": [
        {
          "t": "p",
          "html": "By registering an Account, selecting \"I agree\", booking a Shipment, purchasing Services or continuing to use the Platform after being provided with these Terms, you acknowledge that you have read and understood these Terms and agree to be bound by them."
        },
        {
          "t": "p",
          "html": "By using our Platform or Services, you confirm your acceptance of these Terms and Conditions."
        }
      ]
    }
  ]
};
