/**
 * Common type definitions for the application
 */

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavSection[];
  hasRichMenu?: boolean;
}

export interface NavSection {
  title: string;
  icon?: React.ElementType | null;
  items: { label: string; href: string }[];
}

// Blog
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  publishedAt: string;
  tags: string[];
}

export interface Author {
  name: string;
  image: string;
  role: string;
}

// Testimonial
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating?: number;
}

// Service
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

// Industry
export interface Industry {
  id: string;
  name: string;
  image: string;
  title: string;
  features: IndustryFeature[];
  ctaText?: string;
  ctaHref?: string;
}

export interface IndustryFeature {
  text: string;
}

// Timeline
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  align?: 'left' | 'right';
}

// Value
export interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

// Feature
export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

// Content Block
export interface ContentBlock {
  title: string;
  description: string;
  image: string;
  icon?: React.ElementType;
  reverse?: boolean;
}

// Button Props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
}

// Input Props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ElementType;
}

// Card Props
export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

// Pagination
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// API Response
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Metadata
export interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}
