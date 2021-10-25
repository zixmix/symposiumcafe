import React from "react";
import Image from "next/image";
import Link from "next/link";
import Franchise from "/images/franchise/franchise.jpg"
import Award from "/images/franchise/award.jpg"
import Award1 from "/images/franchise/award1.jpg"
import Award2 from "/images/franchise/award2.png"
import Award3 from "/images/franchise/award3.png"
import Award4 from "/images/franchise/award4.png"
import Sym from "/images/franchise/sym.jpg"
import Sym2 from "/images/franchise/sym2.jpg"
import Desno from "/images/franchise/desno1.jpg"
import Desno1 from "/images/franchise/desno2.jpg"
import Desno2 from "/images/franchise/desno3.jpg"
import Desno3 from "/images/franchise/desno4.jpg"

export default function FranchiseBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Franchise} width={1080} height={380}
                                     alt="https://symposiumcafe.com/" className="img-responsive"/>
                                    <div className="header-image-with-text">
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
                                <div className="sub-navigation">
                                    <ul>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise"
                                                  className="active"> Franchise</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/whySymposium">Why
                                                a Symposium Franchise?
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/franchiseFacts">Franchise
                                                Facts</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/franchisingInvestment">Franchising
                                                Investment Details</Link>
                                        </li>
                                        <li>
                                            <Link  style={{padding:"8px 4px"}}
                                                   href="/franchise/currentLocation">Current
                                                Opportunities</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/contactUs">Contact
                                                us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://symposiumcafe.com/pdf/Franchisee-Success-Story.pdf"
                                   style={{position:"absolute", top:"-80px", right:"15px", background:"#5d2b66", fontSize:"32px", fontWeight:"bold", color:"#fff", padding:"5px 15px"}}>
                                    <span style={{textDecoration:"underline"}}>READ</span>: A FRANCHISE SUCCESS STORY </a>
                                <p> Symposium Cafe Restaurant & Lounge - a unique restaurant franchise opportunity
                                    - exciting and rewarding; Redefining the Cafe
                                    Experience&#8482;</p>
                                <h2>Join our Award-Winning Restaurant Franchise Team</h2>
                                <p>Awarded Canadian FRANCHISE OF THE YEAR for both
                                    <Link href="http://www.newswire.ca/news-releases/canadian-franchise-association-announces-winners-of-the-2017-awards-of-excellence-in-franchising-618221963.html"
                                    >2017</Link> and <Link href="http://campaign.r20.constantcontact.com/render?m=1118295573310&ca=d75cf609-bba6-41ce-9a8c-ce1191231a09"
                                    >2018</Link> by the Canadian Franchise Association, Symposium Cafe
                                    Restaurant & Lounge is an unique and exciting food concept: an upscale, licensed,
                                    full service restaurant chain with a menu which caters to a variety of dining
                                    categories (breakfast, brunch, burgers and much more) and includes decadent
                                    desserts, specialty coffees and signature cocktails. From early mornings to late
                                    nights, Symposium offers both indoor dining and beautifully designed patios for
                                    outdoor enjoyment.
                                </p>
                                <div className="autoplay">
                                    <div className="cfa-images" style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award} width={212} height={195}
                                             alt="Franchise Awards 2020 Special" className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images"  style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award} width={212} height={195}
                                             alt="Franchise choice 2011-2019" className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images"  style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award} width={212} height={195} alt="CFA Award Excellence"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images"  style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award1} width={212} height={195} alt="CFA Grand Prize 2017"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images"  style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award2} width={212} height={195} alt="CFA Award Excellence"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images" style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award3} width={212} height={195} alt="CFA Award Excellence"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images" style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award4}  width={212} height={195} alt="CFA Award Excellence"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="cfa-images" style={{width:"12.5%", float:"left"}}>
                                        <Image src={Award} width={212} height={195} alt="CFA Grand Prize 2017"
                                             className="img-responsive"/>
                                    </div>

                                </div>
                                <br/>
                                <div style={{float:"left"}}>
                                    <br/>
                                <p>Since 1996, Symposium Restaurants have been “Redefining the Cafe Experience” ™ by
                                    responding and adapting to consumer dining trends: setting high standards in guest
                                    focussed service and providing quality and value for the optimum dining experience.
                                </p><p>Our competitive advantage begins with a foundation of successful restaurant
                                franchises, which, along with the corporate infrastructure and support, solid
                                operational systems and enduring supplier partnerships, make the Symposium Cafe
                                Restaurant & Lounge a successful and rewarding restaurant franchise opportunity with
                                continued growth through the Ontario marketplace in both franchise and corporate stores.
                            </p>
                                </div>

                                <div className="row">
                                    <div className="franchise-list">
                                        <div style={{width:"50%", float:"left"}}>
                                        <div className="col-lg-6 " >
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4 col-xs-6" style={{width:"30%", float:"left"}}>
                                                    <Link href="/franchise/whySymposium">
                                                        <div className="abs-border-mini">
                                                            <Image src={Sym} width={151} height={100}
                                                                alt="Why a Symposium Franchise?" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8 col-sm-8 col-xs-12" style={{width:"70%", float:"right"}}>
                                                    <div className="franchise-heading">
                                                        <Link href="/franchise/whySymposium">Why a Symposium Franchise?
                                                        </Link>
                                                    </div>

                                                    <ul>
                                                        <li>Grand Prize Winner –
                                                            <Link href="https://www.newswire.ca/news-releases/canadian-franchise-association-announces-winners-of-the-2017-awards-of-excellence-in-franchising-618221963.html">2017</Link> &
                                                            <Link href="http://campaign.r20.constantcontact.com/render?m=1118295573310&ca=d75cf609-bba6-41ce-9a8c-ce1191231a09"
                                                            >2018</Link>! “Best Traditional Franchise”
                                                            awarded by the Canadian Franchise Association
                                                        </li>
                                                        <li>Franchisees’ Choice Award Winner 2011-2018 – 8 Consecutive
                                                            Years Awarded by the Canadian Franchise Associaiton
                                                        </li>
                                                        <li>Leader in expanding “upscale casual” dining with annual
                                                            “Best of” Awards including: Best Breakfast, Best Patio, Best
                                                            Atmosphere, Best Server…
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 " >
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4 col-xs-6" style={{width:"30%", float:"left"}}>
                                                    <Link href="/franchise/currentLocation">
                                                        <div className="abs-border-mini">
                                                            <Image
                                                                src={Sym2} width={151} height={100}
                                                                alt="Current Opportunities" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8 col-sm-8 col-xs-12" style={{width:"70%", float:"right"}}>

                                                        <div className="franchise-heading">
                                                            <Link href="/franchise/currentLocation">Current Opportunities</Link>
                                                        </div>

                                                    <p>Were expanding & have numerous franchise opportunities in
                                                        Ontario. With 5-7 openings in the coming year, and repeated
                                                        growth over the next 3 years, you can be part of our exciting
                                                        company plan.</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div style={{width:"50%", float:"right"}}>
                                        <div className="col-lg-6 ">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4 col-xs-6" style={{width:"30%", float:"left"}}>
                                                    <Link href="/franchise/franchiseFacts">
                                                        <div className="abs-border-mini">
                                                            <Image
                                                                src={Desno} width={151} height={100}
                                                                alt="Franchise Facts"
                                                                className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8 col-sm-8 col-xs-12" style={{width:"70%", float:"right"}}>


                                                        <div className="franchise-heading"><Link href="/franchise/franchiseFacts">Franchise Facts </Link></div>

                                                    <ul>
                                                        <li>Restaurant Brand established in 1996</li>
                                                        <li>Number of Franchise <br/> Locations: 29</li>
                                                        <li>Sales Range of existing Franchise locations $1,100,000 to
                                                            $2,100,000
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4 col-xs-6" style={{width:"30%", float:"left"}}>
                                                    <Link href="/franchise/franchisingInvestment">
                                                        <div className="abs-border-mini">
                                                            <Image
                                                                src={Desno1} width={151} height={100}
                                                                alt="Franchising Investment
                                                            Details" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8 col-sm-8 col-xs-12" style={{width:"70%", float:"right"}}>


                                                        <div className="franchise-heading">
                                                            <Link href="/franchise/franchisingInvestment">
                                                                Franchising Investment
                                                            Details </Link>
                                                        </div>

                                                    <p>Purchase of a new Turn Key Symposium Cafe Restaurant & Lounge
                                                        location ranges from $665-$730K – dependent on location</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4 col-xs-6" style={{width:"30%", float:"left"}}>
                                                    <Link href="/franchise/faq">
                                                        <div className="abs-border-mini">
                                                            <Image
                                                                src={Desno2} width={151} height={100}
                                                                alt="FAQ" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8 col-sm-8 col-xs-12" style={{width:"70%", float:"right"}}>

                                                        <div className="franchise-heading"><Link href="/franchise/faq">FAQ</Link></div>

                                                    <p> The Symposium Cafe attracts a casual dining clientele, that
                                                        appreciates a well designed restaurant, and good quality
                                                        food.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4 col-xs-6" style={{width:"30%", float:"left"}}>
                                                    <Link href="/franchise/contactUs">
                                                        <div className="abs-border-mini">
                                                            <Image
                                                                src={Desno3} width={151} height={100}
                                                                alt="Contact us" className="abs-border-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8 col-sm-8 col-xs-12" style={{width:"70%", float:"right"}}>

                                                        <div className="franchise-heading"><Link href="/franchise/contactUs">Contact us</Link></div>

                                                    <p>Our corporate office is located in North York to serve you.
                                                        Please book your
                                                        appointment at
                                                        <br/>
                                                        <Link href="tel:1-416-449-3611" className="bold purple-text">1-416-449-3611</Link>
                                                        or email
                                                        <Link href=""
                                                                className="bold purple-text">
                                                            <span className="__cf_email__"
                                                                data-cfemail="c1a8afa7ae81b2b8acb1aeb2a8b4aca2a0a7a4efa2aeac">
                                                                [email&#160;protected]
                                                            </span>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
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