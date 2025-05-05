import './SectionOtherPublication.css';
import React from "react";

export default function SectionOtherPublication () {
    return (
        <div className="sister-publication" >
            <h2 className="sister-publication-title"> Communication </h2>
            <p className="sister-publication-text">Read our sister publications</p>
            <div className="sister-publication-logo">
                <img src="https://picsum.photos/100/32?1" alt="sister publication 1" className="other-image" />
                <img src="https://picsum.photos/100/32?2" alt="sister publication 2" className="other-image" />
                <img src="https://picsum.photos/100/32?3" alt="sister publication 3" className="other-image" />
                <img src="https://picsum.photos/100/32?4" alt="sister publication 4" className="other-image" />
            </div>
        </div>
    );
}