import './HorizontalCard.css';
import React from "react";
import {Image} from "react-bootstrap";

export default function HorizontalCard () {
    return (
        <div className="horizontal-card-container" >
            <div className="horizontal-news-card">
                <a className="horizontal-article-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/600/371" alt="photo related to the article" className="article-image" />
                </a>
                <h2 className="horizontal-article-title">
                    <a className="horizontal-link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non odio felis.</a>
                </h2>
            </div>
        </div>
    );
}