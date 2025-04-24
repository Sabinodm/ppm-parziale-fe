import React from "react";
import './MinimizedDropdown.css';
import {DropdownInterface} from "../../interfaces/DropdownInterface";
import MinimizedNavButton from "../MinimizedNavButton/MinimizedNavButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
interface DropdownParameters {
    item: DropdownInterface
}
export default function MinimizedDropDown ({item} : DropdownParameters) {

    function toggleOpen() {
        const open = document.getElementById('side-dropdown');
        if (open) {
            open.classList.toggle('open-dropdown');
        }
    }

    return (
        <div className="minimized-item dropdown">
            <>
                <div onClick={toggleOpen} className="side-button">
                    <MinimizedNavButton label={item.key} buttonLink={item.buttonLink}/>
                </div>
                <div className="side-nav-wrapper" id="side-dropdown">
                    <ul className="side-dropdown-menu">
                        {item.values.map((value: any, index: number) => (
                            <a className="side-dropdown-item" href={value.link}>{value.name}</a>

                        ))}
                    </ul>
                </div>
            </>

        </div>
    );
}