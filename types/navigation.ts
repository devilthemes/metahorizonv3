export interface NavItem {
  label: string;
  href: string;
  children?: NavSection[];
  hasRichMenu?: boolean;
}

export interface NavSection {
  title: string;
  icon?: React.ElementType | null;
  items: Array<{ label: string; href: string }>;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  heading: string;
  links: FooterLink[];
}
