import React from "react"
import Layout from "../../components/layout"

const NotFoundPage = () => (
  <Layout
    title="SIMS"
    prev={["/project/plugins", "Plugins"]}
    next={["/project/image-mate-desktop", "Image Mate Desktop"]}
  >
    <p>
      A powerful tablet based automation tool for New York State Fire, Asbestos,
      and Visual safety inspections. SIMS provides productivity in the field
      while also automating the NYSED and Federal reporting process back in the
      office.
    </p>
  </Layout>
)

export default NotFoundPage
