import './SectionJournalismPromo.css';
import React from "react";
import HorizontalSponsor from "../../HorizontalSponsor/HorizontalSponsor";
import CardJournal from "../CardJournal/CardJournal";

export default function SectionJournalismPromo () {

    return (
        <div className="journalism-section-wrapper">
            <div className="journalism-section">
                <img src="https://picsum.photos/220/92" alt="journalism-logo" className="journalism-logo"></img>
                <h2 className="journalism-text">Get the Best Local Journalism in North America in your Inbox</h2>
                <button className="journalism-signUp">
                    Sign Up Now
                </button>
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