import './CardEventBox.css';
import React, {useState} from "react";
import CardEventTab from "../CardEventTab/CardEventTab";

const tabs = ['EVENTS', 'MUSIC', 'MOVIES', 'DINING' ];


export default function EventsBox () {

    const [activeTab, setActiveTab] = useState('EVENTS');
    return (
        <div className="box-container" >
            <div className="event-nav">
                {tabs.map((tab) => (
                    <button key={tab} className={`tab ${activeTab === tab ? 'active-tab' : ''}`} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
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