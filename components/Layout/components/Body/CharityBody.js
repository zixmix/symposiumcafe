import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "/images/charity/charity.jpg"
import Pic1 from "/images/charity/breakfast-club.jpg"
import Pic2 from "/images/charity/golf-for-a-cure.jpg"
import Pic4 from "/images/charity/proud-to-support.jpg"
import Pic3 from "/images/charity/world-vision.jpg"


export default function CharityBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Pic} width={1060} height={380}
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
                                                    <Link href="/charity/breakfast">
                                                        <div className="abs-border" style={{width:"30%", float:"left"}}>
                                                            <Image width={424} height={160}
                                                                src={Pic1}
                                                                alt="Breakfast Club of Canada"
                                                                className="abs-border-img"
                                                                style={{width:"100px"}}
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h2><Link href="/charity/breakfast">
                                                        Breakfast Club of Canada</Link></h2>
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
                                                    <Link href="/charity/golf">
                                                        <div className="abs-border"  style={{width:"30%", float:"left"}}>
                                                            <Image width={424}  height={160}
                                                                src={Pic2}
                                                                alt="Golf for a Cure" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h2><Link href="/charity/golf">
                                                        Golf for a Cure</Link></h2>
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
                                                    <Link href="/charity/world">
                                                        <div className="abs-border"  style={{width:"30%", float:"left"}}>
                                                            <Image width={424}  height={160}
                                                                src={Pic3}
                                                                alt="World Vision International"
                                                                   className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h2><Link href="/charity/world">
                                                        World Vision International</Link></h2>
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
                                                    <Link href="/charity/proud">
                                                        <div className="abs-border"  style={{width:"30%", float:"left"}}>
                                                            <Image width={424}  height={160}
                                                                src={Pic4}
                                                                alt="Proud to Support" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h2><Link href="/charity/proud">
                                                        Proud to Support</Link></h2>
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