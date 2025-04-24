import React from "react";
import './MinimizedNavButton.css';
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function MinimizedNavButton ({label, buttonLink} : {label: string, buttonLink: string}, chevron:boolean) {

    return (
        <div className="minimized-nav-item">
            <a href={buttonLink} className="side-nav-button" aria-expanded="false">
                {label}
                <FontAwesomeIcon icon={faChevronLeft} className="chevron" />
            </a>
        </div>
    );
}