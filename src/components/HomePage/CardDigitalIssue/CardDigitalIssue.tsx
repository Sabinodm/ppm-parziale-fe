import './CardDigitalIssue.css';
import React from "react";
import {Carousel,} from "react-bootstrap";
import TitleBanner from "../TitleBanner/TitleBanner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default function CardDigitalIssue() {


    return (
    <div className="digitalIssue-wrapper" >
        <TitleBanner title="digital issue" link="#"/>
        <div className="digitalIssue-container" >
            <time className="digitalIssue-date">April 30, 2025</time>
            <Carousel interval={null} fade={true} indicators={false} controls={true}   className="carousel-container">

                <Carousel.Item>
                    <img src="https://picsum.photos/320/270" alt="photo related to the carousel 1" className="digitalIssue-image" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://picsum.photos/320/270?1" alt="photo related to the carousel 2" className="digitalIssue-image" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://picsum.photos/320/270?2" alt="photo related to the carousel 3" className="digitalIssue-image" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://picsum.photos/320/270?3" alt="photo related to the carousel 4" className="digitalIssue-image" />
                </Carousel.Item>
            </Carousel>
            <div className="digitalIssue-card-button">
                <a className="horizontal-card-button-link" href="#" title="card button" >
                    view more issue
                    <FontAwesomeIcon icon={faAngleRight} className="angle-right"/>
                </a>
            </div>
        </div>
    </div>
);
}