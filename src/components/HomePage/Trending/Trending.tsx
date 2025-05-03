import './Trending.css';
import React from "react";
import BottomCard from "../BottomCard/BottomCard";
import TitleBanner from "../TitleBanner/TitleBanner";


export default function Trending () {
    return (
        <div className="latest-container" >
            <TitleBanner title="trending" link="#"/>
            <div className="card-wrapper">
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
            </div>
        </div>
    );
}