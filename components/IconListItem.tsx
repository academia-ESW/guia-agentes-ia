import React from 'react';

interface IconListItemProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}

export const IconListItem: React.FC<IconListItemProps> = ({ icon, title, description }) => {
  return (
    <li className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center">
        {React.cloneElement(icon, { className: "w-6 h-6 text-white/90" })}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </li>
  );
};