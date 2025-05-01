import './TheLatest.css';
import React from "react";
import BottomCard from "../BottomCard/BottomCard";
import {Image} from "react-bootstrap";


export default function TheLatest () {
    return (
        <div className="latest-container" >
            <h1 className="event-banner">
                <a className="event-banner-link" href="#">The Latest</a>
            </h1>
            <div className="card-wrapper">
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
            </div>
        </div>
    );
}