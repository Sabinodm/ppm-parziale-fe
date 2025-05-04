import React from "react";
import './SearchButtonPopUp.css';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import {DropdownInterface} from "../../../interfaces/DropdownInterface";

export default function SearchButtonPopUp ({searchDropdown} : any) {

    function togglePopUp() {
        const popUp = document.getElementById('popUp');
        if (popUp) {
            popUp.classList.toggle('show');
        }
    }


    return (
        <>
            <Button onClick={togglePopUp} className="minimized-nav-button" aria-label="Toggle search pop Up">
                <i className="fas fa-bars">
                    <FontAwesomeIcon icon={faSearch} className="bars" />
                </i>

            </Button>
            <div onClick={togglePopUp} className="popUp-background" id="popUp">
                <div className="popUp" onClick={(e) => e.stopPropagation()} >
                        <div className="header-wrapper-popUp">
                            <h3 className="popUp-search-header">Search</h3>
                            <i className="close-button" onClick={togglePopUp}>
                                <FontAwesomeIcon icon={faX}/>
                            </i>
                        </div>
                        <div className="popUp-search-input-box">
                            <span className="search-icon">
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                            </span>
                            <input aria-label="Search input" type="text" className="search-input" placeholder="Enter Keywords..." />
                        </div>
                        <div className="popUp-wrapper">
                            <li className="item-wrapper">
                                {searchDropdown.map((item : DropdownInterface) => (
                                    item.values.map((value: any, index: number) => (
                                        <a className="popUp-search-item" href={value.link}>{value.name}</a>
                                    ))
                                ))}
                            </li>
                            <div className="go-wrapper">
                                <a className="go-button" href="#">GO</a>
                            </div>
                        </div>
                </div>

            </div>


        </>
    );
}
