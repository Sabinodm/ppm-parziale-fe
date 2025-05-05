import './CardTrendingSlideshow.css';
import React from "react";

export default function CardTrendingSlideshow () {
    return (
        <div className="card-container" >
            <div className="news-card">
                <a className="article-image-link" href="#" title='photo related to the article'  >
                    <img src="https://picsum.photos/600/371" alt="photo related to the article" className="article-image" />
                </a>
                <h3 className="bottom-article-title">
                    <a className="bottom-link-article tren-slid" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </h3>
            </div>
        </div>
    );
}