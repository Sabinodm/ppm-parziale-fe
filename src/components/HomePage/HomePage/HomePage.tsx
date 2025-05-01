import './HomePage.css';
import React from "react";
import TopSection from "../TopSection/TopSection";
import Events from "../Events/Events";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <TopSection/>
                <Events/>
            </div>
        </div>
    );
}