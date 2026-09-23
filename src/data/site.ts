export const SITE_URL = "https://allaboutrecovery.com.au";

export const site = {
  name: "All About Recovery",
  legalName: "All About Recovery Pty Ltd",
  tagline: "We empower people with psychosocial disabilities",
  description:
    "All About Recovery is a registered NDIS provider delivering psychosocial, mental health and disability support across Sydney, Dubbo and Tamworth. Person-centred care that helps you move from vulnerability to confidence.",
  url: SITE_URL,
  phone: "1300 011 227",
  phoneHref: "tel:+611300011227",
  email: "info@allaboutrecovery.com.au",
  emailHref: "mailto:info@allaboutrecovery.com.au",
  socials: {
    instagram: "https://www.instagram.com/allaboutrecovery_/",
    facebook: "https://www.facebook.com/profile.php?id=61587335993834",
  },
} as const;

export type Location = {
  name: string;
  isHeadOffice?: boolean;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  hours: string;
  hoursDays: string;
  mapQuery: string;
};

export const locations: Location[] = [
  {
    name: "Sydney",
    isHeadOffice: true,
    street: "3/36 Woodriff Street",
    suburb: "Penrith",
    state: "NSW",
    postcode: "2750",
    hoursDays: "Monday–Friday",
    hours: "9am–5pm",
    mapQuery: "3/36 Woodriff Street, Penrith NSW 2750",
  },
  {
    name: "Dubbo",
    street: "23b Violet Circuit",
    suburb: "Dubbo",
    state: "NSW",
    postcode: "2830",
    hoursDays: "Monday–Friday",
    hours: "9am–5pm",
    mapQuery: "23b Violet Circuit, Dubbo NSW 2830",
  },
  {
    name: "Tamworth",
    street: "1/158 Marius Street",
    suburb: "Tamworth",
    state: "NSW",
    postcode: "2340",
    hoursDays: "Monday–Friday",
    hours: "8am–4pm",
    mapQuery: "1/158 Marius Street, Tamworth NSW 2340",
  },
];

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Accommodation", href: "/accommodation-support" },
  { label: "Stories", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Referrals", href: "/referrals" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Support",
    links: [
      { label: "All services", href: "/services" },
      { label: "Mental health support", href: "/services/mental-health-support" },
      { label: "Support coordination", href: "/services/support-coordination-and-recovery-coaching" },
      { label: "Daily living support", href: "/services/daily-living-support" },
      { label: "Accommodation support", href: "/accommodation-support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Participant stories", href: "/testimonials" },
      { label: "Frequently asked questions", href: "/faq" },
      { label: "Make a referral", href: "/referrals" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms" },
      { label: "Feedback & complaints", href: "/contact#feedback" },
    ],
  },
];
