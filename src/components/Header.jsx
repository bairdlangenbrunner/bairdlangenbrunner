import {
  HomeIcon,
  UserCircleIcon,
  FolderIcon,
  PencilSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="header-div">
        {/* Desktop icons */}
        <ul className="header-content header-desktop">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : null)}
              data-tooltip="home"
            >
              <HomeIcon className="header-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active-link" : null)}
              data-tooltip="about"
            >
              <UserCircleIcon className="header-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) => (isActive ? "active-link" : null)}
              data-tooltip="projects"
            >
              <FolderIcon className="header-icons" />
            </NavLink>
          </li>
          <li>
            <a
              href="/isthisinteresting"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip="blog"
            >
              <PencilSquareIcon className="header-icons" />
            </a>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <XMarkIcon className="header-icons" />
          ) : (
            <Bars3Icon className="header-icons" />
          )}
        </button>
      </nav>

      {/* Mobile menu — replaces page content */}
      {menuOpen && (
        <div className="menu-panel">
          <ul className="menu-links">
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                <HomeIcon className="header-icons" />
                <span>home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="about" onClick={closeMenu}>
                <UserCircleIcon className="header-icons" />
                <span>about</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="projects" onClick={closeMenu}>
                <FolderIcon className="header-icons" />
                <span>projects</span>
              </NavLink>
            </li>
            <li>
              <a
                href="/isthisinteresting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <PencilSquareIcon className="header-icons" />
                <span>blog</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
