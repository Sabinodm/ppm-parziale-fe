import React from "react";
import './DropDownButton.css';
import {DropdownInterface} from "../../interfaces/DropdownInterface";
interface DropdownParameters {
    item: DropdownInterface
}
export default function DropDownButton ({item} : DropdownParameters) {
    return (
        <div className="nav-item dropdown">
                <>
                    <a href={item.buttonLink} className="nav-button" data-bs-toggle="dropdown" aria-expanded="false">
                        {item.key}
                    </a>
                    <ul className="dropdown-menu">
                        {item.values.slice(0, -1).map((value: any, index: number) => (
                            <a className="dropdown-item" href={value.link}>{value.name}</a>
                        ))}
                        <a className="dropdown-item special-last" href={item.values[item.values.length - 1].link}> {item.values[item.values.length - 1].name}</a>
                    </ul>
                </>
        </div>
    );
}