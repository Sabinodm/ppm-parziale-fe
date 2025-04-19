import React from "react";
import './MainBar.css';
import {Container, Image, Navbar} from "react-bootstrap";
import FullNavbar from "../FullNavBar/FullNavBar";

export default function MainBar(){
    return (
        <Container className="header">
            <div className="header-content">
                <h1 className="margin-remove">
                    <a className="link-logo" href="#" title='Orlando Weekly' >
                        <Image src="https://picsum.photos/230/97" alt="Logo" className="logo"/>
                    </a>
                </h1>
                <Image src="https://picsum.photos/728/90" alt="Logo" className="sponsor"/>
            </div>
            <FullNavbar />
        </Container>
    );
}