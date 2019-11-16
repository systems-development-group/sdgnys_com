import React from "react"
import Layout from "../../components/layout"

const NotFoundPage = () => (
  <Layout
    title="Plugins"
    prev={["/project/outpost", "Outpost"]}
    next={["/project/sims", "SIMS"]}
  >
    <div className="project clearfix">
      <h4>
        <strong>IMO Plug-ins</strong>
      </h4>
      <ol>
        <li>
          <strong>Parcel History</strong> – Extend IMO to transition from hard
          copy parcel deed and sales recording keeping in the tax mapping
          department. Parcel related transactions become electronically
          searchable. In conjunction with AIM, vital real property documents are
          accessed easier while also being protected from floods and fires.{" "}
          <span style={{ color: "#0000ff" }}>
            <a
              style={{ color: "#0000ff" }}
              title="Parcel History Search"
              href="https://imo.washingtoncountyny.gov/index.aspxsaleshist/searchresults.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Click Here for Site Example</em>
            </a>
          </span>
        </li>
        <li>
          <strong>AIM</strong> – The IMO Advanced Image Manager supports state
          of the art industrial strength content management through the use of
          high speed scanner, display and printer technologies. AIM is equipped
          with a suite of tools that maximize the value of imaging technology in
          real property and assessment settings.
        </li>
        <li>
          <strong>Pictometry Connect Services</strong> – Licensed
          Counties\Municipalities can directly retrieve Pictometry’s “best in
          class” oblique and ortho aerial imagery from IMO sessions.{" "}
          <span style={{ color: "#0000ff" }}>
            <em>
              <a
                style={{ color: "#0000ff" }}
                title="Pictometry Connect"
                href="/wp-content/uploads/2014/01/pictometry.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Screenshot
              </a>
            </em>
          </span>
        </li>
        <li>
          <strong>Property Tax Calculator</strong> – Easily assist tax payers to
          estimate tax changes based on new construction, demolitions, exepmtion
          status or special district changes.{" "}
          <span style={{ color: "#0000ff" }}>
            <a
              style={{ color: "#0000ff" }}
              title="Tax Calculator Screenshot"
              href="/wp-content/uploads/2014/01/taxcalc.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Site Screenshot</em>
            </a>
          </span>
        </li>
        <li>
          <strong>Property Record Card (PRC) Creator</strong> – Batch or single
          print enhanced (photos included) property record cards for field work
          or as handouts for the property owners and BAR members. &nbsp;Capable
          of working with different PRC templates.
        </li>
        <li>
          <strong>Tax Billing and Payment History Reporter </strong>– IMO is
          trainable to display current tax billing and payment status
          information from 3<sup>rd</sup> party treasury systems.{" "}
          <span style={{ color: "#0000ff" }}>
            <em>
              <a
                style={{ color: "#0000ff" }}
                title="Washington Tax Payment/History Example"
                href="https://imo.washingtoncountyny.gov/index.aspxtaxpaymentinfo.aspx?swis=534600&sbl=00101400010190000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Example 1{" "}
              </a>
              &nbsp;
              <a
                style={{ color: "#0000ff" }}
                title="Onondaga County Tax History/Payment Example"
                href="http://ocfintax.ongov.net/Imate/propdetail.aspx?swis=312803&printkey=00100000010010000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Example 2
              </a>
            </em>
          </span>
        </li>
        <li>
          <strong>GIS Web Mapping Service (WMS) Links</strong> – Simple
          protocols are available to make IMO an integral building block in
          comprehensive&nbsp;County or Municipal wide GIS systems.{" "}
          <span style={{ color: "#0000ff" }}>
            <em>
              <a
                style={{ color: "#0000ff" }}
                title="Cloud GIS Site Example"
                href="http://sdg.giscloud.com/map/250086/chenango/787530/pin/07500000010072200000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Example 1
              </a>
            </em>{" "}
            <a
              style={{ color: "#0000ff" }}
              title="Cattaraugus County GIS Example"
              href="http://maps2.cattco.org/parcel/index.html?esearch=00500400010110020000&exprnum=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Example 2</em>
            </a>
          </span>
        </li>
      </ol>
      <ul className="skillList clearfix" />
    </div>
  </Layout>
)

export default NotFoundPage
