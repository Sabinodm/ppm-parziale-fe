import './TitleBanner.css';
import React from "react";

export default function TitleBanner ({title,link} : {title: string, link: string}) {
    return (
        <h2 className="event-banner">
            <a className="event-banner-link" href={link}>{title}</a>
        </h2>
    );
}