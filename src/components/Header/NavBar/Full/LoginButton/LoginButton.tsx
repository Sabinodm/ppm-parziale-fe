import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'


export default function LoginButton () {
    return (
        <i className="nav-item ">
            <button className="nav-button" aria-expanded="false" aria-label="Login Button">
                <FontAwesomeIcon icon={faUser} />
            </button>
        </i>
    );
}