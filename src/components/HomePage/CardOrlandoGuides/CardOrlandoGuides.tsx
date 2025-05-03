import './CardOrlandoGuides.css';
import React from "react";
import {Image} from "react-bootstrap";
import TitleBanner from "../TitleBanner/TitleBanner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default function CardOrlandoGuides () {

    return (
        <div className="guides-wrapper" >
            <TitleBanner title="orlando guides" link="#"/>
            <div className="guides-container" >
                <a className="guides-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/350/127" alt="photo related to the guide" className="guides-image" />
                    <span className="guides-text">
                        city guides
                    </span>
                </a>
                <a className="guides-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/350/127?1" alt="photo related to the guide" className="guides-image" />
                    <span className="guides-text">
                        bite
                    </span>
                </a>
                <a className="guides-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/350/127?2" alt="photo related to the guide" className="guides-image" />
                    <span className="guides-text">
                        newcomers guide
                    </span>
                </a>
                <a className="guides-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/350/127?3" alt="photo related to the guide" className="guides-image" />
                    <span className="guides-text">
                        summer guide
                    </span>
                </a>
            </div>
            <div className="digitalIssue-card-button">
                <a className="horizontal-card-button-link" href="#" title="card button" >
                    view more guides
                    <FontAwesomeIcon icon={faAngleRight} className="angle-right"/>
                </a>
            </div>
        </div>
    );
}