import './HomePage.css';
import React from "react";
import TopSection from "../TopSection/TopSection";
import TheLatest from "../TheLatest/TheLatest";
import HorizontalSponsor from "../../HorizontalSponsor/HorizontalSponsor";
import MiddleSection from "../MiddleSection/MiddleSection";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <TopSection/>
                <TheLatest/>
                <HorizontalSponsor/>
                <MiddleSection/>
            </div>
        </div>
    );
}