import React from "react";
import './MinimizedSpNavButton.css';
export default function MinimizedSpNavButton ({label, buttonLink} : {label: string, buttonLink: string}) {

    return (
        <div className="minimized-nav-item">
            <a href={buttonLink} className="side-nav-button sp" aria-expanded="false">
                {label}
            </a>
        </div>
    );

}