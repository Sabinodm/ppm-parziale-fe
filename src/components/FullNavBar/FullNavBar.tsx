import React from "react";
import './FullNavBar.css';
import DropDownButton from "../DropDownButton/DropDownButton";
import FullNavButton from "../FullNavButton/FullNavButton";
import {DropdownInterface} from "../../interfaces/DropdownInterface";
import SpecialDropDownButton from "../SpecialDropDown/SpecialDropDown";
import LoginButton from "../LoginButton/LoginButton";
import SearchDropDownButton from "../SearchDropDownButton/SearchDropDownButton";

export default function FullNavbar({elements, specialElements, specialDropdown, searchDropdown}: any) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav">
                            {elements.map((item: DropdownInterface) => (
                                <DropDownButton item={item}/>
                            ))}
                            {specialElements.map((item: DropdownInterface) => (
                                <FullNavButton label={item.key} buttonLink={item.buttonLink}/>
                            ))}
                            {specialDropdown.map((item: DropdownInterface) => (
                                <SpecialDropDownButton item={item}/>
                            ))}
                            <LoginButton />
                            {searchDropdown.map((item: DropdownInterface) => (
                                <SearchDropDownButton item={item}/>
                            ))}

                        </div>

                    </div>

            </div>
        </nav>
    );
}
