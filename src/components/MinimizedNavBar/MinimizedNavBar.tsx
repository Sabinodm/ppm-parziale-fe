import React from "react";
import './MinimizedNavBar.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import MinimizedNavButton from "../MinimizedNavButton/MinimizedNavButton";
import {DropdownInterface} from "../../interfaces/DropdownInterface";
import DropDownButton from "../DropDownButton/DropDownButton";

export default function MinimizedNavBar ({elements, specialElements, specialDropdown, onlyMinimizedElements} : any) {

    function toggleShow() {
        const side = document.getElementById('dropdown');
        if (side) {
            side.classList.toggle('show');
        }
    }

    return (
        <>
        <Button onClick={toggleShow} className="minimized-nav-button">
            <i className="fas fa-bars fa-2x">
                <FontAwesomeIcon icon={faBars} className="bars" />
            </i>
        </Button>

        <div className="side" id="dropdown">
            <div className="side-menu" id="dropdown">
                <div className="item-container">
                    {elements.map((item: DropdownInterface) => (
                        <DropDownButton item={item}/>
                    ))}
                    {specialElements.map((item: DropdownInterface) => (
                        <MinimizedNavButton label={item.key} buttonLink={item.buttonLink}/>
                    ))}
                    {specialDropdown.map((item: any) => (
                        <MinimizedNavButton label={item.key} buttonLink={item.buttonLink}/>
                    ))}
                    {onlyMinimizedElements.map((item: any) => (
                        <MinimizedNavButton label={item.key} buttonLink={item.buttonLink}/>
                    ))}
                </div>
            </div>
            <div onClick={toggleShow} className="side-filling" id="dropdown"></div>
        </div>





        </>
    );
}