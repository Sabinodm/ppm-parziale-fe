import './BackgroundPromo.css'
import React from "react";
import {Image} from "react-bootstrap";

export default function backgroundPromo () {
    return (
        <div className="background-promo" >
            <a className="link-sponsor" href="#" title='Promotional Content' >
                <Image src="https://picsum.photos/1950/978" alt="Promotional Content" className="background-image"/>
            </a>

        </div>
    );
}