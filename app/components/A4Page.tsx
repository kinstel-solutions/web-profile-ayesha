import React from 'react';

interface A4PageProps {
  children: React.ReactNode;
  className?: string; // Allow custom classes for specific page styling (e.g. background image)
  id?: string;
}

const A4Page: React.FC<A4PageProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`a4-page relative p-8 md:p-12 box-border flex flex-col ${className}`}>
      {/* Header/Footer slots could go here if uniform across pages, 
          but usually cover page differs. We can make them optional props. 
          For now, just children. */}
      {children}
    </div>
  );
};

export default A4Page;
