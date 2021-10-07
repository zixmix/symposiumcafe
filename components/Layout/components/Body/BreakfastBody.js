import React from "react";
import Link from "next/link";

export default function BreakfastBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <img src="https://symposiumcafe.com/images/pages/charity/14978416breakfast-club.jpg" alt="https://symposiumcafe.com/" className="img-responsive"/>
                                    <div className="header-image-with-text">
                                        <h1>Breakfast Club of Canada</h1>
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
                                <div className="row">
                                    <div className="col-lg-9"  style={{width:"70%", float:"left", paddingLeft:"15px"}}>
                                        <h2> Helping Breakfast Club of Canada to nourish our Communities</h2>
                                        <p>Children should go to school hungry for knowledge, not hungry for food.</p>
                                        <p>When you recognize that 60% of a child’s academic learning happens before lunch, it is clear why
                                            breakfast is the most important meal of the day. So when we saw the need in many of our
                                            Symposium neighbourhoods, it was with great enthusiasm that we partnered up with Breakfast Club
                                            Canada to help to ensure that BCC schools in our communities were supported in their breakfast
                                            programs.</p>
                                        <p> Here’s how it works. A portion of each sale from our 7Day Specials feature, goes to help sustain
                                            a local BCC program school. So when you’re having Burgers & Beer on Monday, Martinis & Mussels
                                            on Wednesday, or enjoying our Thursday Dinner for Two, you’ll also be supporting a great cause.
                                            You enjoy a great deal – the children receive a nutritious meal. Our 7Day features have been so
                                            well-received that in 2014 we presented a cheque to the Breakfast Club of Canada for over
                                            $40,000! Thanks to our valued guests and the participation of each Symposium Cafe Restaurant &
                                            Lounge location, the total dollar has grown to $103,000 and continues to grow monthly as we work
                                            together to help #feedourfuture.</p>
                                        <p> The effects of a nutritious breakfast are many. Research shows that there are marked
                                            improvements in the following: behaviour and concentration, academic performance,
                                            self-confidence, and overall interest in school subjects. The way we see it, it’s something that
                                            has to be done; so we’re thankful for our guests’ participation, and extremely grateful for the
                                            involvement of all of our Symposium locations.</p>
                                        <p>For more information on Breakfast Club of Canada or volunteering see
                                            <a href="http://www.breakfastclubcanada.org/">http://www.breakfastclubcanada.org/</a> or follow BCC @BreakfastCanada.</p>
                                    </div>
                                    <div className="col-lg-3" style={{float:"right"}}>
                                        <div className="widget yellow-bg">
                                            <div className="header-h2">
                                                <h2 className="text-center">Charity</h2>
                                            </div>
                                            <ul className="menu-categories">
                                                <Link href="/charity/brakfast" className="link-charity active">Breakfast Club of Canada</Link>
                                                <br/>
                                                <Link href="/charity/golf" className="link-charity ">Golf for a Cure</Link>
                                                <br/>
                                                <Link href="/charity/world" className="link-charity ">World Vision International</Link>
                                                <br/>
                                                <Link href="/charity/proud" className="link-charity ">Proud to Support</Link>
                                            </ul>
                                        </div>
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