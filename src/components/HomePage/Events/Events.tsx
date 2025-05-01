import './Events.css';
import React from "react";
import {Image} from "react-bootstrap";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EventsBox from "../EventBox/EventBox";


export default function Events () {
    return (
        <div className="events-container" >
            <div className="events-wrapper">
                <div className="events-header">
                    <h1 className="event-banner">
                        <a className="event-banner-link" href="#">Events</a>
                    </h1>
                    <a className="event-image-link" href="#" title='photo related to the article'  >
                        <Image src="https://picsum.photos/654/371"  className="event-image" alt="Event image" />
                    </a>
                    <h2 className="event-title">
                        <a className="event-link" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                    </h2>
                    <p className="event-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="event-footer">
                        <time className="event-date">Sat.,May 3,5-8 p.m.</time>
                    </div>
                </div>
                <div className="event-bar">
                    <FontAwesomeIcon icon={faSearch}/>
                    <a className="event-bar-link" href="#"> All of today's events</a>
                    <span className="event-bar-span">|</span>
                    <a className="event-bar-link" href="#">Staff Picks</a>
                </div>
                <EventsBox />
                <a href="#" title='sponsor'  >
                    <Image src="https://picsum.photos/300/250"  alt="sponsor" />
                </a>
            </div>
        </div>
    );
}