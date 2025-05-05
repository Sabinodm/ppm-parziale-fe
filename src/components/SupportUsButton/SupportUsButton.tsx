import './SupportUsButton.css';
import React from "react";

export default function SupportUsButton () {
    return (
        <button className="supportUs-button" >
            <a className="supportUs" href="#">
                <span className="supportUs-text">Support Us</span>
            </a>
        </button>
    );
}