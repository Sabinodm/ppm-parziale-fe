import './HomePage.css';
import React from "react";
import TopSection from "../TopSection/TopSection";
import Events from "../Events/Events";
import TheLatest from "../TheLatest/TheLatest";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <TopSection/>
                <TheLatest/>
            </div>
        </div>
    );
}