import React from "react";
import './SearchButtonPopUp.css';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import {DropdownInterface} from "../../interfaces/DropdownInterface";

export default function SearchButtonPopUp ({searchDropdown} : any) {

    return (
        <>
            <Button className="minimized-nav-button">
                <i className="fas fa-bars fa-2x">
                    <FontAwesomeIcon icon={faSearch} className="bars" />
                </i>
            </Button>
        </>
    );
}
