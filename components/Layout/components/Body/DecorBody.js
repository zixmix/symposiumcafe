import React from "react";
import Image from "next/image";
import Slika from "/public/images/decor/prva.jpg";
import Slika2 from "/public/images/decor/dva.jpg";
import Slika3 from "/public/images/decor/1.jpg";
import Slika4 from "/public/images/decor/2.jpg";
import Slika5 from "/public/images/decor/3.jpg";
import Slika6 from "/public/images/decor/4.jpg";
import Slika7 from "/public/images/decor/5.jpg";
import Slika8 from "/public/images/decor/6.jpg";
import Slika9 from "/public/images/decor/7.jpg";
import Slika10 from "/public/images/decor/8.jpg";
import Slika11 from "/public/images/decor/9.jpg";
import Slika12 from "/public/images/decor/10.jpg";
import Slika13 from "/public/images/decor/11.jpg";
import Slika14 from "/public/images/decor/12.jpg";






export default function DecorBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Slika} width={1010} height={380}
                                     alt="https://symposiumcafe.com/" className="img-responsive"/>
                                    <div className="header-image-with-text">
                                        <h1>Decor</h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                            <div className="img-overlay"></div>
                                            <div className="img-name">School of Athens</div>
                                            <Image src={Slika2} width={600} height={400} alt="School of Athens"
                                                 className="img-responsive"/>

                                        <div className="col-lg-4">
                                            <h2 className="bigger-h2">School of Athens</h2>
                                            <p><em>
                                                Raphael, 1510-1511, Fresco, 8m x 5.5m.
                                            </em></p>
                                            <p>Plato and Aristotle, the two great philosophers of the classical world are
                                                central to
                                                this piece.
                                            </p>
                                        </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Alexander the Great</div>
                                            <Image src={Slika3} alt="Alexander the Great" className="img-responsive"/>
                                        </div>
                                        <p>King of Macedonia and a pupil of Aristotle, Alexander is seen here listening
                                            attentively to Socrates.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Apollo and Minerva</div>
                                            <Image src={Slika4}
                                                 alt="Apollo and Minerva" className="img-responsive"/>
                                        </div>
                                        <p>Raphael included these two figures to emphasize the schools of thought
                                            represented by
                                            Aristotle and Plato. </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Pythagoras</div>
                                            <Image src={Slika5} alt="Pythagoras"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>The renowned mathematician, Pythagoras, embodies arithmetic and music.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Aristotle and Plato</div>
                                            <Image src={Slika6}
                                                 alt="Aristotle and Plato" className="img-responsive"/>
                                        </div>
                                        <p>Reflecting two schools of thought, these philosophers share a world of
                                            provocative
                                            and debatable theories.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Diogenes the Dog</div>
                                            <Image src={Slika7} alt="Diogenes the Dog"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>The cynic Diogenes, hated worldly possessions and lived in a barrel. His
                                            attitude is reflected in his clothing and posture.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Raphael</div>
                                            <Image src={Slika8} alt="Raphael"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>This was Raphaels creative way of connecting the past and present, and of
                                            paying
                                            tribute to the great men of his day.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Epicurus</div>
                                            <Image src={Slika9} alt="Epicurus"
                                                 className="img-responsive"/>
                                        </div>
                                        <p> This philosopher taught that happiness lay in the pursuit of pleasures of
                                            the mind.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Heraclitus</div>
                                            <Image src={Slika10} alt="Heraclitus"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>
                                            This lonely character, who was not in Raphael s preliminary drawings,
                                            represents the
                                            melancholy philosopher, Heraclitus, who it was said wept for human folly.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">The Parnassus</div>
                                            <Image src={Slika11} alt="The Parnassus"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>The painting shows the mythological Mount Parnassus where Apollo resides. He
                                            is
                                            surrounded by the nine muses, nine poets from antiquity, and nine
                                            contemporary
                                            poets.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Primavera</div>
                                            <Image src={Slika12} alt="Primavera"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>
                                            Also known as Allegory of Spring. The history of the
                                            painting is
                                            not certainly
                                            known, though it seems to have been commissioned by one of the Medici
                                            family. It
                                            contains elements of Ovid and Lucretius and may have been inspired by a poem
                                            by
                                            Poliziano.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">The Birth of Venus</div>
                                            <Image src={Slika13}
                                                 alt="The Birth of Venus" className="img-responsive"/>
                                        </div>
                                        <p>
                                            It depicts the goddess Venus, having emerged from the sea as a full grown
                                            woman,
                                            arriving at the sea-shore. The painting is held in the Uffizi Gallery in
                                            Florence.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="img-symposium">
                                            <div className="img-overlay"></div>
                                            <div className="img-name smaller">Fire in the Borgo</div>
                                            <Image src={Slika14} alt="Fire in the Borgo"
                                                 className="img-responsive"/>
                                        </div>
                                        <p>
                                            The Fire in the Borgo shows an event that is documented in the Liber
                                            Pontificalis: a
                                            fire that broke out in the Borgo in Rome in 847 CE. According to legend,
                                            Pope Leo IV
                                            contained the fire with his benediction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}