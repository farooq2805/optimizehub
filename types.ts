import React from 'react';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  BLOG = 'blog',
  SERVICE_SEO = 'service_seo',
  SERVICE_PAID = 'service_paid',
  SERVICE_INFLUENCER = 'service_influencer',
  SERVICE_SOCIAL = 'service_social',
  SERVICE_HEALTHCARE = 'service_healthcare',
  SERVICE_SALON = 'service_salon',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface GeneratedStrategy {
  title: string;
  points: string[];
}