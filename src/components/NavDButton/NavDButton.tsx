import React from "react";

export default function NavDButton ( {label, buttonLink} : {label: string, buttonLink: string}) {
    return (
        <div className="nav-item">
            <a href={buttonLink} className="nav-button" aria-expanded="false">
                {label}
            </a>
        </div>
    );
}