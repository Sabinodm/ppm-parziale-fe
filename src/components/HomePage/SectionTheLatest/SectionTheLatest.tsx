import './SectionTheLatest.css';
import React from "react";
import CardTextUnder from "../CardTextUnder/CardTextUnder";
import TitleBanner from "../TitleBanner/TitleBanner";


export default function SectionTheLatest () {
    return (
        <div className="latest-container" >
            <TitleBanner title="the latest" link="#"/>
            <div className="card-wrapper">
                <CardTextUnder/>
                <CardTextUnder/>
                <CardTextUnder/>
                <CardTextUnder/>
                <CardTextUnder/>
                <CardTextUnder/>
                <CardTextUnder/>
                <CardTextUnder/>
            </div>
        </div>
    );
}