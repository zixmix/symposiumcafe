import React from "react";
import Image from "next/image";
import Pic from "../../../../../images/decor/decor.jpg";
import {
    School_of_athens,
    Alexander_the_Great,
    Apollo_and_Minerva,
    Pythagoras,
    Aristotle_and_Plato,
    Diogenes_the_Dog,
    Raphael,
    Epicurus,
    Heraclitus,
    The_Parnassus,
    Primavera,
    Fire_in_the_Borgo,
    The_Birth_of_Venus
} from "/data/images";
import BodyTop from "../../UI/BodyTop";
import LegacyPost from "./LegacyPost";

export default function DecorBody() {
    return (
        <div>
            <BodyTop title="Charity" image={Pic}/>
            <section>
                <div className="container">
                    <div className="page-without-top">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Unique, Award - Winning Decor - A Distinctive and Inviting Atmosphere </h2>
                                <p> ”Wow”. “Stunning”. “Amazing”. These are words we often hear when customers see
                                    Symposium’s
                                    Renaissance - inspired restaurant interiors for the first time. The Renaissance was
                                    a time of
                                    enlightenment,
                                    so what better way to stimulate the discussions that take place within our unique
                                    stone art
                                    walls than to surround our guests with some inspiration?. And it’s not just
                                    restaurant
                                    guests
                                    who are attracted to our beautiful surroundings; we’ve also got professors regularly
                                    sending
                                    students to examine the works as part of their curriculum!
                                </p>
                                <p> The quality of workmanship in our stone art walls and modern frescos is just another
                                    way we
                                    invite you to escape the ordinary. Each one of our restaurants offers guests a
                                    similar decor, yet one that
                                    is
                                    customized in size, seating and design, to give it a one-of-a-kind feel. You wont
                                    find a restaurant like it.
                                </p>
                                <p>Raphael’s famous School of Athens fresco is our trademark visual centerpiece in
                                    each
                                    restaurant. This classic work shows philosophers Aristotle and Plato debating their
                                    viewpoints
                                    while all around them other scholars are engaged in conversation, work, or games. We
                                    like to
                                    think of Symposium as the modern-day version of this gathering: a business meeting
                                    at one
                                    table,
                                    a family celebration at another, a romantic meal on the patio, and a solo diner
                                    enjoying
                                    downtime. Business or casual. Formal or relaxed. We’ve got a place for everyone and
                                    a menu
                                    for
                                    every taste.</p>
                                <p> Here’s a brief art history lesson for your next Symposium visit:</p>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="img-symposium">
                                            <div className="img-overlay"/>
                                            <div className="img-name">School of Athens</div>
                                            <Image src={School_of_athens} width={600} height={400}
                                                   alt="School of Athens"
                                                   className="img-responsive"/>

                                            <div className="col-lg-4">
                                                <h2 className="bigger-h2">School of Athens</h2>
                                                <p><em>
                                                    Raphael, 1510-1511, Fresco, 8m x 5.5m.
                                                </em></p>
                                                <p>Plato and Aristotle, the two great philosophers of the classical
                                                    world are
                                                    central to
                                                    this piece.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <LegacyPost/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}