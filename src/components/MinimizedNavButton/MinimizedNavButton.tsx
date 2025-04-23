import React from "react";
import './MinimizedNavButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

export default function MinimizedNavButton ({label, buttonLink} : {label: string, buttonLink: string}) {
    return (
        <div className="minimized-nav-item">
            <div className="side-nav-wrapper">
                <a href={buttonLink} className="side-nav-button" aria-expanded="false">
                    {label}
                </a>
                <FontAwesomeIcon icon={faChevronLeft} className="chevron" />
            </div>
        </div>

    );
}