import './PrivacyButton.css';
import React from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from '@fortawesome/free-solid-svg-icons'

export default function PrivacyButton () {
    return (
        <Button className="privacy-button" >
            <a className="privacy" href="#">
                <FontAwesomeIcon icon={faGear} className="gear"/>
                <span className="privacy-text">Privacy</span>
            </a>
        </Button>
    );
}