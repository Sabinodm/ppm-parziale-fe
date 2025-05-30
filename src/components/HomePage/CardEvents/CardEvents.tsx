import './CardEvents.css';
import React from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EventsBox from "../CardEventBox/CardEventBox";
import TitleBanner from "../TitleBanner/TitleBanner";


export default function CardEvents () {
    return (
        <div className="events-container" >
            <div className="events-wrapper">
                <div className="events-header">
                    <TitleBanner title="Events" link="#"/>
                    <a className="event-image-link" href="#" title='photo related to the article'  >
                        <img src="https://picsum.photos/654/371"  className="event-image" alt="Event image placeholder" />
                    </a>
                    <h3 className="event-title">
                        <a className="event-link" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                    </h3>
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
                    <img src="https://picsum.photos/300/250"  alt="sponsor" className="sponsor-event"/>
                </a>
            </div>
        </div>
    );
}