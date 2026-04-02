import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container-div">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen ? null : (
        <>
          <main id="main-content" className="between-header-footer-div">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
