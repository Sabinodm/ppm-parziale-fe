import './HomePage.css';
import React from "react";
import SectionTop from "../SectionTop/SectionTop";
import SectionTheLatest from "../SectionTheLatest/SectionTheLatest";
import HorizontalSponsor from "../../HorizontalSponsor/HorizontalSponsor";
import SectionMiddle from "../SectionMiddle/SectionMiddle";
import SectionTrending from "../SectionTrending/SectionTrending";
import SectionTrendingSlideshow from "../SectionTrendingSlideshow/SectionTrendingSlideshow";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <SectionTop/>
                <SectionTheLatest/>
                <HorizontalSponsor/>
                <SectionMiddle/>
                <SectionTrending/>
                <HorizontalSponsor/>
                <SectionTrendingSlideshow/>
            </div>
        </div>
    );
}