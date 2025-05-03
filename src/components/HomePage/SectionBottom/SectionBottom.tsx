import './SectionBottom.css';
import React from "react";
import CardBestOfOrlando from "../CardBestOfOrlando/CardBestOfOrlando";
import CardDigitalIssue from "../CardDigitalIssue/CardDigitalIssue";

export default function SectionBottom () {

    return (
        <div className="bottom-section-wrapper">
            <div className="section-bottom">
                <CardBestOfOrlando/>
            </div>
            <div className="section-bottom">
                <CardDigitalIssue/>
            </div>
            <div className="section-bottom">

            </div>
        </div>
    );
}