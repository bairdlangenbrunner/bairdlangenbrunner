import {
  HomeIcon,
  UserCircleIcon,
  FolderIcon,
  PencilSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

function Header({ menuOpen, setMenuOpen }) {
  const hamburgerRef = useRef(null);
  const menuPanelRef = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  // Close menu on Escape and manage focus
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Focus first link when menu opens
    const firstLink = menuPanelRef.current?.querySelector("a");
    firstLink?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <nav className="header-div" aria-label="Main navigation">
        {/* Desktop icons */}
        <ul className="header-content header-desktop">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : null)}
              data-tooltip="home"
              aria-label="Home"
            >
              <HomeIcon className="header-icons" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active-link" : null)}
              data-tooltip="about"
              aria-label="About"
            >
              <UserCircleIcon className="header-icons" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) => (isActive ? "active-link" : null)}
              data-tooltip="projects"
              aria-label="Projects"
            >
              <FolderIcon className="header-icons" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <a
              href="/isthisinteresting"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip="blog"
              aria-label="Blog (opens in new tab)"
            >
              <PencilSquareIcon className="header-icons" aria-hidden="true" />
            </a>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          ref={hamburgerRef}
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <XMarkIcon className="header-icons" aria-hidden="true" />
          ) : (
            <Bars3Icon className="header-icons" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu — replaces page content */}
      {menuOpen && (
        <div className="menu-panel" ref={menuPanelRef} role="menu">
          <ul className="menu-links">
            <li role="none">
              <NavLink to="/" end onClick={closeMenu} role="menuitem">
                <HomeIcon className="header-icons" aria-hidden="true" />
                <span>home</span>
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="about" onClick={closeMenu} role="menuitem">
                <UserCircleIcon className="header-icons" aria-hidden="true" />
                <span>about</span>
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="projects" onClick={closeMenu} role="menuitem">
                <FolderIcon className="header-icons" aria-hidden="true" />
                <span>projects</span>
              </NavLink>
            </li>
            <li role="none">
              <a
                href="/isthisinteresting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                role="menuitem"
              >
                <PencilSquareIcon className="header-icons" aria-hidden="true" />
                <span>blog</span>
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
