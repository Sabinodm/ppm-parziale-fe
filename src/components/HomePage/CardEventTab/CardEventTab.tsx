import './CardEventTab.css';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function CardEventTab ({section} : {section: string}) {

  if (section === 'events' || section === 'music') {
    return (
        <div className="event-tab-container">
            <select className="event-tab-button" aria-label="Select a date">
                    <option value="">-All Dates-</option>
                    <option value="2025-05-05">Monday, May 5</option>
                    <option value="2025-05-06">Tuesday, May 6</option>
                    <option value="2025-05-07">Wednesday, May 7</option>
                    <option value="2025-05-08">Thursday, May 8</option>
                    <option value="2025-05-09">Friday, May 9</option>
                    <option value="2025-05-10">Saturday, May 10</option>
                    <option value="2025-05-11">Sunday, May 11</option>
                    <option value="2025-05-12">Monday, May 12</option>
                    <option value="2025-05-13">Tuesday, May 13</option>
                    <option value="2025-05-14">Wednesday, May 14</option>
                    <option value="2025-05-15">Thursday, May 15</option>
                    <option value="2025-05-16">Friday, May 16</option>
                    <option value="2025-05-17">Saturday, May 17</option>
                    <option value="2025-05-18">Sunday, May 18</option>
                    <option value="2025-05-19">Monday, May 19</option>
                    <option value="2025-05-20">Tuesday, May 20</option>
                    <option value="2025-05-21">Wednesday, May 21</option>
                    <option value="2025-05-22">Thursday, May 22</option>
                    <option value="2025-05-23">Friday, May 23</option>
                    <option value="2025-05-24">Saturday, May 24</option>
                    <option value="2025-05-25">Sunday, May 25</option>
                    <option value="2025-05-26">Monday, May 26</option>
                    <option value="2025-05-27">Tuesday, May 27</option>
                    <option value="2025-05-28">Wednesday, May 28</option>
                    <option value="2025-05-29">Thursday, May 29</option>
                    <option value="2025-05-30">Friday, May 30</option>
                    <option value="2025-05-31">Saturday, May 31</option>
                    <option value="2025-06-01">Sunday, June 1</option>
                    <option value="2025-06-02">Monday, June 2</option>
                    <option value="2025-06-03">Tuesday, June 3</option>
                    <option value="2025-06-04">Wednesday, June 4</option>
            </select>
            <select className="event-tab-button" aria-label="Select a category">
                <option>-All Categories-</option>
                <optgroup label="calendar">
                    <option>Art: Classes</option>
                    <option>Art: Exhibition</option>
                    <option>Art: Opening</option>
                    <option>Civics</option>
                    <option>Comedy</option>
                    <option>Comedy: Improv</option>
                    <option>Comedy: Standup</option>
                    <option>Dance</option>
                    <option>Dance: Ballet</option>
                    <option>Dance: Bur</option>
                    <option>Dance: Modern</option>
                    <option>Events</option>
                    <option>Events: Food &amp; Drink</option>
                    <option> Events: Markets</option>
                    <option>Events: Parties</option>
                    <option>Events: Trade Shows</option>
                    <option>Fall Guide</option>
                    <option>Family</option>
                    <option>Film</option>
                    <option>Holiday</option>
                    <option>Holiday: Christmas</option>
                    <option>Holiday: Easter</option>
                    <option>Holiday: Father's Day</option>
                    <option>Holiday: Fourth of July</option>
                    <option>Holiday: Halloween</option>
                    <option>Holiday: Hanukkah</option>
                    <option>Holiday: Mother's Day</option>
                    <option>Holiday: New Year's</option>
                    <option>Holiday: Thanksgiving</option>
                    <option>Holiday: Valentine's Day</option>
                    <option>Learning</option>
                    <option>Learning: Cooking</option>
                    <option>Learning: Crafts</option>
                    <option>LGBTQ</option>
                    <option>Literary</option>
                    <option>Literary: Classes</option>
                    <option>Literary: Poetry</option>
                    <option>Literary: Readings &amp; Signings</option>
                    <option>Shopping</option>
                    <option>Sports</option>
                    <option>Sports: Running</option>
                    <option>Sports: Yoga</option>
                    <option>Spring Guide</option>
                    <option>Tabletop Games</option>
                    <option>Theater</option>
                    <option>Theater: Opera</option>
                    <option>Trivia</option>
                </optgroup>
            </select>
            <select className="event-tab-button" aria-label="Select a neighborhood">
                <option>-All Neighborhoods-</option>
                    <option>Apopka</option>
                    <option>Central</option>
                    <option>Audubon Park</option>
                    <option>Casselberry</option>
                    <option>Disney</option>
                    <option>Downtown</option>
                    <option>East</option>
                    <option>Edgewood</option>
                    <option>Elsewhere</option>
                    <option>I-Drive/Universal</option>
                    <option>Ivanhoe Village</option>
                    <option>North</option>
                    <option>South</option>
                    <option>West Orlando</option>
                    <option>Dr. Phillips</option>
                    <option>Winter Park Area</option>
                    <option>Milk District</option>
                    <option>SoDo</option>
                    <option>Kissimmee</option>
                    <option>UCF</option>
                    <option>Mount Dora</option>
                    <option>Conway/Curry Ford</option>
                    <option>Belle Isle</option>
                    <option>Mills 50</option>
                    <option>College Park</option>
                    <option>Thornton Park</option>
                    <option>North Florida</option>
                    <option>Baldwin Park</option>
                    <option>Eola Heights</option>
                    <option>South Eola</option>
                    <option>Online Only</option>
                    <option>Sanford</option>
                    <option>Lake Nona</option>
                    <option>Colonialtown</option>
                    <option>New Smyrna</option>
            </select>
            <div className="event-search">
                <div className="event-tab-button">
                    <input aria-label="Search input" type="text" className="event-search-input" placeholder="Enter Keywords..." />
                    <span className="event-search-icon">
                        <FontAwesomeIcon icon={faSearch} className="event-icon" />
                    </span>
                </div>
                <button className="event-go-button" type="submit">
                    <span className="event-go-text">go</span>
                </button>
            </div>
        </div>
    );
  }
    if (section === 'movies') {
        return (
            <div className="event-tab-container">
                <select className="event-tab-button" aria-label="Select a movie">
                    <option>Select a movie</option>
                        <option>Abby's List: A Documentary</option>
                        <option>The Accountant 2</option>
                        <option>The Amateur</option>
                        <option>AMC Screen Unseen: May 5</option>
                        <option>Bonjour Tristesse</option>
                        <option>Cheech and Chong's Last Movie</option>
                        <option>Cinemark Secret Movie Series</option>
                        <option>Disney's Snow White</option>
                        <option>Drop</option>
                        <option>The Dumpling Queen</option>
                        <option>Guru Nanak Jahaz</option>
                        <option>HIT: The Third Case</option>
                        <option>The King of Kings</option>
                        <option>The Legend of Ochi</option>
                        <option>A Minecraft Movie</option>
                        <option>A Minecraft Movie: Block Party Edition</option>
                        <option>Monday Mystery Movie</option>
                        <option>On Swift Horses</option>
                        <option>Premiere Secret Cinema</option>
                        <option>Pride & Prejudice 20th Anniversary Re-release</option>
                        <option>Raid 2</option>
                </select>
                <div className="or-space">
                    <span className="or-text">or</span>
                </div>
                <select className="event-tab-button" aria-label="Select a location">
                    <option>Select a location</option>
                        <option>Central</option>
                        <option>- Orlando Fashion Square</option>
                        <option></option>
                        <option>Disney</option>
                        <option>- AMC Disney Springs 24</option>
                        <option>- Studio Movie Grill Sunset Walk</option>
                        <option></option>
                        <option>East</option>
                        <option>- AMC West Oaks 14</option>
                        <option>- Regal Waterford Lakes Stadium 20 &amp; IMAX</option>
                        <option></option>
                        <option>Elsewhere</option>
                        <option>- Cinepolis Luxury Cinema Hamlin</option>
                        <option></option>
                        <option>I-Drive/Universal</option>
                        <option>- Cinemark Orlando and XD</option>
                        <option>- The Cowfish Sushi Burger Bar</option>
                        <option>- Regal Pointe Orlando 4DX &amp; IMAX</option>
                        <option></option>
                        <option>North</option>
                        <option>- AMC Altamonte Mall 18</option>
                        <option>- AMC Lake Square 12</option>
                        <option>- AmStar 12 - Lake Mary</option>
                        <option>- Regal Oviedo Marketplace 22</option>
                        <option></option>
                        <option>South</option>
                        <option>- Cinépolis Polk County IMAX</option>
                        <option>- Regal The Loop &amp; RPX</option>
                        <option></option>
                        <option>West Orlando</option>
                        <option>- Regal Wekiva Riverwalk</option>
                        <option>- West Orange Cinema</option>
                        <option></option>
                        <option>Winter Park Area</option>
                        <option>- Regal Cinemas Winter Park Village 20</option>
                        <option></option>
                </select>
                <div className="brows-space">
                    <a className="browse-text" href="#">
                        Browse all films times
                    </a>
                </div>
            </div>
        );
    }
    if (section === 'dining') {
        return (
            <div className="event-tab-container">
                <select className="event-tab-button" aria-label="Select a category">
                    <option>-All Categories-</option>
                        <option>African</option>
                        <option>American</option>
                        <option>Argentine</option>
                        <option>Armenian</option>
                        <option>Bakery</option>
                        <option>Barbecue</option>
                        <option>Brazilian</option>
                        <option>Breakfast/Brunch</option>
                        <option>Brewpub</option>
                        <option>Burgers</option>
                        <option>Café/Bistro</option>
                        <option>Cajun/Creole</option>
                        <option>Caribbean</option>
                        <option>Chinese</option>
                        <option>Coffee house (chain)</option>
                        <option>Coffee house (independent)</option>
                        <option>Contemporary</option>
                        <option>Cuban</option>
                        <option>Deli</option>
                        <option>Desserts</option>
                        <option>Diner</option>
                        <option>Dutch</option>
                        <option>Eastern European</option>
                        <option>Egyptian</option>
                        <option>Eritrean</option>
                        <option>Ethiopian</option>
                        <option>European</option>
                        <option>Filipino</option>
                        <option>&ilipino-American</option>
                        <option>Fondue</option>
                        <option>Food Hall</option>
                        <option>Food Truck</option>
                        <option>French</option>
                        <option>General</option>
                        <option>General Fare</option>
                        <option>German</option>
                        <option>Greek</option>
                        <option>Hawaiian</option>
                        <option>Hot Dogs</option>
                        <option>Ice Cream</option>
                        <option>Indian</option>
                        <option>Indonesian</option>
                        <option>Irish</option>
                        <option>Israeli</option>
                        <option>Italian</option>
                        <option>Jamaican</option>
                        <option>Japanese</option>
                        <option>Japanese/Sushi</option>
                        <option>Juice</option>
                        <option>Korean</option>
                        <option>Kosher</option>
                        <option>Laotian</option>
                        <option>Latin American</option>
                        <option>Lebanese</option>
                        <option>Malaysian</option>
                        <option>Market</option>
                        <option>Mediterranean</option>
                        <option>Mexican</option>
                        <option>Middle Eastern</option>
                        <option>Modern American</option>
                        <option>Mongolian</option>
                        <option>Moroccan</option>
                        <option>Noodles</option>
                        <option>Pan-Asian</option>
                        <option>Persian</option>
                        <option>Peruvian</option>
                        <option>Pizza</option>
                        <option>Poké</option>
                        <option>Polish</option>
                        <option>Pub Grub</option>
                        <option>Puerto Rican</option>
                        <option>Russian</option>
                        <option>Salads</option>
                        <option>Sandwiches/Subs</option>
                        <option>Saudi</option>
                        <option>Saudi-Indonesian</option>
                        <option>Seafood</option>
                        <option>Soup</option>
                        <option>Southern/Soul</option>
                        <option>Spanish</option>
                        <option>Sri Lankan</option>
                        <option>Steakhouse</option>
                        <option>Swedish</option>
                        <option>Sweets</option>
                        <option>Tapas</option>
                        <option>Tea</option>
                        <option>Tex-Mex</option>
                        <option>Thai</option>
                        <option>Turkish</option>
                        <option>Ukrainian</option>
                        <option>Uzbek</option>
                        <option>Vegetarian/Vegan</option>
                        <option>Vietnamese</option>
                        <option>Wine</option>
                </select>
                <select className="event-tab-button" aria-label="Select a neighborhood">
                    <option>-All Neighborhoods-</option>
                        <option>Apopka</option>
                        <option>Central</option>
                        <option>Audubon Park</option>
                        <option>Casselberry</option>
                        <option>Disney</option>
                        <option>Downtown</option>
                        <option>East</option>
                        <option>Edgewood</option>
                        <option>Elsewhere</option>
                        <option>I-Drive/Universal</option>
                        <option>Ivanhoe Village</option>
                        <option>North</option>
                        <option>South</option>
                        <option>West Orlando</option>
                        <option>Dr. Phillips</option>
                        <option>Winter Park Area</option>
                        <option>Milk District</option>
                        <option>SoDo</option>
                        <option>Kissimmee</option>
                        <option>UCF</option>
                        <option>Mount Dora</option>
                        <option>Conway/Curry Ford</option>
                        <option>Belle Isle</option>
                        <option>Mills 50</option>
                        <option>College Park</option>
                        <option>Thornton Park</option>
                        <option>North Florida</option>
                        <option>Baldwin Park</option>
                        <option>Eola Heights</option>
                        <option>South Eola</option>
                        <option>Online Only</option>
                        <option>Sanford</option>
                        <option>Lake Nona</option>
                        <option>Colonialtown</option>
                        <option>New Smyrna</option>
                </select>
                <div className="event-search">
                    <div className="event-tab-button">
                        <input aria-label="Search input" type="text" className="event-search-input" placeholder="Enter Keywords..." />
                        <span className="event-search-icon">
                        <FontAwesomeIcon icon={faSearch} className="event-icon" />
                    </span>
                    </div>
                    <button className="event-go-button" type="submit">
                        <span className="event-go-text">go</span>
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="event-tab-container">
            </div>
        )

    }
}