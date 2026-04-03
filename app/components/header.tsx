"use client";

import {
  HomeIcon,
  UserCircleIcon,
  FolderIcon,
  PencilSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "home", href: "/", icon: HomeIcon, exact: true },
  { name: "about", href: "/about", icon: UserCircleIcon },
  { name: "projects", href: "/projects", icon: FolderIcon },
  { name: "notes", href: "/notes", icon: PencilSquareIcon },
];

export default function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  const isActive = (href: string, exact?: boolean) => {
    if (!mounted) return false;
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Escape to close + focus trap
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuPanelRef.current) {
        const focusable = menuPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Move focus into menu when it opens
  useEffect(() => {
    if (menuOpen && menuPanelRef.current) {
      const firstLink = menuPanelRef.current.querySelector<HTMLElement>('a[href]');
      firstLink?.focus();
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="header-div" aria-label="Main navigation">
        {/* Desktop icons */}
        <ul className="header-content header-desktop">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={isActive(item.href, item.exact) ? "active-link" : ""}
                data-tooltip={item.name}
                aria-label={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              >
                <item.icon className="header-icons" aria-hidden="true" />
              </Link>
            </li>
          ))}
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

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="menu-panel" ref={menuPanelRef} aria-label="Mobile navigation">
          <ul className="menu-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={isActive(item.href, item.exact) ? "active" : ""}
                >
                  <item.icon className="header-icons" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
