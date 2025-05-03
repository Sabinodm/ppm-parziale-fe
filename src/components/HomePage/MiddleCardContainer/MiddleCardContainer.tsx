import './MiddleCardContainer.css';
import React from "react";
import CardTextSide from "../CardTextSide/CardTextSide";
import TitleBanner from "../TitleBanner/TitleBanner";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function MiddleCardContainer ({ title, link, footer1, fLink1, footer2, fLink2 }: { title: string, link: string, footer1: string, fLink1: string, footer2: string, fLink2: string }) {
    return (
        <div className="card-section">
            <TitleBanner title={title} link={link}/>
            <div className="horizontal-card-wrapper">
                <CardTextSide/>
                <CardTextSide/>
            </div>
            <div className="horizontal-card-button">
                <a className="horizontal-card-button-link" href={link} title="card button" >
                    More {title}
                    <FontAwesomeIcon icon={faAngleRight} className="angle-right"/>
                </a>
            </div>
            <div className="horizontal-card-footer">
                <a className="horizontal-card-footer-link" href={fLink1} title="footer link">{footer1}</a>
                <span className="event-bar-span">|</span>
                <a className="horizontal-card-footer-link" href={fLink2} title="footer link">{footer2}</a>
            </div>
        </div>
    );
}