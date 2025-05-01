import './HomePage.css';
import React from "react";
import TopSection from "../TopSection/TopSection";
import Events from "../Events/Events";
import TheLatest from "../TheLatest/TheLatest";
import HorizontalSponsor from "../../HorizontalSponsor/HorizontalSponsor";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <TopSection/>
                <TheLatest/>
                <HorizontalSponsor/>
            </div>
        </div>
    );
}