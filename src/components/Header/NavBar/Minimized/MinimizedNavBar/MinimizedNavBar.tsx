import React from "react";
import './MinimizedNavBar.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import {DropdownInterface} from "../../../../../interfaces/DropdownInterface";
import MinimizedDropDown from "../MinimizedDropdown/MinimizedDropdown";
import MinimizedSpNavButton from "../MinimizedSpNavButton/MinimizedSpNavButton";

export default function MinimizedNavBar ({elements, specialElements, specialDropdown, onlyMinimizedElements} : any) {

    function toggleShow() {
        const side = document.getElementById('dropdown');
        if (side) {
            side.classList.toggle('show');
        }
    }

    return (
        <>
        <Button onClick={toggleShow} className="minimized-nav-button" aria-label="Toggle navigation bar">
            <i className="fas fa-bars">
                <FontAwesomeIcon icon={faBars} className="bars" />
            </i>
        </Button>

        <div className="side" id="dropdown">
            <div className="side-menu" id="dropdown">
                <div className="item-container">
                    {elements.map((item: DropdownInterface) => (
                        <MinimizedDropDown item={item}/>
                    ))}
                    {specialElements.map((item: DropdownInterface) => (
                        <MinimizedSpNavButton label={item.key} buttonLink={item.buttonLink}/>
                    ))}
                    {specialDropdown.map((item: DropdownInterface) => (
                        <MinimizedDropDown item={item}/>
                    ))}
                    {onlyMinimizedElements.map((item: any) => (
                        <MinimizedDropDown item={item}/>
                    ))}
                </div>
            </div>
            <div onClick={toggleShow} className="side-filling" id="dropdown"></div>
        </div>
        </>
    );
}