import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="h-auto rounded-lg border-4 border-dashed border-gray-200">
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
export default Layout;
