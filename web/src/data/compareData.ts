import { images } from '../assets/images';

export interface CompareFeature {
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  title?: string;
  subtitle?: string;
  titleFootnote?: string;
  subtitleFootnote?: string;
  details?: string[];
  specLines?: string[][];
  specDash?: boolean;
  extras?: string[];
  muted?: boolean;
  minHeight?: number;
  titleVariant?: 'display' | 'default';
  placeholder?: boolean;
}

export interface CompareProduct {
  id: string;
  name: string;
  tagline: string;
  price: string;
  phoneImage: string;
  phoneWidth: number;
  phoneHeight: number;
  colorsImage: string;
  logoImage: string;
  isNew?: boolean;
  features: CompareFeature[];
}

export const compareProducts: CompareProduct[] = [
  {
    id: '14-pro',
    name: 'iPhone 14 Pro',
    tagline: 'The ultimate iPhone.',
    price: 'From $999',
    phoneImage: images.compare14Pro,
    phoneWidth: 190,
    phoneHeight: 257,
    colorsImage: images.compare14ProColors,
    logoImage: images.compare14ProLogo,
    isNew: true,
    features: [
      {
        title: '6.7″ or 6.1″',
        subtitle: 'Super Retina XDR display',
        subtitleFootnote: '3',
        extras: ['ProMotion technology', 'Always-On display'],
        minHeight: 110.38,
        titleVariant: 'display',
      },
      {
        icon: images.icons.featureDynamicIsland,
        iconWidth: 38,
        iconHeight: 38,
        title: 'Dynamic Island',
        subtitle: 'A new way to\ninteract with iPhone',
        muted: true,
        minHeight: 110,
      },
      {
        icon: images.icons.featureSos,
        iconWidth: 39,
        iconHeight: 39,
        title: 'Emergency SOS via satellite',
        titleFootnote: '4',
        subtitle: 'Emergency SOS',
        extras: ['Crash Detection5'],
        minHeight: 133.38,
      },
      {
        icon: images.icons.featureCameraPro,
        iconWidth: 36,
        iconHeight: 36,
        title: 'Pro camera system',
        specLines: [['48MP Main', 'Ultra Wide'], ['Telephoto']],
        details: ['Photonic Engine for incredible\ndetail and color', 'Autofocus on TrueDepth\nfront camera'],
        minHeight: 188,
      },
      {
        icon: images.icons.featureActionMode,
        iconWidth: 39,
        iconHeight: 39,
        title: 'Action mode smooths out shaky handheld videos',
        minHeight: 91,
      },
      {
        icon: images.icons.featureBattery,
        iconWidth: 43,
        iconHeight: 22,
        title: 'Up to 29 hours\nvideo playback',
        titleFootnote: '6',
        minHeight: 74,
      },
      {
        icon: images.icons.featureA16,
        iconWidth: 38,
        iconHeight: 38,
        title: 'A16 Bionic chip',
        minHeight: 90,
      },
      {
        icon: images.icons.featureFaceId,
        iconWidth: 38,
        iconHeight: 38,
        title: 'Face ID',
        minHeight: 70,
      },
      {
        icon: images.icons.feature5g,
        iconWidth: 50,
        iconHeight: 36,
        title: 'Superfast 5G cellular',
        titleFootnote: '7',
        minHeight: 114,
      },
    ],
  },
  {
    id: '14',
    name: 'iPhone 14',
    tagline: 'A total powerhouse.',
    price: 'From $799*',
    phoneImage: images.compare14,
    phoneWidth: 180,
    phoneHeight: 257,
    colorsImage: images.compare14Colors,
    logoImage: images.compare14Logo,
    isNew: true,
    features: [
      {
        title: '6.7″ or 6.1″',
        subtitle: 'Super Retina XDR display',
        subtitleFootnote: '3',
        minHeight: 110.38,
        titleVariant: 'display',
      },
      { placeholder: true, minHeight: 110 },
      {
        icon: images.icons.featureSos,
        iconWidth: 39,
        iconHeight: 39,
        title: 'Emergency SOS via satellite',
        titleFootnote: '4',
        subtitle: 'Emergency SOS',
        extras: ['Crash Detection5'],
        minHeight: 133.38,
      },
      {
        icon: images.icons.featureCamera14,
        iconWidth: 36,
        iconHeight: 36,
        title: 'Advanced dual-camera system',
        specLines: [['12MP Main', 'Ultra Wide']],
        specDash: true,
        details: ['Photonic Engine for incredible\ndetail and color', 'Autofocus on TrueDepth\nfront camera'],
        minHeight: 188,
      },
      {
        icon: images.icons.featureActionMode,
        iconWidth: 39,
        iconHeight: 39,
        title: 'Action mode smooths out shaky handheld videos',
        minHeight: 91,
      },
      {
        icon: images.icons.featureBattery,
        iconWidth: 43,
        iconHeight: 22,
        title: 'Up to 26 hours\nvideo playback',
        titleFootnote: '6',
        minHeight: 74,
      },
      {
        icon: images.icons.featureA15,
        iconWidth: 38,
        iconHeight: 38,
        title: 'A15 Bionic chip\nwith 5-core GPU',
        minHeight: 90,
      },
      {
        icon: images.icons.featureFaceId,
        iconWidth: 38,
        iconHeight: 38,
        title: 'Face ID',
        minHeight: 70,
      },
      {
        icon: images.icons.feature5g,
        iconWidth: 50,
        iconHeight: 36,
        title: 'Superfast 5G cellular',
        titleFootnote: '7',
        minHeight: 114,
      },
    ],
  },
  {
    id: '13',
    name: 'iPhone 13',
    tagline: 'As amazing as ever.',
    price: 'From $599*',
    phoneImage: images.compare13,
    phoneWidth: 161,
    phoneHeight: 257,
    colorsImage: images.compare13Colors,
    logoImage: images.compare13Logo,
    features: [
      {
        title: '6.1″ or 5.4″',
        subtitle: 'Super Retina XDR display',
        subtitleFootnote: '3',
        minHeight: 110.38,
        titleVariant: 'display',
      },
      { placeholder: true, minHeight: 110 },
      {
        icon: images.icons.featureSos,
        iconWidth: 39,
        iconHeight: 39,
        title: 'Emergency SOS',
        minHeight: 133.38,
      },
      {
        icon: images.icons.featureCamera13,
        iconWidth: 36,
        iconHeight: 36,
        title: 'Dual‑camera system',
        specLines: [['12MP Main', 'Ultra Wide']],
        specDash: true,
        details: ['TrueDepth front camera'],
        minHeight: 188,
      },
      { placeholder: true, minHeight: 91 },
      {
        icon: images.icons.featureBattery,
        iconWidth: 43,
        iconHeight: 22,
        title: 'Up to 19 hours\nvideo playback',
        titleFootnote: '6',
        minHeight: 74,
      },
      {
        icon: images.icons.featureA15,
        iconWidth: 38,
        iconHeight: 38,
        title: 'A15 Bionic chip\nwith 4-core GPU',
        minHeight: 90,
      },
      {
        icon: images.icons.featureFaceId,
        iconWidth: 38,
        iconHeight: 38,
        title: 'Face ID',
        minHeight: 70,
      },
      {
        icon: images.icons.feature5g,
        iconWidth: 50,
        iconHeight: 36,
        title: '5G cellular',
        titleFootnote: '7',
        minHeight: 114,
      },
    ],
  },
  {
    id: 'se',
    name: 'iPhone SE',
    tagline: 'Serious power. Serious value.',
    price: 'From $429',
    phoneImage: images.compareSe,
    phoneWidth: 151,
    phoneHeight: 257,
    colorsImage: images.compareSeColors,
    logoImage: images.compareSeLogo,
    features: [
      {
        title: '4.7″',
        subtitle: 'Retina HD display',
        minHeight: 110.38,
        titleVariant: 'display',
      },
      { placeholder: true, minHeight: 110 },
      {
        icon: images.icons.featureSos,
        iconWidth: 39,
        iconHeight: 39,
        title: 'Emergency SOS',
        minHeight: 133.38,
      },
      {
        icon: images.icons.featureCameraSe,
        iconWidth: 36,
        iconHeight: 36,
        title: 'Advanced camera system',
        specLines: [['12MP Main']],
        specDash: true,
        details: ['Front camera'],
        minHeight: 188,
      },
      { placeholder: true, minHeight: 91 },
      {
        icon: images.icons.featureBattery,
        iconWidth: 43,
        iconHeight: 22,
        title: 'Up to 15 hours\nvideo playback',
        titleFootnote: '6',
        minHeight: 74,
      },
      {
        icon: images.icons.featureA15,
        iconWidth: 38,
        iconHeight: 38,
        title: 'A15 Bionic chip\nwith 4-core GPU',
        minHeight: 90,
      },
      {
        icon: images.icons.featureTouchId,
        iconWidth: 39,
        iconHeight: 38,
        title: 'Touch ID',
        minHeight: 70,
      },
      {
        icon: images.icons.feature5g,
        iconWidth: 50,
        iconHeight: 36,
        title: '5G cellular',
        titleFootnote: '7',
        minHeight: 114,
      },
    ],
  },
];

/** Shared row heights + 40px gaps between rows (from Figma). */
export const compareFeatureRowHeights = compareProducts[0].features.map(
  (feature) => feature.minHeight ?? 0,
);
export const compareFeatureRowGap = 40;
export const compareHeaderHeight = 547;
