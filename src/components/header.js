import { Link } from "gatsby"
import React from "react"
import Menu from "./menu.js"
import logo from "../theme/images/sdg-logo2.png"

const Header = () => (
  <div className="inside clearfix">
    <div id="logo">
      <h1 className="logo">
        <a href="https://www.sdgnys.com">
          <img src={logo} />
        </a>
      </h1>
    </div>
    <Menu />
  </div>
)

export default Header
