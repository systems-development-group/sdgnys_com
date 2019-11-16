import React from "react"
import Layout from "../components/layout"


const Page = () => (
    <Layout title="Testimonials">
        <br /><br />
        <blockquote>
            <h4>
                "SDG has been great for us. Without their help and cooperation, there is no way that we could do the work that we do in this office.
                We do not have any hard data on the amount of phone calls/office visits that have been eliminated by having SDG put our information
                on the internet but I can say that we were able to reduce our office staff from 6 people to 3 people without any other loss in service.
                <br /><br />
                Also, by placing our data out there on the internet in 2 formats – a basic for everyone and an advanced for only the professional real estate community
                – we have gained the public’s trust in that all of our information that we use when valuing a piece of property is available to them also by
                tying in the Image Mate Desktop app too.
                <br /><br />
                Over the years we have developed a great personal relationship with John and his staff. If there is ever an issue, and there usually isn’t,
                you can always call John directly on his cell phone and he will get his staff moving to fix whatever problem you are having."
                <br /><br />
                Jay Franklin<br />
                Assistant Director of Assessment<br />
                Tompkins County<br />
                
            </h4>
        </blockquote>

        <hr />

        <h4>
            <br /><br />
            <a href="/testimonials.docx">
                Other Testimonials
      </a>
        </h4>
        {/* 
        <p>&nbsp;</p>
        <h4>
            <a href="/tompkins-county-reply-oneida-county-re-sdg-image-mate-online/">
                “The Image Mate Online Experience – Tompkins County, New York”
            </a>
        </h4>
        */}
        <p>&nbsp;</p> 
        
        <h4>
            <a href="/ArcNews.pdf">
                “ArcNews Spring 2006 Issue — Cattaraugus County, New York, Uses GIS to
                Make Accessible Its Real Property Information”
      </a>
        </h4>
        <p>&nbsp;</p>
        <h4>
            <a href="https://www.youtube.com/watch?v=p6tiKLgZMqs&amp;feature=youtu.be">
                “Oswego County, New York uses IMO to support revaluation projects”
      </a>
        </h4>
        <p>&nbsp;</p>
    </Layout>
)

export default Page
