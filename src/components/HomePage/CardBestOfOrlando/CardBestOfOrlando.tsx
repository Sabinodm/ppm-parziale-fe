import './CardBestOfOrlando.css';
import React from "react";
import {Image} from "react-bootstrap";
import TitleBanner from "../TitleBanner/TitleBanner";

export default function CardBestOfOrlando () {

const bestOfLink : {title:string, link:string}[] = [
    {
        title:"drinking + nightlife",
        link:"#",
    },
    {
        title: "arts + entertainment",
        link: "#",
    },
    {
        title: "local notables",
        link: "#",
    },
    {
        title: "food + drink",
        link: "#",
    },
    {
        title: "services",
        link: "#",
    },
    {
        title: "attractions + recreation",
        link: "#",
    },
    {
        title: "city life",
        link: "#",
    },
    {
        title: "health, beauty + wellness",
        link: "#",
    },
    {
        title: "local music",
        link: "#",
    },
    {
        title: "shopping + retail",
        link: "#",
    }
    ]

    return (
        <div className="bestOf-wrapper" >
        <TitleBanner title="best of orlando" link="#"/>
        <div className="bestOf-container" >
                <a className="bestOf-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/1220/1170" alt="photo related to the article" className="bestOf-image" />
                </a>
                <div className="bestOf-link-container">
                    {bestOfLink.map((key, link) => (
                        <a className="bestOf-link" href={key.link}>
                            {key.title}
                        </a>
                    ))}
                </div>
        </div>
        </div>
    );
}