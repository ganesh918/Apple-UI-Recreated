export interface FooterDirectorySection {
  title: string;
  links: string[];
}

export interface FooterDirectoryColumn {
  sections: FooterDirectorySection[];
  paddingBottom?: number;
}

export const footerDirectoryColumns: FooterDirectoryColumn[] = [
  {
    sections: [
      {
        title: 'Shop and Learn',
        links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
      },
      {
        title: 'Apple Wallet',
        links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
      },
    ],
  },
  {
    sections: [
      {
        title: 'Account',
        links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
      },
      {
        title: 'Entertainment',
        links: [
          'Apple One',
          'Apple TV+',
          'Apple Music',
          'Apple Arcade',
          'Apple Fitness+',
          'Apple News+',
          'Apple Podcasts',
          'Apple Books',
          'App Store',
        ],
      },
    ],
    paddingBottom: 51.1875,
  },
  {
    sections: [
      {
        title: 'Apple Store',
        links: [
          'Find a Store',
          'Genius Bar',
          'Today at Apple',
          'Apple Camp',
          'Apple Store App',
          'Certified Refurbished',
          'Apple Trade In',
          'Financing',
          'Carrier Deals at Apple',
          'Order Status',
          'Shopping Help',
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: 'For Business',
        links: ['Apple and Business', 'Shop for Business'],
      },
      {
        title: 'For Education',
        links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
      },
      {
        title: 'For Healthcare',
        links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
      },
      {
        title: 'For Government',
        links: ['Shop for Government', 'Shop for Veterans and Military'],
      },
    ],
    paddingBottom: 22.375,
  },
  {
    sections: [
      {
        title: 'Apple Values',
        links: [
          'Accessibility',
          'Education',
          'Environment',
          'Inclusion and Diversity',
          'Privacy',
          'Racial Equity and Justice',
          'Supplier Responsibility',
        ],
      },
      {
        title: 'About Apple',
        links: [
          'Newsroom',
          'Apple Leadership',
          'Career Opportunities',
          'Investors',
          'Ethics & Compliance',
          'Events',
          'Contact Apple',
        ],
      },
    ],
  },
];

export function flattenFooterDirectorySections(): FooterDirectorySection[] {
  return footerDirectoryColumns.flatMap((column) => column.sections);
}

export const footerLegalLinks = [
  'Privacy Policy',
  'Terms of Use',
  'Sales and Refunds',
  'Legal',
  'Site Map',
] as const;
