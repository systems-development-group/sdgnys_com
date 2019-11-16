import React from "react"

const currentYear = (new Date()).getFullYear()

const Footer = () => (

    <div id="footer">
        <div className="inside">
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
)

export default Footer