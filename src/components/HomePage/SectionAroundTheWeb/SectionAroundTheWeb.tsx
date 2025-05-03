import './SectionAroundTheWeb.css';
import React from "react";
import CardAroundTheWeb from "../CardAroundTheWeb/CardAroundTheWeb";


export default function SectionAroundTheWeb() {
    return (
        <div className="aroundTheWeb-container" >
            <h2 title="around the web" className="aroundTheWeb-title"> Around The Web </h2>
            <div className="card-wrapper">
                <CardAroundTheWeb/>
                <CardAroundTheWeb/>
                <CardAroundTheWeb/>
                <CardAroundTheWeb/>
            </div>
        </div>
    );
}