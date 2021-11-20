import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pic from "/images/franchise/current-opportunities.jpg"


export default function FranCurrentLocBody()
{
    return(
        <div>
            <section>
                <div className ="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Pic} width={1060} height={380}
                                     alt="https://symposiumcafe.com/" class="img-responsive"/>
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
                                                  className="active" passHref> Franchise</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                               href="/franchise/whySymposium" passHref>Why
                                                a Symposium Franchise?
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                               href="/franchise/franchiseFacts" passHref>Franchise
                                                Facts</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                               href="/franchise/franchisingInvestment" passHref>Franchising
                                                Investment Details</Link>
                                        </li>
                                        <li>
                                            <Link  style={{padding:"8px 4px"}}
                                               href="/franchise/currentLocation" passHref>Current
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
                                <h1> Franchising Opportunities - Current and Upcoming</h1>
                                <p>Symposium Cafe Restaurant & Lounge is quickly becoming the leader in the casual, upscale
                                    dining restaurant sector, and we are expanding to bring the Symposium experience into
                                    more
                                    and more Ontario communities. At present, 5-7 new locations are forecast within the next
                                    year, with an additional 5-7 locations opening annually.</p>
                                <ul className="bigger-list-font">


                                    <li>
                                        <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-innisfill">Innisfill</Link>
                                    </li>

                                    <li>
                                        <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-bradford">Bradford</Link>

                                    </li>

                                </ul>
                                <p>In addition to the above locations, Symposium Cafe Restaurant & Lounge is also looking
                                    for
                                    interested individuals to effectively represent the Symposium brand in the market areas
                                    below as well. <Link href="https://symposiumcafe.com/franchise-opportunities/contact-us">Contact
                                        us for full information on these franchise locations</Link>
                            </p>
                            <ul className="three-franchise-new-locations">

                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-belleville">Belleville</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-brooklin">Brooklin</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-cobourg">Cobourg</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-hamilton">Hamilton</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-huntsville">Huntsville</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-kingston">Kingston</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-kitchener">Kitchener</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-north-bay">North
                                        Bay</Link></li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-orangeville">Orangeville</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-oshawa">Oshawa</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-ottawa">Ottawa</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-peterborough">Peterborough</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-pickering">Pickering</Link>
                                </li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-st-catharines">St
                                        Catharines</Link></li>
                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-stratford">Stratford</Link>
                                </li>

                                <li>
                                    <Link href="https://symposiumcafe.com/franchise-opportunities/location-for-sale-woodstock">Woodstock</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
</section>
        </div>

    )
}