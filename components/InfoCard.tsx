
import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20 ${className}`}>
      <h3 className="font-bold text-xl p-4 bg-black/20 border-b-2 border-white/20">
        {title}
      </h3>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};
