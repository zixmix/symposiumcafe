import React from "react";
import Pic from "/images/charity/charity.jpg"
import {Breakfast_Club_of_Canada,Golf_for_a_Cure,World_Vision_International, Proud_to_Support} from '../../../../../data/images';
import BodyTop from "../../UI/BodyTop";
import CharityPost from "./CharityPost";


export default function CharityBody() {

    const posts = [


        {
            id: 1,
            title: "Breakfast Club of Canada",
            image: Breakfast_Club_of_Canada,
            imageAlt: "Breakfast Club of Canada",
            slug: "charity/breakfast",
            description: `Children should go to school hungry for knowledge, not hungry
                                                    for food. When you recognize that 60% of a child’s academic
                                                    learning happens before lunch, it is clear why breakfast is the
                                                    most important meal of the day.`,
        },
        {
            id: 2,
            title: "Golf for a Cure",
            image: Golf_for_a_Cure,
            imageAlt: "Golf for a Cure",
            slug: "charity/golf",
            description: `Since 2008, we’ve been hitting the greens with guests, 
                            staff, suppliers, management and owners for the best golf tournament of the season.`,
        },
        {
            id: 3,
            title: "World Vision International",
            image: World_Vision_International,
            imageAlt: "World Vision International",
            slug: "charity/world",
            description: `It’s all about giving back. With the opening of every new Symposium location, Symposium Cafe 
                            Restaurant & Lounge commits to the sponsorship of another child through the 
                            World Vision International program.`,
        },
        {
            id: 4,
            title: "Proud to Support",
            image: Proud_to_Support,
            imageAlt: "Proud to Support",
            slug: "charity/proud",
            description: `Symposium’s ambassadors of sport, Julie Gordon and 
                            Brandi Wilkerson, are making their mark in the world of beach volleyball.`,
        }
    ];

    return (
        <div>
            <BodyTop title="Charity" image={Pic}/>
            <section>
                <div className="container">
                    <div className="page-without-top">
                        <div className="row">
                            <div className="col-lg-12">

                                {posts.map((post, key) => {
                                    return <CharityPost key={key} post={post}></CharityPost>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}