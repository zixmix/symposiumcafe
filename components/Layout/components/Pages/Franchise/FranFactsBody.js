import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pic from "/images/franchise/franchise-facts.jpg"


export default function FranFactsBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image
                                    src={Pic} width={1060} height={380}
                                    alt="https://symposiumcafe.com/" className="img-responsive"/>
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
                                <h1>Franchise Facts Info - Symposium Cafe franchising opportunity</h1>
                                <ul>
                                    <li>Brand established in 1996</li>
                                    <li>Number of Franchise Locations: 21</li>
                                    <li>Sales Range of existing Franchise locations $1,100,000 to $2,500,000
                                        annually
                                    </li>
                                    <li>Initial Franchise Fee: $50,000 (Not included in purchase price)</li>
                                    <li>Royalties: 5%</li>
                                    <li>Advertising: 2%&nbsp;</li>
                                    <li>Estimated Total Capital Cost (build out): $625,000 - $675,000</li>
                                    <li>Estimated Other Store Opening monies needed; $85,000 - $130,000&nbsp;</li>
                                    <li>Average Restaurant Size: 95 seats indoors; 40 seats patio (3100 sq.
                                        ft.)&nbsp;</li>
                                    <li>Cash or Liquid Assets Required (unencumbered): $300,000 to $325,000&nbsp;</li>
                                    <li>Bank Financing Available Upon Approval: Up to $350,000 Small Business Loan</li>
                                    <li>Training: 3 Months for up to three individuals</li>
                                    <li>Initial Support: 10 Weeks store opening Transition Tutor full time at
                                        restaurant
                                    </li>
                                    <li>Ongoing Support: Several visits per week in first year of operation</li>
                                    <li>Number of Employees needed: 25-40 (full and part time)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}