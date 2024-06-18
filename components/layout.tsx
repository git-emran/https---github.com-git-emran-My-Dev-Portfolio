// components/Layout.tsx

import React, { ReactNode } from "react";
import Header from "./header"; // Replace with your actual Header component

type LayoutProps = {
  showHeader?: boolean;
  children: ReactNode; // Define children as ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children, showHeader = false }) => {
  return (
    <div className="min-h-screen">
      {showHeader && <Header />}{" "}
      {/* Render header only if showHeader is true */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
