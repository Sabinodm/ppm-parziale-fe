import './Highlights.css';
import React from "react";

export default function Highlights () {
    return (
        <div className="highlights-container" >
            <div className="first-highlights-wrapper">
                <div className="first-highlight">
                    <a className="article-image-link" href="#" title='photo related to the article'  >
                        <img src="https://picsum.photos/1280/800" alt="photo related to the article" className="article-image" />
                    </a>
                    <h3 className="article-title">
                        <a className="link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                    </h3>
                    <p className="article-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="article-footer">
                        <span className="article-author">By Lorem Ipsum</span>|<time className="article-date">Apr 30,2025</time>
                    </div>
                </div>
            </div>
            <div className="bottom-highlights-container">
                <div className="bottom-highlights-wrapper">
                    <div className="bottom-highlights">
                        <a className="article-image-link" href="#" title='photo related to the article'  >
                            <img src="https://picsum.photos/1280/800" alt="photo related to the article" className="article-image" />
                        </a>
                        <h3 className="bottom-article-title">
                            <a className="bottom-link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        </h3>
                        <p className="article-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="bottom-article-footer">
                            <span className="article-author">By Lorem Ipsum</span>|<time className="article-date">Apr 30,2025</time>
                        </div>
                    </div>
                    <div className="bottom-highlights">
                        <a className="article-image-link" href="#" title='photo related to the article'  >
                            <img src="https://picsum.photos/1280/800" alt="photo related to the article" className="article-image" />
                        </a>
                        <h3 className="bottom-article-title">
                            <a className="bottom-link-article" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        </h3>
                        <p className="article-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="bottom-article-footer">
                            <span className="article-author">By Lorem Ipsum</span>|<time className="article-date">Apr 30,2025</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}