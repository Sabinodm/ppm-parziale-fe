import './CardEventBox.css';
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import CardEventTab from "../CardEventTab/CardEventTab";

const tabs = ['EVENTS', 'MUSIC', 'MOVIES', 'DINING' ];


export default function EventsBox () {

    const [activeTab, setActiveTab] = useState('EVENTS');
    return (
        <div className="box-container" >
            <div className="event-nav">
                {tabs.map((tab) => (
                    <Button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </Button>
                ))}

            </div>
            <div className="tab-content">
                {activeTab === 'EVENTS' && (
                    <>
                        <CardEventTab section="events"/>
                    </>
                )}
                {activeTab === 'MUSIC' && (
                    <>
                        <CardEventTab section="music"/>
                    </>
                )}
                {activeTab === 'MOVIES' && (
                    <>
                        <CardEventTab section="movies"/>
                    </>
                )}
                {activeTab === 'DINING' && (
                    <>
                        <CardEventTab section="dining"/>
                    </>
                )}
            </div>
        </div>
    );
}