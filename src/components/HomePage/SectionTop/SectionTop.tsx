import './SectionTop.css';
import React from "react";
import Highlights from "../Highlights/Highlights";
import CardEvents from "../CardEvents/CardEvents";

export default function SectionTop () {
    return (
        <div className="top-section">
            <Highlights/>
            <CardEvents/>
        </div>
    );
}