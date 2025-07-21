import React from 'react';

interface PlaceholderImageProps {
  text?: string;
  width?: string | number;
  height?: string | number;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  text = 'Imagen',
  width = '100%',
  height = '100%',
  bgColor = 'var(--primary)',
  textColor = 'white',
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <p className="text-center font-medium p-4">{text}</p>
    </div>
  );
};
