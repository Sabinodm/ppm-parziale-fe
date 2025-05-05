import './PrivacyButton.css';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from '@fortawesome/free-solid-svg-icons'

export default function PrivacyButton () {
    return (
        <button className="privacy-button" >
            <a className="privacy" href="#">
                <FontAwesomeIcon icon={faGear} className="gear"/>
                <span className="privacy-text">Privacy</span>
            </a>
        </button>
    );
}