/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "./header"
import "../theme/style.css"


const Layout = ({ children, title, prev, next }) => {
    // const data = useStaticQuery(graphql`
    //   query SiteTitleQuery {
    //     site {
    //       siteMetadata {
    //         title
    //       }
    //     }
    //   }
    // `)
    const [toPrev, titlePrev] = prev || []
    const [toNext, titleNext] = next || []
    const currentYear = (new Date()).getFullYear()

    return (
        <>
            <div id="container">
                <div id="header">
                    <Header />
                </div>
                <div className="wrap">
                    <div id="main" className="clearfix">
                        <div id="pageHead">
                            <h1>{title}</h1>
                            {/* <div class="projectNav clearfix">
                                {prev && (
                                    <div class="previous">
                                        <Link to={toPrev}>← {titlePrev}</Link>
                                    </div>
                                )}
                                {next && (
                                    <div class="next">
                                        <Link to={toNext}>{titleNext} →</Link>
                                    </div>
                                )}
                            </div> */}
                        </div>
                        <div id="content" class="clearfix full">
                            <div class="post-27 page type-page status-publish hentry clearfix">
                                <div id="main">{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="inside">
                        <div className="main clearfix" />
                        {/* end footer main */}
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
                        {/* end footer secondary*/}
                    </div>
                    {/* end footer inside*/}
                </div>
                {/* end footer */}
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
