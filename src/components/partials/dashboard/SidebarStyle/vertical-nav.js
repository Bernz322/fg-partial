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
import { RiDashboardLine } from "react-icons/ri";
import {
  NavItem,
  NavItemCollapsable,
} from "./nav-item";

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
              Home
            </span>
            <span className="mini-icon">-</span>
          </Link>
        </li>

        <NavItem
          location={location}
          pathname="/dashboard"
          navName="Dashboard"
          icon={<RiDashboardLine />}
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
              Pages
            </span>
            <span className="mini-icon">-</span>
          </Link>
        </li>

        <NavItemCollapsable
          eventKey="sidebar-special"
          location={location}
          active={active}
          setActive={setActive}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          currentKey="special"
          sidebarIcon={<RiDashboardLine />}
          title="Special Pages"
          navItemLists={[
            {
              pathname:
                "/dashboard/special-pages/billing",
              icon: (
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                </i>
              ),
              title: "Billing",
            },
            {
              pathname:
                "/dashboard/special-pages/calender",
              icon: (
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                </i>
              ),
              title: "Calender",
            },
          ]}
        />
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";

export default VerticalNav;
