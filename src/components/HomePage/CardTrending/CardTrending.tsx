import './CardTrending.css';
import React from "react";
import {Image} from "react-bootstrap";

export default function CardTrending () {
    return (
        <div className="card-container" >
            <div className="news-card">
                <a className="article-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/600/371" alt="photo related to the article" className="article-image" />
                </a>
                <h2 className="bottom-article-title">
                    <a className="bottom-link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </h2>
                <div className="trending-article-footer">
                    <span className="trending-article-author">By Lorem Ipsum</span>
                    <time className="trending-article-date">Apr 30,2025</time>
                </div>
            </div>
        </div>
    );
}