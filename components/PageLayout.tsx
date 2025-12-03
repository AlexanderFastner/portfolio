import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      {children}
    </div>
  );
}

