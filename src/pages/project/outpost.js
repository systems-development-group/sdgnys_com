import React from "react"
import Layout from "../../components/layout"

const Page = () => (
  <Layout
    title="Outpost"
    next={["/project/plugins", "Plugins"]}
    prev={["/project/image-mate-online", "Image Mate Online"]}
  >
    <div class="project clearfix">
      <p>
        Outpost provides the assessor with a mobile “pilots eye view” to
        efficiently streamline field inspections, data collection, and review
        activities. Outpost supplements core RPS data editing with a wide range
        of imaging, sketch and GIS links and features. Assessors no longer have
        to pull and carry property record cards for reference in the field.
        Conversely, real time Outpost to V4 data and photo uploads, eliminate
        the need for data entry from memory or hand written notes when you
        return to the office.
      </p>
      <p>
        New powerful and affordable tablet PC’s serve as the mobile device best
        suited for SDG Outpost technology. Please note that the Outpost browser
        based network architecture is open to any web connected mobile device
        including smartphones. However, field trials have proven the tablet to
        be the optimal device for efficient and effective field assessment
        activities.
      </p>
      <p>
        A 10.1” tablet display provides for robust 24×7 parcel and geographic
        visualization (snapshots) of your immediate surroundings from anywhere
        in your jurisdiction. The friendly Outpost user interface has been
        developed using Microsoft.NET technologies and has been optimized for
        tablet PC use. Through .NET, the Outpost system architecture is both
        flexible and extensible. As new mobile hardware options become
        available, the SDG development team can modify Outpost to incorporate
        rapidly evolving mobile technologies. Likewise, the Outpost program can
        be “re-fitted” for use in future upgrades to the RPS system.
      </p>
      <p>&nbsp;</p>
      <p>
        <b>Outpost Features:</b>
      </p>
      <ul>
        <li>
          Full compatibility and compliance with the New York State RPS V4
          system.
        </li>
        <li>
          Platform independent mobile device options for real time RPS updates
          while in the field.
        </li>
        <li>Review and editing of pertinent Parcel inventory fields.</li>
        <li>Easy stylus assisted point and tap navigation and data entry.</li>
        <li>In application Navigate-to-Parcel</li>
        <li>Inspection Scheduling</li>
        <li>
          Full photo capture support for both onboard tablet and/or any web
          connected digital camera via an Outpost/Google Picasa integration.
        </li>
        <li>
          The tablet and cellular connections are non-proprietary. Outpost can
          be shared with the Codes, DPW, Planning, Zoning, Engineering, Law
          Enforcement, Fire and Professional Contractors.
        </li>
        <li>
          Integration with GIS Mapping services available to the Town or County.
        </li>
        <li>
          Fast parcel look-ups by Municipality / SWIS / SBL / Owner name /
          Street address.
        </li>
        <li>
          Support for Android, Apple IOS, and Windows tablets using browser
          based operation.
        </li>
      </ul>

      <ul class="skillList clearfix" />
      <p>
        <a
          class="action"
          href="http://www.sdgnys.com.php53-7.dfw1-2.websitetestlink.com/project/outpost-2/"
        >
          Visit Site
        </a>
      </p>
    </div>
  </Layout>
)

export default Page
