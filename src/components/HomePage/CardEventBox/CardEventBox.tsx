import './CardEventBox.css';
import React, {useState} from "react";
import {Button} from "react-bootstrap";

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
                        <div className="element-tab">
                            {/*TODO aggiungere tab eventi*/}
                        </div>
                    </>
                )}
                {activeTab === 'MUSIC' && (
                    <>
                        {/*TODO aggiungere tab eventi*/}
                    </>
                )}
                {activeTab === 'MOVIES' && (
                    <>
                        {/*TODO aggiungere tab eventi*/}
                    </>
                )}
                {activeTab === 'DINING' && (
                    <>
                        {/*TODO aggiungere tab eventi*/}
                    </>
                )}
            </div>
        </div>
    );
}