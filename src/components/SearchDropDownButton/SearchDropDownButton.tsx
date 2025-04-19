import React from "react";
import './SearchDropDownButton.css';
import {DropdownInterface} from "../../interfaces/DropdownInterface";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
interface DropdownParameters {
    item: DropdownInterface
}
export default function DropDownButton ({item} : DropdownParameters) {
    return (
        <div className="nav-item dropdown">
            <>
                <div className="search-header">
                    <i className="nav-button">
                        <FontAwesomeIcon icon={faSearch} className="flip-horizontal"/>
                    </i>
                </div>
                <ul className="dropdown-menu">
                    <div className="search-box">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    {item.values.slice(0, -1).map((value: any, index: number) => (
                        <a className="dropdown-item search-item" href={value.link}>{value.name}</a>
                    ))}
                    <a className="dropdown-item special-last search-item" href={item.values[item.values.length - 1].link}> {item.values[item.values.length - 1].name}</a>
                </ul>
            </>
        </div>
    );
}