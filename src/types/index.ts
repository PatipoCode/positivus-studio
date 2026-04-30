export type CardVariant = 'light' | 'accent' | 'dark';

export interface IconProps {
  size?: number;
}

export interface NavLink {
  label: string;
  to: string | { path: string; hash: string };
}

export interface SocialIcon {
  label: string;
  href: string;
  icon: string;
}

export interface CaseMetric {
  label: string;
  value: string;
}

export interface Case {
  title: string;
  description: string;
  client: string;
  service: string;
  metrics: CaseMetric[];
  details: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface BlogCard {
  category: string;
  date: string;
  title: string;
  description: string;
  author: BlogAuthor;
  href?: string;
}

export interface PricingCardFeature {
  label: string;
  value?: string;
}

export interface PricingCard {
  name: string;
  description: string;
  price: number;
  features: PricingCardFeature[];
}

export interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Brand {
  name: string;
  src: string;
}

export interface Service {
  title: string;
  slug: string;
  image: string;
  variant: CardVariant;
}
