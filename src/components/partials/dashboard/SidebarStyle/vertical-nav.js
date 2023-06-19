import React, {
  useState,
  memo,
  Fragment,
} from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { Accordion } from "react-bootstrap";
import {
  AiFillCloud,
  AiFillCheckCircle,
  AiOutlineCreditCard,
  AiOutlineGoogle,
} from "react-icons/ai";
import {
  NavItem,
  NavItemCollapsable,
} from "./nav-item";
import {
  mySNSUSidebarItems,
  myUploadsSidebarItems,
  myGSuiteSidebarItems,
  enrollmentSidebarItems,
} from "./constants";

const VerticalNav = memo((props) => {
  const [activeMenu, setActiveMenu] =
    useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  return (
    <Fragment>
      <Accordion
        as="ul"
        className="navbar-nav iq-main-menu"
      >
        <li className="nav-item static-item">
          <Link
            className="nav-link static-item disabled"
            to="#"
            tabIndex="-1"
          >
            <span className="default-icon">
              MY SNSU
            </span>
            <span className="mini-icon">-</span>
          </Link>
        </li>

        <NavItemCollapsable
          eventKey="sidebar-mysnsu"
          location={location}
          active={active}
          setActive={setActive}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          currentKey="mysnsu"
          sidebarIcon={<AiFillCloud />}
          title="My Enrollment"
          navItemLists={mySNSUSidebarItems}
        />

        <NavItem
          location={location}
          pathname="/student/clearance"
          navName="My Clearance"
          icon={<AiFillCheckCircle />}
        />

        <NavItemCollapsable
          eventKey="sidebar-myuploads"
          location={location}
          active={active}
          setActive={setActive}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          currentKey="myuploads"
          sidebarIcon={<AiOutlineCreditCard />}
          title="My Uploads"
          navItemLists={myUploadsSidebarItems}
        />

        <NavItemCollapsable
          eventKey="sidebar-mygsuite"
          location={location}
          active={active}
          setActive={setActive}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          currentKey="mygsuite"
          sidebarIcon={<AiOutlineGoogle />}
          title="My GSuite"
          navItemLists={myGSuiteSidebarItems}
        />

        <li>
          <hr className="hr-horizontal" />
        </li>
        <li className="nav-item static-item">
          <Link
            className="nav-link static-item disabled"
            to="#"
            tabIndex="-1"
          >
            <span className="default-icon">
              REGIS
            </span>
            <span className="mini-icon">-</span>
          </Link>
        </li>

        <NavItemCollapsable
          eventKey="sidebar-enrollment"
          location={location}
          active={active}
          setActive={setActive}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          currentKey="enrollment"
          sidebarIcon={<AiFillCloud />}
          title="Enrollment"
          navItemLists={enrollmentSidebarItems}
        />
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";

export default VerticalNav;
