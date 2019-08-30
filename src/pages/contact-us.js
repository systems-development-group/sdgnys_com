import React from "react"
import Layout from "../components/layout"

const Page = () => (
  <Layout title="Contact Us">
    <h2>How can I contact you?</h2>
    <p>
      You can get in touch with us through any of the major channels: phone,
      email, and postal mail.
    </p>
    <div>
      <p>(315) 798-1328</p>
      <p>
        <a href="mailto:info@sdgnys.com">info@sdgnys.com</a> or{" "}
        <a href="mailto:sales@sdgnys.com">sales@sdgnys.com</a>
      </p>
      <p>
        441 Trenton Ave.
        <br />
        Utica, NY 13502
      </p>
    </div>
    <h2>Where are you located?</h2>
    <p>We are centrally located in Utica, NY adjacent to the NYS Thruway.</p>
  </Layout>
)

export default Page
