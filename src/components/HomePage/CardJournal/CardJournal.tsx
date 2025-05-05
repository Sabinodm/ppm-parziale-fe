import './CardJournal.css';
import React from "react";

export default function CardJournal () {
    return (
        <div className="card-journal-container" >
            <div className="journal-card">
                <a className="journal-image-link" href="#" title='photo related to the article'  >
                    <img src="https://picsum.photos/148/83" alt="photo related to the article" className="article-image" />
                </a>
                <div className="journal-text-container">
                    <h3 className="text-side-journal-title">
                        <a className="text-side-link-journal" href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                    </h3>
                    <div className="journal-footer">
                        <span className="journal-author">Lorem Ipsum</span>
                        <span className="event-bar-span">/</span>
                        <time className="journal-date">Apr 30,2025</time>
                    </div>
                </div>
            </div>
        </div>
    );
}