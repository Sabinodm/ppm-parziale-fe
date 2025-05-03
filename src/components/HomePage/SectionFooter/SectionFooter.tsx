import './SectionFooter.css';
import React from "react";
import {DropdownInterface} from "../../../interfaces/DropdownInterface";
import CardFooter from "../CardFooter/CardFooter";

const footer = [
    {
        key: "first row",
        section: [
            {
                key: 'NEWS',
                buttonLink: '#',
                values: [
                    {name: 'Abortion Rights', link: '#'},
                    {name: 'Orlando Area News', link: '#'},
                    {name: 'Florida News', link: '#'},
                    {name: 'LGTQ+', link: '#'},
                    {name: 'Pulse', link: '#'},
                    {name: 'Informed Dissent', link: '#'},
                    {name: 'Views + Opinions', link: '#'},
                    {name: 'Orlando Sports', link: '#'},
                    {name: 'Savage Love', link: '#'},
                    {name: 'Reader Reactions', link: '#'},
                    {name: 'Comics', link: '#'},
                    {name: 'Digital Issue', link: '#'},
                    {name: 'News Slideshows', link: '#'},], },
            {
                key: 'MOVIES',
                buttonLink: '#',
                values: [
                    {name: 'Movie Reviews', link: '#'},
                    {name: 'Streaming', link: '#'},
                    {name: 'Find a Theater', link: '#'},
                    {name: 'Movie Times', link: '#'}],
            }

        ]
    },
    {
        key: "second row",
        section: [
            {
                key: 'ARTS + CULTURE',
                buttonLink: '#',
                values: [
                    {name: 'Art Stories + Interviews', link: '#'},
                    {name: 'Live Active Cultures', link: '#'},
                    {name: 'Things to Do', link: '#'},
                    {name: 'Orlando Theme Parks', link: '#'},
                    {name: 'Astrology', link: '#'},
                    {name: 'Performing Arts', link: '#'},
                    {name: 'Visual Arts', link: '#'},
                    {name: 'Arts + Culture Slideshows', link: '#'}],
            },
            {
                key: 'CALENDAR',
                buttonLink: '#',
                values: [
                    {name: 'Orlando Weekly Events', link: '#'},
                    {name: 'Today\'s Events', link: '#'},
                    {name: 'This Weekend', link: '#'},
                    {name: 'Free Events', link: '#'},
                    {name: 'Submit an Event', link: '#'}],
            },
            {
                key: 'SOCIAL MEDIA',
                buttonLink: '#',
                values: [
                    {name: 'Instagram', link: '#'},
                    {name: 'Twitter', link: '#'},
                    {name: 'Facebook', link: '#'}],
            }
        ]
    },
    {
        key: 'third row',
        section: [
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
                    {name: 'Local Music'},
                    {name: 'Local Notables', link:'#'},
                    {name: 'Services', link:'#'},
                    {name: 'Shopping + Retail', link:'#'},
                    {name: 'Shop Best of Awards', link:'#'}],
            },
            {
                key: 'SPONSORED LINKS',
                buttonLink: '#',
                values: [
                    {name:'Apartments Near UCF', link:'#'},
                    {name:'Apartments Near Full Sail', link:'#'},
                    {name:'Orlando Apartments', link:'#'}],
            }
        ]
    },
    {
        key : 'fourth row',
        section: [
            {
                key: 'MUSIC',
                buttonLink: '#',
                values: [
                    {name: 'Music Stories + Interviews' , link:'#'},
                    {name:'Orlando Music News', link:'#'},
                    {name:'Live Music Picks + Previews', link:'#'},
                    {name:'This Little Underground', link:'#'},
                    {name:'Find a Concert', link:'#'},
                    {name:'Music Slideshows', link:'#'}],
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
                key: 'ORLANDO GUIDDES',
                buttonLink: '#',
                values: [
                    {name:'City Guide', link:'#'},
                    {name:'Bite', link:'#'},
                    {name:'Fall Guide', link:'#'},
                    {name:'Holiday Guide', link:'#'},
                    {name:'Newcomers Guide', link:'#'},
                    {name:'Summer Guide', link:'#'},
                    {name:'Legal Advertising', link:'#'},
                    {name:'Sponsored Articles', link:'#'}]
            }
        ]
    },
    {
        key: 'fifth row',
        section: [
            {
                key: 'GIVEAWAYS + EVENTS',
                buttonLink: '#',
                values: [
                    {name:'Contests', link:'#'},
                    {name:'Orlando Weekly Events', link:'#'},
                    {name:'Orlando Burger Week', link:'#'},
                    {name:'Beer \'Merica', link:'#'},
                    {name:'Bite30', link:'#'},
                    {name:'Tacos & Tequila', link:'#'},
                    {name:'Orlando Taco Week', link:'#'},
                    {name:'Orlando Beer Festival', link:'#'},
                    {name:'Whiskey Business', link:'#'}],
            },
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
            }
        ]
    }
];


export default function SectionFooter () {
    return (
        <div className="section-footer">
            <div className="footer-wrapper">
                {footer.map((row: any) => (
                    <div className="row-container">
                        {row.section.map((item: any) => (
                            <CardFooter row={item}/>
                        ))}
                    </div>
                ))}
            </div>
            <div className="copyright-container" >
                <p className="copyright">© 2025 Lorem Ipsum.</p>
            </div>
        </div>
    );
}
