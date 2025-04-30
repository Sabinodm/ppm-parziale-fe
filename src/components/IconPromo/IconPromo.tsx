import './IconPromo.css';
import React from "react";
import {Image} from "react-bootstrap";

export default function IconPromo () {
    return (
        <div className="icon-promo" >
            <a className="link-sponsor" href="#" title='Promotional Content Icon' >
                <Image src="https://picsum.photos/300/250" alt="Promotional Content Icon" />
            </a>
        </div>
    );
}