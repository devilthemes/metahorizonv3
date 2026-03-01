import { LucideIcon } from 'lucide-react';

export interface SlideCard {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  infoItems: string[];
  cards: SlideCard[];
}

export interface SliderProps {
  slides?: SlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}
