// src/types/index.ts
// This file will contain all your interfaces

export interface ServiceData {
  id: string;
  iconSrc: string;
  hoverImageSrc: string;
  title: string;
  description: string;
  positionClasses: string;
}

export interface ServiceTooltipProps {
  service: ServiceData | null;
  position: { x: number; y: number } | null;
}

export interface Barber {
  id: string;
  name: string;
  speciality: string;
  rating: number;
  totalReviews: number;
  image: string;
  price: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface OrderStep {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}