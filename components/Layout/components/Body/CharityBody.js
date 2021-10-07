import React from "react";
import Link from "next/link";

export default function CharityBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <img src="https://symposiumcafe.com/images/pages/1453472828charity.jpg"
                                     alt="https://symposiumcafe.com/" className="img-responsive"/>
                                    <div className="header-image-with-text">
                                        <h1>Charity</h1>
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

                                    <div className="charity-blog-post">
                                        <div className="row">
                                            <div className="charity-post">
                                                <div className="col-lg-5">
                                                    <a href="https://symposiumcafe.com/charity/breakfast-club-of-canada">
                                                        <div className="abs-border" style={{width:"30%", float:"left"}}>
                                                            <img
                                                                src="https://symposiumcafe.com/images/pages/charity/14978416breakfast-club.jpg"
                                                                alt="Breakfast Club of Canada"
                                                                className="abs-border-img"
                                                                style={{width:"100px"}}
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-7">
                                                    <a href="https://symposiumcafe.com/charity/breakfast-club-of-canada">
                                                        <h2>Breakfast Club of Canada</h2></a>
                                                    <p>
                                                        Children should go to school hungry for knowledge, not hungry
                                                        for food. When you recognize that 60% of a child’s academic
                                                        learning happens before lunch, it is clear why breakfast is the
                                                        most important meal of the day.
                                                    </p>
                                                    <Link href="./charity/breakfast"
                                                       className="right">[ Read more ]</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charity-blog-post">
                                        <div className="row">
                                            <div className="charity-post">
                                                <div className="col-lg-5">
                                                    <a href="https://symposiumcafe.com/charity/breast-cancer-of-canada">
                                                        <div className="abs-border"  style={{width:"30%", float:"left"}}>
                                                            <img
                                                                src="https://symposiumcafe.com/images/pages/charity/14984658golf-for-a-cure.jpg"
                                                                alt="Golf for a Cure" className="abs-border-img"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-7">
                                                    <a href="https://symposiumcafe.com/charity/breast-cancer-of-canada">
                                                        <h2>Golf for a Cure</h2></a>
                                                    <p>
                                                        Since 2008, we’ve been hitting the greens with guests, staff,
                                                        suppliers, management and owners for the best golf tournament of
                                                        the season.
                                                    </p>
                                                    <Link href="./charity/golf"
                                                       className="right">[ Read more ]</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charity-blog-post">
                                        <div className="row">
                                            <div className="charity-post">
                                                <div className="col-lg-5">
                                                    <a href="https://symposiumcafe.com/charity/world-vision-international">
                                                        <div className="abs-border"  style={{width:"30%", float:"left"}}>
                                                            <img
                                                                src="https://symposiumcafe.com/images/pages/charity/14994657world-vision.jpg"
                                                                alt="World Vision International"
                                                                className="abs-border-img"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-7">
                                                    <a href="https://symposiumcafe.com/charity/world-vision-international">
                                                        <h2>World Vision International</h2></a>
                                                    <p>
                                                        It’s all about giving back. With the opening of every new
                                                        Symposium location, Symposium Cafe Restaurant & Lounge commits
                                                        to the sponsorship of another child through the World Vision
                                                        International program.
                                                    </p>
                                                    <Link href="./charity/world"
                                                       className="right">[ Read more ]</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charity-blog-post">
                                        <div className="row">
                                            <div className="charity-post">
                                                <div className="col-lg-5">
                                                    <a href="https://symposiumcafe.com/charity/olympic-hopefuls">
                                                        <div className="abs-border"  style={{width:"30%", float:"left"}}>
                                                            <img
                                                                src="https://symposiumcafe.com/images/pages/charity/14994657proud-to-support.jpg"
                                                                alt="Proud to Support" className="abs-border-img"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-7">
                                                    <a href="https://symposiumcafe.com/charity/olympic-hopefuls">
                                                        <h2>Proud to Support</h2></a>
                                                    <p>
                                                        Symposium’s ambassadors of sport, Julie Gordon and Brandi
                                                        Wilkerson, are making their mark in the world of beach
                                                        volleyball.
                                                    </p>
                                                    <Link href="./charity/proud"
                                                       className="right">[ Read more ]</Link>
                                                </div>
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