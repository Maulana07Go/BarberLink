// src/data/servicesData.ts
// This file will contain the data for your services

import { ServiceData } from '@/app/lib/interfaces'; // Make sure to import ServiceData from your types file

export const servicesData: ServiceData[] = [
  {
    id: 'scissors',
    iconSrc: '/img/landing/scissors.png',
    hoverImageSrc: '/img/services/haircut.jpg',
    title: 'Haircut & Styling',
    description: 'Our expert barbers provide precision haircuts and stylish finishes tailored to your preference.',
    positionClasses: 'top-[10%] left-[10%]',
  },
  {
    id: 'clipper',
    iconSrc: '/img/landing/clipper.png',
    hoverImageSrc: '/img/services/fade.jpg',
    title: 'Fade & Taper',
    description: 'Masterful fade and taper cuts for a sharp, modern look that blends seamlessly.',
    positionClasses: 'top-[10%] right-[10%]',
  },
  {
    id: 'comb',
    iconSrc: '/img/landing/comb.png',
    hoverImageSrc: '/img/services/trim.jpg',
    title: 'Beard Trim & Shape',
    description: 'Professional beard trimming and shaping to perfect your facial hair and overall appearance.',
    positionClasses: 'bottom-[10%] right-[10%]',
  },
  {
    id: 'shaving-brush',
    iconSrc: '/img/landing/shaving-brush.png',
    hoverImageSrc: '/img/services/shave.jpg',
    title: 'Classic Hot Shave',
    description: 'Experience the ultimate relaxation with our traditional hot towel shave for a smooth finish.',
    positionClasses: 'bottom-[10%] left-[10%]',
  },
  {
    id: 'razor',
    iconSrc: '/img/landing/razor.png',
    hoverImageSrc: '/img/services/detailing.jpg',
    title: 'Detailed Edging',
    description: 'Precise edging and line-ups using a razor for a clean, defined hairline and beard.',
    positionClasses: 'top-1/2 left-[0%] -translate-y-1/2',
  },
  {
    id: 'hair-treatment',
    iconSrc: '/img/landing/hair-treatment.png',
    hoverImageSrc: '/img/services/hair-treatment.jpg',
    title: 'Hair Treatment',
    description: 'Revitalize your hair with our nourishing treatments, leaving it healthy and shiny.',
    positionClasses: 'top-1/2 right-[0%] -translate-y-1/2',
  },
];