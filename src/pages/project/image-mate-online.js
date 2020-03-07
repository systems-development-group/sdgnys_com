import React from "react"
import Layout from "../../components/layout"
import map from "./map.jpg"
import padlock from "./padlock.png"

const NotFoundPage = () => (
    <Layout
        title="Image Mate Online"
        prev={["/project/image-mate-enterprise", "Image Mate Enterprise"]}
        next={["/project/outpost", "Outpost"]}
    >
        <p>
            <a href={map}>
                <img
                    className="alignright wp-image-468"
                    src={map}
                    alt=""
                    width={365}
                    height={271}
                />
            </a>
            Sites with the lock icon:&nbsp;
      <a href={padlock}>
                {" "}
                <img
                    style={{ display: "inline", position: "relative" }}
                    src={padlock}
                    alt=""
                />
            </a>{" "}
            require a username and password.
    </p>
        <p>
            For information on pricing/subscriptions to the Oneida or Herkimer County
            sites, please call (315) 798-1328 or send an e-mail to: info@sdgnys.com.
    </p>
        <table style={{ height: "814px" }} width={668}>
            <tbody>
                <tr>
                    <th>
                        <h4 style={{ textAlign: "left" }}>Counties running IMO</h4>
                        <ul style={{ width: "100px" }}>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://allegany.sdgnys.com/?cty=02">Allegany</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://imo.co.broome.ny.us/">Broome</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://maps.cattco.org/imate/?cty=04">Cattaraugus</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://imate.cayugacounty.us/?cty=05">Cayuga</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://chemung.sdgnys.com/?cty=07">Chemung</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://chenango.sdgnys.com/">Chenango</a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://clinton.sdgnys.com/?cty=09">Clinton</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://columbia.sdgnys.com/?cty=10">Columbia</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://www1.cortland-co.org/imate/index.aspx">
                                    Cortland
                </a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://rpts-imo.co.essex.ny.us/imo/?cty=15">Essex</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://franklin.sdgnys.com/">Franklin</a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://gis.fultoncountyny.gov/imo/index.aspx">
                                    Fulton
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://greene.sdgnys.com/?cty=19">Greene</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://hamilton.sdgnys.com/?cty=20">Hamilton</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://herkimer.sdgnys.com/">Herkimer</a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://jefferson.sdgnys.com/?cty=22">Jefferson</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://lewispublic.sdgnys.com/?cty=23Public">Lewis</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://property.madisoncounty.ny.gov/imateweb/?cty=25">
                                    Madison
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://ranger.co.montgomery.ny.us/IMO/?cty=27">
                                    Montgomery
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://oneida.sdgnys.com/">Oneida</a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://ocfintax.ongov.net/imate/index.aspx?cty=31">
                                    Onondaga
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://propertydata.orangecountygov.com/index.aspx?cty=33">
                                    Orange
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://orleans.sdgnys.com/?cty=34">Orleans</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://rptsweb.oswegocounty.com/index.aspx?cty=35">
                                    Oswego
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://imo.otsegocounty.com/?cty=36">Otsego</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://putnam.sdgnys.com/?cty=37">Putnam</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://rensselaer.sdgnys.com/?cty=37">Rensselaer</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://saratoga.sdgnys.com/?cty=41">Saratoga</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://imate.schenectadycounty.com/imate/?cty=42">
                                    Schenectady
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a
                                    title="Schoharie"
                                    href="https://imo.schohariecounty-ny.gov/?cty=43"
                                >
                                    Schoharie
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://schuyler.sdgnys.com/?cty=44">Schuyler</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://imo.co.seneca.ny.us/?cty=45">Seneca</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://stlawrence.sdgnys.com/">St. Lawrence</a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://24.213.254.86/imo/index.aspx">Steuben</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://webapps.co.sullivan.ny.us/IMO/?cty=48">
                                    Sullivan
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://imo.co.tioga.ny.us/index.aspx?cty=49">Tioga</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://property.tompkins-co.org/IMO/index.aspx">
                                    Tompkins
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://imo.ulstercountyny.gov/?cty=51">Ulster</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://imo.warrencountyny.gov/search.aspx?cty=52">
                                    Warren
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://imo.washingtoncountyny.gov/index.aspx">
                                    Washington
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://wyomingpublic.sdgnys.com/search.aspx?cty=56Public">
                                    Wyoming
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://yates.sdgnys.com/?cty=57">Yates</a>
                            </li>
                        </ul>
                    </th>
                    <th>
                        <h4 style={{ textAlign: "left" }}>Towns running IMO</h4>
                        <ul style={{ width: "100px" }}>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofalden.sdgnys.com/?cty=1420">Alden</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofamherst.sdgnys.com/index.aspx?cty=1422">
                                    Amherst
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofandes.sdgnys.com/?cty=122000">Andes</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://sdg.townofbethlehem.org/?cty=0122">
                                    Bethlehem
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofcanandaigua.sdgnys.com/?cty=322400">
                                    Canandaigua
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofcheektowaga.sdgnys.com/?cty=322400">
                                    Cheektowaga
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofcoeymans.sdgnys.com/?cty=0124">
                                    Coeymans
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofcolonie.sdgnys.com/?cty=0126">Colonie</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofeastbloomfield.sdgnys.com/?cty=3226">
                                    East Bloomfield
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townoferwin.sdgnys.com">Erwin</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofgreene.sdgnys.com/?cty=0830">Greene</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofmamaroneck.sdgnys.com/?cty=5532">
                                    Mamaroneck
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofnewhartford.sdgnys.com/?cty=3048">
                                    New Hartford
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofnewscotland.sdgnys.com/?cty=0134">
                                    New Scotland
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofontario.sdgnys.com/?cty=0134">Ontario</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofpatterson.sdgnys.com/?cty=372400">
                                    Patterson
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofpelham.sdgnys.com/?cty=5544">Pelham</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofrye.sdgnys.com/?cty=5548">Rye</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofsenecafalls.sdgnys.com/?cty=4532">
                                    Seneca Falls
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofsoutheast.sdgnys.com/?cty=3730">
                                    Southeast
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofvernon.sdgnys.com/?cty=3060">Vernon</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://townofwebb.sdgnys.com/?cty=215400">Webb</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://imo.ci.webster.ny.us/IMOPublic/index.aspx?cty=2654Public">
                                    Webster
                </a>
                            </li>
                        </ul>
                    </th>
                    <th>
                        <h4 style={{ textAlign: "left" }}>Cities running IMO</h4>
                        <ul style={{ width: "100px" }}>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://cityofcorning.sdgnys.com/?cty=460300">
                                    Corning
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://cityoflockport.sdgnys.com/?cty=290900">
                                    Lockport
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://cityofnewrochelle.sdgnys.com/?cty=551000">
                                    New Rochelle
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://imo.romenewyork.com/">Rome</a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://ocfintax.ongov.net/imatesyr/?cty=SY">
                                    Syracuse
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://cityoftonawanda.sdgnys.com/?cty=141600">
                                    Tonawanda
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="https://cityofutica.sdgnys.com/">Utica</a>
                                <a href={padlock}>
                                    {" "}
                                    <img
                                        style={{ display: "inline", position: "relative" }}
                                        src={padlock}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://www.watertown-ny.gov/imo/?cty=221800">
                                    Watertown
                </a>
                            </li>
                            <li style={{ textAlign: "left" }}>
                                <a href="http://imo.yonkersny.gov">Yonkers</a>
                            </li>
                        </ul>
                    </th>
                </tr>
            </tbody>
        </table>
        <ul className="skillList clearfix" />
    </Layout>
)

export default NotFoundPage
