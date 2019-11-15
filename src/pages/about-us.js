import React from "react"
import Layout from "../components/layout"


const PageAboutUs = () => (
    <Layout title="About Us">
        <h2>Who we are</h2>
        <p>
            Systems Development Group creates software for working with New York State
            real property and county clerk information. Many municipalities throughout
            New York have chosen to use our software to organize and distribute their
            data.
        </p>
        <h2>How we can help you</h2>
        <p>
            If you work in a real property or county clerk’s office, then our software
            will make your job easier and, hopefully, a little bit more fun. If you
            own property in New York State, our
            {" "}
            <a href="/project/image-mate-online/">Image Mate Online</a>
            {" "}
            software can show you (almost) everything you could want to know about it.
            (And we’re working on that “almost” part.)
        </p>
        <h2>See our software in action</h2>
        <p>
            Most of the municipalities running Image Mate Online make the site
            available to the public for free. Visit our
            {" "}
            <a href="/project/image-mate-online/">
                Image Mate Online deployment page
            </a>
            {" "}
            for links to live municipal sites, so you can see all that is possible for
            yourself.
        </p>
    </Layout>
)

export default PageAboutUs
