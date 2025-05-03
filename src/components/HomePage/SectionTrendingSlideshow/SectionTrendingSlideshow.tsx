import './SectionTrendingSlideshow.css';
import React from "react";
import TitleBanner from "../TitleBanner/TitleBanner";
import CardTrendingSlideshow from "../CardTrendingSlideshow/CardTrendingSlideshow";


export default function SectionTrendingSlideshow () {
    return (
        <div className="latest-container" >
            <TitleBanner title="trending slideshow" link="#"/>
            <div className="card-wrapper">
                <CardTrendingSlideshow/>
                <CardTrendingSlideshow/>
                <CardTrendingSlideshow/>
                <CardTrendingSlideshow/>
            </div>
        </div>
    );
}