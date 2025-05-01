import './HomePage.css';
import React from "react";
import TopSection from "../TopSection/TopSection";

export default function HomePage () {
    return (
        <div className="home-container" >
            <div className="home-wrapper">
                <TopSection/>
            </div>
        </div>
    );
}