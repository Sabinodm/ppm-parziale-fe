import './CardFooter.css';
import React from "react";
import {DropdownInterface} from "../../../interfaces/DropdownInterface";
interface DropdownParameters {
    row: DropdownInterface
}

export default function CardFooter ({row}: DropdownParameters) {
    return (
        <div className="footer-row" >
            <h2 className="title">
                <a className="footer-title-link" href={row.buttonLink}>{row.key}</a>
            </h2>
            <ul className="footer-link-list">
                {row.values.map((value: any) => (
                    <li className="footer-list-element" >
                        <a className="footer-link" href={value.link}>{value.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}