import { Link } from "gatsby"
import React from "react"
import { useHover } from "../hooks/"
import outpost from "../theme/images/outpost-300x175.jpg"
import test2 from "../theme/images/test2-300x175.jpg"
import plugins from "../theme/images/plugins-300x175.jpg"
import imagemateent from "../theme/images/imagemateent-300x175.jpg"


const projects = [
    {
        title: "Outpost",
        to: "/outpost-2",
        img: outpost,
    },
    {
        title: "Image Mate Online",
        to: "/image-mate-online",
        img: test2,
    },
    {
        title: "Plugins",
        to: "/plugins",
        img: plugins,
    }
    // {
    //     title: "Image Mate Desktop",
    //     to: "/test2",
    //     img: test2,
    // },
    // {
    //     title: "Image Mate Enterprise",
    //     to: "/imagemateent",
    //     img: imagemateent,
    // },
    // {
    //     title: "Outpost",
    //     to: "/outpost-2",
    //     img: test2,
    // },
]

function Item({ item }) {
    const [hoverRef, isHovered] = useHover()
    return (
        <div
            id="project-outpost-2"
            className="project small 4"
            ref={hoverRef}
            style={{ opacity: 1 }}
        >
            <div className="inside">
                <Link to={item.to} rel="bookmark">
                    <img
                        className="thumb wp-post-image"
                        width={300}
                        height={175}
                        src={item.img}
                        alt={item.title}
                        title={item.title}
                        style={{ opacity: isHovered ? 0.1 : 1 }}
                    />{" "}
                    <span
                        className="title"
                        style={{
                            display: "inline",
                            opacity: isHovered ? 1 : 0,
                            transition: ".25s",
                        }}
                    >
                        <span>{item.title}</span>
                    </span>
                </Link>
            </div>
        </div>
    )
}

const Products = () => (
    <div className="wrap">
        <div id="main" className="clearfix">
            <div id="content" className="full grid">
                <div id="projects" className="full homeSection clearfix">
                    <h3>
                        <span>Our Products &amp; Services</span>
                    </h3>
                    <div className="thumbs clearfix">
                        {projects.map((item, i) => (
                            <Item item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Products
