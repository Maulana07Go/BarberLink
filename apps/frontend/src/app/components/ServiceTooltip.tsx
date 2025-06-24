// src/components/ServiceTooltip.tsx
// This file will contain your ServiceTooltip component

import React from 'react';
import Image from 'next/image';
import { ServiceTooltipProps } from '@/app/lib/interfaces'; // Import the interface from your types file

const ServiceTooltip: React.FC<ServiceTooltipProps> = ({ service, position }) => {
  if (!service || !position) return null;

  const tooltipStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div
      className="fixed z-[9999] bg-white rounded-lg shadow-2xl p-4 w-72 animate-fade-in-scale-up-tooltip"
      style={tooltipStyle}
    >
      {service.hoverImageSrc && (
        <div className="mb-3 rounded-md overflow-hidden">
          <Image
            src={service.hoverImageSrc}
            alt={service.title}
            width={288}
            height={100}
            style={{ width: '100%', height: 'auto' }} // Use style for responsive aspect ratio
            priority // Add priority for LCP images if this is a critical image
            className="rounded-md"
          />
        </div>
      )}
      <h3 className="text-md font-bold mb-1 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-snug">{service.description}</p>
    </div>
  );
};

export default ServiceTooltip;