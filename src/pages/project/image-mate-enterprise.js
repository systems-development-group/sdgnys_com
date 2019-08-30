import React from "react"
import Layout from "../../components/layout"

const NotFoundPage = () => (
  <Layout
    title="Image Mate Enterprise"
    next={["/project/image-mate-online", "Image Mate Online"]}
    prev={["/project/image-mate-desktop", "Image Mate Desktop"]}
  >
    <p>
      Image Mate Enterprise (IME) is a comprehensive New York State compliant
      County Clerk Land and Civil Records Management System. Enterprise
      effectively leverages industry leading Kofax VRS image capture technology,
      within the SDG Image Mate Content Management framework, to provide for
      high performance recording services. IME includes an integrated
      user-configurable Fee Processing and Reporting Module.
    </p>
    <p>
      Secure IME browser and desktop viewers provide for unprecedented
      improvements in document workflows, and enhance countywide
      inter-departmental information sharing.
    </p>

    <ul class="skillList clearfix" />
  </Layout>
)

export default NotFoundPage
