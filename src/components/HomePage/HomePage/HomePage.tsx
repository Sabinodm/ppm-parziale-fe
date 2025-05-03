import './HomePage.css';
import React from "react";
import TopSection from "../TopSection/TopSection";
import TheLatest from "../TheLatest/TheLatest";
import HorizontalSponsor from "../../HorizontalSponsor/HorizontalSponsor";
import MiddleSection from "../MiddleSection/MiddleSection";
import Trending from "../Trending/Trending";
import TrendingSlideshow from "../TrendingSlideshow/TrendingSlideshow";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <TopSection/>
                <TheLatest/>
                <HorizontalSponsor/>
                <MiddleSection/>
                <Trending/>
                <HorizontalSponsor/>
                <TrendingSlideshow/>
            </div>
        </div>
    );
}