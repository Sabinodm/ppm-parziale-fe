import './CardJournalismpromo.css';
import React from "react";
import HorizontalSponsor from "../../HorizontalSponsor/HorizontalSponsor";
import {Button, Image} from "react-bootstrap";
import CardJournal from "../CardJournal/CardJournal";

export default function CardJournalismPromo () {

    return (
        <div className="journalism-section-wrapper">
            <div className="journalism-section">
                <Image src="https://picsum.photos/220/92" alt="journalism-logo" className="journalism-logo"></Image>
                <div className="journalism-text">Get the Best Local Journalism in North America in your Inbox</div>
                <Button className="journalism-signUp">
                    Sign Up Now
                </Button>
            </div>
            <HorizontalSponsor/>
            <div className="journal-container">
                <CardJournal/>
                <CardJournal/>
                <CardJournal/>
                <CardJournal/>
                <CardJournal/>
                <CardJournal/>
            </div>


        </div>
    );
}