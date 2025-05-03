import './TrendingSlideshow.css';
import React from "react";
import BottomCard from "../BottomCard/BottomCard";
import TitleBanner from "../TitleBanner/TitleBanner";
import TrendingSlideshowCard from "../TrendingSlideshowCard/TrendingSlideshowCard";


export default function TrendingSlideshow () {
    return (
        <div className="latest-container" >
            <TitleBanner title="trending slideshow" link="#"/>
            <div className="card-wrapper">
                <TrendingSlideshowCard/>
                <TrendingSlideshowCard/>
                <TrendingSlideshowCard/>
                <TrendingSlideshowCard/>
            </div>
        </div>
    );
}