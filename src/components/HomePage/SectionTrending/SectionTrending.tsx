import './SectionTrending.css';
import React from "react";
import TitleBanner from "../TitleBanner/TitleBanner";
import CardTrending from "../CardTrending/CardTrending";


export default function SectionTrending () {
    return (
        <div className="latest-container" >
            <TitleBanner title="trending" link="#"/>
            <div className="card-wrapper">
                <CardTrending/>
                <CardTrending/>
                <CardTrending/>
                <CardTrending/>
            </div>
        </div>
    );
}