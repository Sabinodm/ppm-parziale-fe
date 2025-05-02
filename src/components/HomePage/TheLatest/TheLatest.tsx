import './TheLatest.css';
import React from "react";
import BottomCard from "../BottomCard/BottomCard";
import {Image} from "react-bootstrap";
import TitleBanner from "../TitleBanner/TitleBanner";


export default function TheLatest () {
    return (
        <div className="latest-container" >
            <TitleBanner title="the latest" link="#"/>
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