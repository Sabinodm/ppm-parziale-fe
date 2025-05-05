import './CardTextSide.css';
import React from "react";

export default function CardTextSide () {
    return (
        <div className="card-side-container" >
            <div className="text-side-news-card">
                <a className="text-side-article-image-link" href="#" title='photo related to the article'  >
                    <img src="https://picsum.photos/600/371" alt="photo related to the article" className="article-image" />
                </a>
                <h3 className="text-side-article-title">
                    <a className="text-side-link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non odio felis.</a>
                </h3>
            </div>
        </div>
    );
}