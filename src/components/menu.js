import { Link } from "gatsby"
import React from "react"
import { useHover } from "../hooks/index.js"
import "../theme/superfish.css"

const menuItemClasses = `
  menu-item
  menu-item-type-post_type
  menu-item-object-page 
  page_item
  page-item-4 
  menu-item-33
`

const menuItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: (
      <>
        Products<span className="sf-sub-indicator"> »</span>
      </>
    ),
    to: "/products",
    submenu: [
      {
        title: "Outpost",
        to: "/outpost",
      },
      {
        title: "Image Mate Online",
        to: "/image-mate-online",
      },
      {
        title: "IMO Plugins",
        to: "/plugins",
      },
      {
        title: "Image Mate Desktop",
        to: "/image-mate-desktop",
      },
      {
        title: "Image Mate Enterprise",
        to: "/image-mate-enterprise",
      },
      {
        title: "SIMS",
        to: "/sims",
      },
    ],
  },
  {
    title: "About Us",
    to: "/about-us",
  },
  {
    title: "Partnerships",
    to: "/partnerships",
  },
  {
    title: "Testimonials",
    to: "/testimonials",
  },
  {
    title: "Contact Us",
    to: "/contact-us",
  },
]

const SubMenu = ({ show, items }) => (
  <ul
    className="sub-menu"
    style={{
      float: "none",
      width: "10.25em",
      display: show ? "block" : "none",
      visibility: show ? "visible" : "hidden",
    }}
  >
    {items.map((item, i) => (
      <li
        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100"
        style={{
          whiteSpace: "normal",
          float: "none",
          width: "100%",
        }}
      >
        <Link
          to={item.to}
          style={{ float: "none", width: "auto" }}
          activeStyle={{ color: "#2e2e2e" }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
)

function MenuItem({ item }) {
  const [hoverRef, isHovered] = useHover()
  return (
    <li
      ref={hoverRef}
      className={`${menuItemClasses}
      ${item.submenu ? "menu-item-has-children" : ""}
      ${isHovered ? "sfHover" : ""}`}
    >
      <Link to={item.to} activeStyle={{ color: "#2e2e2e" }}>
        {item.title}
      </Link>
      {item.submenu && <SubMenu items={item.submenu} show={isHovered} />}
    </li>
  )
}

const Menu = () => (
  <div id="mainNav" className="clearfix">
    <div className="menu-menu-1-container">
      <ul id="menu-menu-1" className="sf-menu sf-js-enabled sf-shadow">
        {menuItems.map((item, i) => (
          <MenuItem item={item} />
        ))}
      </ul>
    </div>
  </div>
)

export default Menu
