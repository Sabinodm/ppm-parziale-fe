import React from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'


export default function LoginButton () {
    return (
        <div className="nav-item ">
            <Button className="nav-button" aria-expanded="false">
                <FontAwesomeIcon icon={faUser} />
            </Button>
        </div>
    );
}