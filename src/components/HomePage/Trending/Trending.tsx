import './Trending.css';
import React from "react";
import TitleBanner from "../TitleBanner/TitleBanner";
import TrendingCard from "../TrendingCard/TrendingCard";


export default function Trending () {
    return (
        <div className="latest-container" >
            <TitleBanner title="trending" link="#"/>
            <div className="card-wrapper">
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
            </div>
        </div>
    );
}