"use client";

import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container-div">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main
        id="main-content"
        className="between-header-footer-div"
        style={menuOpen ? { display: "none" } : undefined}
        aria-hidden={menuOpen || undefined}
      >
        {children}
      </main>
      <Footer style={menuOpen ? { display: "none" } : undefined} aria-hidden={menuOpen || undefined} />
    </div>
  );
}
