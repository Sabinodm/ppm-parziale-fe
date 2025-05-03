import './CardDigitalIssue.css';
import React from "react";
import {Button, Carousel, CarouselItem, Image} from "react-bootstrap";
import TitleBanner from "../TitleBanner/TitleBanner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

export default function CardDigitalIssue() {


    return (
    <div className="digitalIssue-wrapper" >
        <TitleBanner title="digital issue" link="#"/>
        <div className="digitalIssue-container" >
            <time className="digitalIssue-date">April 30, 2025</time>
            {/*Todo add carousel*/}
            {/*<Carousel fade={true} indicators={false} controls={true}  className="carousel-container"*!/*/}
            {/*          prevIcon={*/}
            {/*                <span>*/}
            {/*                    <Button className="carousel-button">*/}
            {/*                        <FontAwesomeIcon icon={faChevronLeft} className="carousel-icon" />*/}
            {/*                    </Button>*/}
            {/*                </span>}*/}
            {/*            nextIcon={*/}
            {/*                <Button className="carousel-button">*/}
            {/*                    <FontAwesomeIcon icon={faChevronRight} className="carousel-icon" />*/}
            {/*                </Button>}>*/}

            {/*    <Carousel.Item>*/}
            {/*        <Image src="https://picsum.photos/220/170" alt="photo related to the article" className="digitalIssue-image" />*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
                    <Image src="https://picsum.photos/220/170?2" alt="photo related to the carousel" className="carousel-item" />
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