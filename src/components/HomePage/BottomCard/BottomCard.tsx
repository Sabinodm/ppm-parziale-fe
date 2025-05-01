import './BottomCard.css';
import React from "react";
import {Image} from "react-bootstrap";

export default function BottomCard () {
    return (
        <div className="card-container" >
            <div className="news-card">
                <a className="article-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/600/371" alt="photo related to the article" className="article-image" />
                </a>
                <h2 className="bottom-article-title">
                    <a className="bottom-link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </h2>
                <div className="bottom-article-footer">
                    <span className="article-author">By Lorem Ipsum</span>|<time className="article-date">Apr 30,2025</time>
                </div>
            </div>
        </div>
    );
}