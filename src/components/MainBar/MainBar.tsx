import React from "react";
import './MainBar.css';
import {Container, Image} from "react-bootstrap";
import FullNavbar from "../FullNavBar/FullNavBar";
import MininizedNavBar from "../MinimizedNavBar/MinimizedNavBar";
import SearchButtonPopUp from "../SearchButtonPopUp/SearchButtonPopUp";

export default function MainBar(){

    const elements: any = [
        {
            key: 'NEWS',
            buttonLink: '#',
            values: [
                {name:'Abortion Rights', link:'#'},
                {name:'Orlando Area News', link:'#'},
                {name:'Florida News', link:'#'},
                {name:'LGTQ+', link:'#'},
                {name:  'Pulse', link:'#'},
                {name:'Views + Opinions', link:'#'},
                {name:'Orlando Guides', link:'#'},
                {name:'Digital Issue', link:'#'},
                {name:'News Slideshows', link:'#'}],
        },
        {
            key: 'ARTS + CULTURE',
            buttonLink: '#',
            values: [
                {name:'Art Stories + Interviews', link:'#'},
                {name:'Things to Do', link:'#'},
                {name:'Orlando Theme Parks', link:'#'},
                {name:'Arts + Culture Slideshows', link:'#'}],
        },
        {
            key: 'FOOD + DRINK',
            buttonLink: '#',
            values: [
                {name:'Food News', link:'#'},
                {name:'Drinking + Bars', link:'#'},
                {name:'Restaurant Reviews', link:'#'},
                {name:'Find a Restaurant', link:'#'},
                {name:'Food + Drink Slideshow', link:'#'}],
        },
        {
            key: 'MUSIC',
            buttonLink: '#',
            values: [
                {name: 'Music Stories + Interviews' , link:'#'},
                {name:'Orlando Music News', link:'#'},
                {name:'Live Music Picks + Previews', link:'#'},
                {name:'Find a Concert', link:'#'},
                {name:'Music Slideshows', link:'#'}],
        },
        {
            key: 'MOVIES',
            buttonLink: '#',
            values: [
                {name:'Movie Reviews', link:'#'},
                {name:'Streaming', link:'#'},
                {name:'Find a Theater', link:'#'},
                {name:'Movie Times', link:'#'}],
        },
        {
            key: 'CANNABIS',
            buttonLink: '#',
            values: [
                {name:'Cannabis News', link:'#'},
                {name:'Legislative Updates', link:'#'},
                {name:'Dispensary Directory', link:'#'}],
        },
        {
            key: 'CALENDAR',
            buttonLink: '#',
            values: [
                {name:'Things to Do', link:'#'},
                {name:'Orlando Theme Parks', link:'#'},
                {name:'Arts + Culture Slideshows', link:'#'}],
        },
        {
            key: 'BEST OF ORLANDO@',
            buttonLink: '#',
            values: [
                {name:'2025 Voting', link:'#'},
                {name:'Arts + Entertainment', link:'#'},
                {name:'Attractions + Recreation', link:'#'},
                {name: 'City Life', link:'#'},
                {name: 'Drinking + Nightlife', link:'#'},
                {name: 'Food + Dining', link:'#'},
                {name: 'Health, Beauty + Wellness', link:'#'},
                {name: 'Local Music'}, {name: 'Local Notables', link:'#'},
                {name: 'Services', link:'#'},
                {name: 'Shopping + Retail', link:'#'},
                {name: 'Shop Best of Awards', link:'#'}],
        }
    ]

    const specialElements: any = [
        {
            key: 'SLIDESHOWS',
            buttonLink: '#',
        }
    ]

    const specialDropdown: any[] = [
        {
            key: 'SUPPORT',
            buttonLink: '#',
            values: [
                {name:'Support', link:'#'},
                {name:'Subscribe', link:'#'},
                {name:'Advertise', link:'#'},
                {name:'Instagram', link:'#'},
                {name:'Twitter', link:'#'},
                {name:'Facebook', link:'#'}],
        }
    ]

    const searchDropdown: any[] = [
        {
            key: 'SEARCH',
            buttonLink: '#',
            values: [
                {name:'in Article & Posts', link:'#'},
                {name:'in Slideshows', link:'#'},
                {name:'in Events', link:'#'},
                {name:'in Locations', link:'#'},
                {name:'All', link:'#'}],
        }
    ]

    const onlyMinimizedElements: any[] = [
        {
            key: 'ABOUT US',
            buttonLink: '#',
            values: [
                {name:'Contact Us', link:'#'},
                {name:'Work For Us', link:'#'},
                {name:'Staff Directory', link:'#'},
                {name:'Where to Find Us', link:'#'},
                {name:  'FAQ', link:'#'},
                {name:'Policies', link:'#'},
                {name:'Support', link:'#'},
                {name:'Subscribe', link:'#'},
                {name:'Advertise', link:'#'}],
        },
    ]



    return (
        <div className="header">
            <Container className="header-container">

                <div className="header-wrapper">
                    <MininizedNavBar elements={elements} specialElements={specialElements} specialDropdown={specialDropdown} onlyMinimizedElements={onlyMinimizedElements} />
                    <h1 className="margin-remove">
                        <a className="link-logo" href="#" title='Orlando Weekly' >
                            <Image src="https://picsum.photos/230/97" alt="Logo" className="logo"/>
                        </a>
                    </h1>
                    <a className="link-activity sponsor" href="#" title='Orlando Weekly activity' >
                        <Image src="https://picsum.photos/728/90" alt="Orlando Weekly activity" className="sponsor"/>
                    </a>
                    <SearchButtonPopUp searchDropdown={searchDropdown}/>
                </div>
                <FullNavbar elements={elements} specialElements={specialElements} specialDropdown={specialDropdown} searchDropdown={searchDropdown}/>
            </Container>
        </div>
    );
}