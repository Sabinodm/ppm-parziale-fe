import './MiddleSection.css';
import React from "react";
import MiddleCardContainer from "../MiddleCardContainer/MiddleCardContainer";
import {Image} from "react-bootstrap";

export default function MiddleSection () {
    return (
        <div className="middle-section">
            <div className="section">
                <MiddleCardContainer title="News" link="#" footer1="orlando area news" fLink1="#" footer2="Florida news" fLink2="#"/>
                <MiddleCardContainer title="Arts + Culture" link="#" footer1="things to do" fLink1="#" footer2="orlado theme parks" fLink2="#"/>
            </div>
            <div className="section">
                <div className="middle-section-promo">
                    <Image src="https://picsum.photos/300/600" alt="promo" className="middle-promo-image" />
                </div>
            </div>
            <div className="section">
                <MiddleCardContainer title="food + drink" link="#" footer1="resturant reviews" fLink1="#" footer2="drinking + bars" fLink2="#"/>
                <MiddleCardContainer title="music" link="#" footer1="orlando music news" fLink1="#" footer2="concert announcements" fLink2="#"/>
            </div>
        </div>
    );
}