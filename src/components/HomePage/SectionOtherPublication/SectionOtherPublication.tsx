import './SectionOtherPublication.css';
import React from "react";
import {Image} from "react-bootstrap";

export default function SectionOtherPublication () {
    return (
        <div className="sister-publication" >
            <h2 className="sister-publication-title"> Communication </h2>
            <p className="sister-publication-text">Read our sister publications</p>
            <div className="sister-publication-logo">
                <Image src="https://picsum.photos/100/32?1" alt="photo related to the sister publication" className="other-image" />
                <Image src="https://picsum.photos/100/32?2" alt="photo related to the sister publication 1" className="other-image" />
                <Image src="https://picsum.photos/100/32?3" alt="photo related to the sister publication 2" className="other-image" />
                <Image src="https://picsum.photos/100/32?4" alt="photo related to the sister publication 3" className="other-image" />
            </div>
        </div>
    );
}