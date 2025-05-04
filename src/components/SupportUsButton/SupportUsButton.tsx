import './SupportUsButton.css';
import React from "react";
import {Button} from "react-bootstrap";

export default function SupportUsButton () {
    return (
        <Button className="supportUs-button" >
            <a className="supportUs" href="#">
                <span className="supportUs-text">Support Us</span>
            </a>
        </Button>
    );
}