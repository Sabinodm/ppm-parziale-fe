import './TopSection.css';
import React from "react";
import Highlights from "../Highlights/Highlights";
import Events from "../Events/Events";

export default function TopSection () {
    return (
        <div className="top-section">
            <Highlights/>
            <Events/>
        </div>
    );
}