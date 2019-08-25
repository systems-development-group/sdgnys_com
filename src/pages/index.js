import React from "react"
import Header from "../components/header"
import Products from "../components/products"
import HomeBanner from "../components/homebanner"
import "../theme/style.css"

function IndexPage() {
  return (
    <div className="home page page-id-4 page-template-default">
      <div id="container">
        <div id="header">
          <Header />
          <HomeBanner />
        </div>
        <Products />
        <div id="footer">
          <div className="inside">
            <div className="main clearfix" />
            {/* end footer main */}
            <div className="secondary clearfix">
              <div className="left">
                <p>© 2014 Systems Development Group, Inc.</p>
              </div>
              <div className="right">
                <p>
                  Systems Development Group 441 Trenton Ave. Utica, NY 13502
                  (315) 798-1328
                </p>
              </div>
            </div>
            {/* end footer secondary*/}
          </div>
          {/* end footer inside*/}
        </div>
        {/* end footer */}
      </div>
    </div>
  )
}

export default IndexPage
