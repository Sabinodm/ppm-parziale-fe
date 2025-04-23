import React from "react";

export default function MinimizedNavButton ({label, buttonLink} : {label: string, buttonLink: string}) {
    return (
        <div className="nav-item">
            <a href={buttonLink} className="side-nav-button" aria-expanded="false">
                {label}
            </a>
        </div>

    );
}