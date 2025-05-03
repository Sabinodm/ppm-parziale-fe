import React from "react";
import './MinimizedDropdown.css';
import {DropdownInterface} from "../../../../../interfaces/DropdownInterface";
import MinimizedNavButton from "../MinimizedNavButton/MinimizedNavButton";
interface DropdownParameters {
    item: DropdownInterface
}
export default function MinimizedDropDown ({item} : DropdownParameters) {

    function toggleOpen(key: string) {
        const chevron = document.getElementById(`chevron-${key}`);
        const open = document.getElementById(`side-dropdown-${key}`);
        if (open) {
            open.classList.toggle('open-dropdown');
        }
        if (chevron) {
            chevron.classList.toggle('rotate-chevron');
        }
    }

    return (
        <div className="minimized-item dropdown">
            <>
                <div onClick={() => toggleOpen(item.key)} className="side-button">
                    <MinimizedNavButton label={item.key} buttonLink={item.buttonLink}/>
                </div>
                <div className="side-nav-wrapper" id={`side-dropdown-${item.key}`}>
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