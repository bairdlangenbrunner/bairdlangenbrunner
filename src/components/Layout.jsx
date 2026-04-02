import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container-div">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen ? null : (
        <>
          <div className="between-header-footer-div">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
