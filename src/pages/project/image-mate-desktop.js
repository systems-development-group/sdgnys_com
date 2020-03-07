import React from "react"
import Layout from "../../components/layout"

const NotFoundPage = () => (
    <Layout
        title="Image Mate Desktop"
        prev={["/project/sims", "SIMS"]}
        next={["/project/image-mate-enterprise", "Image Mate Enterprise"]}
    >
        <h3>Image Mate Desktop Project</h3>
        <p>
            1)&nbsp;&nbsp; <strong>Image Mate Professional</strong> – Image Mate Pro
            has been a perennial desktop favorite for assessors to conveniently
            provide a single screen, user friendly, concise view of parcel specific
            information. Pro is fully network ready/capable, with seamless hooks to
            GIS, AIM, and RPSV4 managed image sets. The user friendly Image Mate
            interface has made it a popular choice for public access kiosks, that
            provide resources to unattended walk-in assessment customers.
    </p>
        <p>
            2)&nbsp;&nbsp; <strong>IMO Plug-ins </strong>– By design, IMO is a highly
            extensible portal that provides for both open and secure links to related
            GIS, imaging, and financial systems. IMO can be characterized as a hub
            that efficiently links to “best in class” assessment, finance and mapping
            related tools. IMO is in effect a one stop shop for both casual users and
            real property professionals.
    </p>
        <p>
            3)&nbsp;&nbsp; <strong>SIMS</strong> – A powerful tablet based automation
            tool for New York State Fire, Asbestos and Visual safety inspections. SIMS
            provides&nbsp; productivity in the field while also automating the NYSED
            and Federal reporting process back in the office.
    </p>
        <p>&nbsp;</p>

        <ul class="skillList clearfix" />
    </Layout>
)

export default NotFoundPage
