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
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header-div">
        <ul className="header-content">
          <li>
            <Link to="/">
              {/* <div className="hover-bubble"> */}
              <HomeIcon className="header-icons" />
              {/* <span className="hover-bubble-text left-[-5%] hidden">home</span> */}
              {/* </div> */}
            </Link>
          </li>
          <li>
            <Link to="/about">
              {/* <div className="hover-bubble"> */}
              <UserCircleIcon className="header-icons" />
              {/* <span className="hover-bubble-text left-[-6.5%] hidden">about</span> */}
              {/* </div> */}
            </Link>
          </li>
          <li>
            <Link to="/projects">
              {/* <div className="hover-bubble"> */}
              <FolderIcon className="header-icons" />
              {/* <span className="hover-bubble-text left-[-25%] hidden">projects</span> */}
              {/* </div> */}
            </Link>
          </li>
          <li>
            <Link to="https://isthisinteresting.bairdlangenbrunner.com">
              <div className="hover-bubble">
                <PencilSquareIcon className="header-icons" />
                {/* <span className="hover-bubble-text left-[-50%] hidden">interesting</span> */}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
