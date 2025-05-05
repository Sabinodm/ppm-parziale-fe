import './HorizontalSponsor.css';
import React from "react";


export default function HorizontalSponsor () {
    return (
        <div className="horizontal-container">
            <a className="orizontal-sponsor-link" href="#" title='photo related to the article'  >
                <img src="https://picsum.photos/728/90" alt="sponsor" className="sponsor-image" />
            </a>
        </div>
    );
}