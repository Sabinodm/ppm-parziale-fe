import './CardAroundTheWeb.css';
import React from "react";
import {Image} from "react-bootstrap";

export default function CardAroundTheWeb ({alt}: { alt: string }) {
    return (
        <div className="aroundTheWeb-card-container" >
            <div className="news-card">
                <a className="article-image-link" href="#" title='photo related to the article'  >
                    <Image src="https://picsum.photos/600/371" alt={alt} className="article-image" />
                </a>
                <h3 className="bottom-article-title">
                    <a className="aroundTheWeb-link-article tren-slid" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </h3>
                <a className="aroundTheWeb-footer" href="#" title="journal" >
                    <span className="aroundTheWeb-author">Lorem Ipsum</span>
                </a>
            </div>
        </div>
    );
}