import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Products from "../components/products"
import HomeBanner from "../components/homebanner"
import "../theme/style.css"

// TODO: This should use the layout component 

function IndexPage() {
    return (
        <input id="versionNum" style="hidden"></p>
        <div className="home page page-id-4 page-template-default">
            <div id="container">
                <div id="header">
                    <Header />
                    <HomeBanner />
                </div>
                <Products />

                <Footer />
                {/* 
                <div id="footer">
                    <div className="inside">
                        <div className="main clearfix" />
                        <div className="secondary clearfix">
                            <div className="left">
                                <p class="footerText">© {currentYear} Systems Development Group, Inc.</p>
                            </div>
                            <div className="right">
                                <p class="footerText">
                                    Systems Development Group 441 Trenton Ave. Utica, NY 13502
                                    (315) 798-1328
                                </p>
                            </div>
                        </div>                        
                    </div>                    
                </div>
                */}

            </div>
        </div>
    )
}

export default IndexPage
