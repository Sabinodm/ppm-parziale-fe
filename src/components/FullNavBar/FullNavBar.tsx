import React from "react";
import './FullNavBar.css';
import DropDownButton from "../DropDownButton/DropDownButton";
import NavDButton from "../NavDButton/NavDButton";
import {DropdownInterface} from "../../interfaces/DropdownInterface";
import SpecialDropDownButton from "../SpecialDropDown/SpecialDropDown";
import LoginButton from "../LoginButton/LoginButton";
import SearchDropDownButton from "../SearchDropDownButton/SearchDropDownButton";

export default function FullNavbar() {
    const elements: any[] = [
        {
            key: 'NEWS',
            buttonLink: '#',
            values: [{name:'Abortion Rights', link:'#'}, {name:'Orlando Area News', link:'#'}, {name:'Florida News', link:'#'}, {name:'LGTQ+', link:'#'}, {name:  'Pulse', link:'#'}, {name:'Views + Opinions', link:'#'}, {name:'Orlando Guides', link:'#'}, {name:'Digital Isuue', link:'#'}, {name:'News Slideshows', link:'#'}],
        },
        {
            key: 'ARTS + CULTURE',
            buttonLink: '#',
            values: [{name:'Art Stories + Interviews', link:'#'}, {name:'Things to Do', link:'#'}, {name:'Orlando Theme Parks', link:'#'}, {name:'Arts + Culture Slideshows', link:'#'}],
        },
        {
            key: 'FOOD + DRINK',
            buttonLink: '#',
            values: [{name:'Food News', link:'#'}, {name:'Drinking + Bars', link:'#'}, {name:'Restaurant Reviews', link:'#'}, {name:'Find a Restaurant', link:'#'}, {name:'Food + Drink Slideshow', link:'#'}],
        },
        {
            key: 'MUSIC',
            buttonLink: '#',
            values: [{name: 'Music Stories + Interviews' , link:'#'}, {name:'Orlando Music News', link:'#'}, {name:'Live Music Picks + Previews', link:'#'}, {name:'Find a Concert', link:'#'}, {name:'Music Slideshows', link:'#'}],
        },
        {
            key: 'MOVIES',
            buttonLink: '#',
            values: [{name:'Movie Reviews', link:'#'}, {name:'Streaming', link:'#'}, {name:'Find a Theater', link:'#'}, {name:'Movie Times', link:'#'}],
        },
        {
            key: 'CANNABIS',
            buttonLink: '#',
            values: [{name:'Cannabis News', link:'#'}, {name:'Legislative Updates', link:'#'}, {name:'Dispensary Directory', link:'#'}],
        },
        {
            key: 'CALENDAR',
            buttonLink: '#',
            values: [{name:'Things to Do', link:'#'}, {name:'Orlando Theme Parks', link:'#'}, {name:'Arts + Culture Slideshows', link:'#'}],
        },
        {
            key: 'BEST OF ORLANDO@',
            buttonLink: '#',
            values: [{name:'2025 Voting', link:'#'}, {name:'Arts + Entertainment', link:'#'}, {name:'Attractions + Recreation', link:'#'},  {name: 'City Life', link:'#'}, {name: 'Drinking + Nightlife', link:'#'}, {name: 'Food + Dining', link:'#'}, {name: 'Health, Beauty + Wellness', link:'#'}, {name: 'Local Music'}, {name: 'Local Notables', link:'#'}, {name: 'Services', link:'#'}, {name: 'Shopping + Retail', link:'#'}, {name: 'Shop Best of Awards', link:'#'}],
        }
    ]

    const specialDropdown: any[] = [
        {
            key: 'SUPPORT',
            buttonLink: '#',
            values: [{name:'Support', link:'#'}, {name:'Subscribe', link:'#'}, {name:'Advertise', link:'#'}, {name:'Instagram', link:'#'}, {name:'Twitter', link:'#'}, {name:'Facebook', link:'#'}],
        }
    ]

    const searchDropdown: any[] = [
        {
            key: 'SEARCH',
            buttonLink: '#',
            values: [{name:'in Article & Posts', link:'#'}, {name:'in Slideshows', link:'#'}, {name:'in Events', link:'#'}, {name:'in Locations', link:'#'}, {name:'All', link:'#'}],
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav">
                            {elements.map((item: DropdownInterface) => (
                                <DropDownButton item={item}/>
                            ))}
                            <NavDButton label='SLIDESHOW' buttonLink='#'/>
                            {specialDropdown.map((item: DropdownInterface) => (
                                <SpecialDropDownButton item={item}/>
                            ))}
                            <LoginButton />
                            {searchDropdown.map((item: DropdownInterface) => (
                                <SearchDropDownButton item={item}/>
                            ))}

                        </div>

                    </div>

            </div>
        </nav>
    );
}
