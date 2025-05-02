import {
  HomeIcon,
  // QuestionMarkCircleIcon,
  // WrenchScrewdriverIcon,
  // CloudIcon,
  UserCircleIcon,
  FolderIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header-div">
        <ul className="header-content">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              <HomeIcon className="header-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              <UserCircleIcon className="header-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              <FolderIcon className="header-icons" />
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="https://isthisinteresting.bairdlangenbrunner.com">
              <div className="hover-bubble">
                <PencilSquareIcon className="header-icons" />
              </div>
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Header;
