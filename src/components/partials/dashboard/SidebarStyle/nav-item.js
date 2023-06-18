import React, { useContext } from "react";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavItem = ({
  location,
  pathname,
  navName,
  icon,
}) => {
  return (
    <li
      className={`${
        location.pathname === pathname
          ? "active"
          : ""
      } nav-item `}
    >
      <Link
        className={`${
          location.pathname === pathname
            ? "active"
            : ""
        } nav-link `}
        aria-current="page"
        to={pathname}
      >
        {icon}
        <span className="item-name">
          {navName}
        </span>
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  location: PropTypes.object,
  pathname: PropTypes.string,
  navName: PropTypes.string,
  icon: PropTypes.element,
};

const CustomToggle = ({
  children,
  eventKey,
  onClick,
}) => {
  const { activeEventKey } = useContext(
    AccordionContext
  );
  const decoratedOnClick = useAccordionButton(
    eventKey,
    (active) =>
      onClick({
        state: !active,
        eventKey: eventKey,
      })
  );
  const isCurrentEventKey =
    activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={
        isCurrentEventKey ? "true" : "false"
      }
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
};

export const NavItemCollapsable = ({
  location,
  active,
  setActive,
  activeMenu,
  setActiveMenu,
  navItemLists,
  eventKey,
  currentKey,
  sidebarIcon,
  title,
  others,
}) => {
  return (
    <Accordion.Item
      as="li"
      eventKey={eventKey}
      bsPrefix={`nav-item ${
        active === currentKey ? "active" : ""
      } `}
      onClick={() => setActive(currentKey)}
      {...others}
    >
      <CustomToggle
        eventKey={eventKey}
        active={
          activeMenu === "sidebar-maps"
            ? true
            : false
        }
        onClick={(activeKey) =>
          setActiveMenu(activeKey)
        }
      >
        {sidebarIcon}
        <span className="item-name">{title}</span>
        {/* Dropdown Icon */}
        <i className="right-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </i>
      </CustomToggle>
      <Accordion.Collapse eventKey={eventKey}>
        <ul className="sub-nav">
          {navItemLists.map((item, idx) => {
            return (
              <li
                className="nav-item"
                key={eventKey + idx}
              >
                <Link
                  className={`${
                    location.pathname ===
                    item.pathname
                      ? "active"
                      : ""
                  } nav-link`}
                  to={item.pathname}
                >
                  {item.icon}
                  <span className="item-name">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Accordion.Collapse>
    </Accordion.Item>
  );
};
