import React from 'react';

export default function Wrapp({ children, className }) {
  return (
    <div className="container">
      <div className={`row ${className}`}>{children}</div>
    </div>
  );
}
