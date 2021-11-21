import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pic from "/images/franchise/invest.jpg"


export default function FranInvestBody()
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
                                            {/*<Link style={{padding:"8px 4px"}}*/}
                                            {/*      href="/franchise/contactUs" passHref>Contact*/}
                                            {/*    us</Link>*/}
                                        </li>
                                    </ul>
                                </div>
                                <h1>Restaurant Franchise Investment Details</h1>
                                <p> Purchase of a new Turn Key Symposium Cafe restaurant ranges from $625,000 to
                                    $675,000
                                    depending on the size of the restaurant, the amount of Leasehold Inducements
                                    available from
                                    Landlord, the existing infrastructure at the restaurant, and the availability of
                                    subtrades and
                                    materials. Franchise Fee of $50,000 not included in price. </p>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Costs over and above purchase of restaurant</th>
                                        <th>Low range</th>
                                        <th>High range</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Rent Deposit</td>
                                        <td>7500</td>
                                        <td>15000</td>
                                    </tr>
                                    <tr>
                                        <td>Utility Deposit</td>
                                        <td>1500</td>
                                        <td>4450</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Deposit</td>
                                        <td>250</td>
                                        <td>400</td>
                                    </tr>
                                    <tr>
                                        <td>Inventory</td>
                                        <td>18000</td>
                                        <td>25000</td>
                                    </tr>
                                    <tr>
                                        <td>Office Supplies</td>
                                        <td>500</td>
                                        <td>700</td>
                                    </tr>
                                    <tr>
                                        <td>Legal Fees to close the purchase</td>
                                        <td>2500</td>
                                        <td>7500</td>
                                    </tr>
                                    <tr>
                                        <td>Government licences (Liquor, Business, etc)</td>
                                        <td>1500</td>
                                        <td>2200</td>
                                    </tr>
                                    <tr>
                                        <td>Opening Advertising</td>
                                        <td>10000</td>
                                        <td>15000</td>
                                    </tr>
                                    <tr>
                                        <td>Staff Hiring cost (want ads, etc)</td>
                                        <td>1000</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <td>Staff Training actual labor Costs</td>
                                        <td>7500</td>
                                        <td>15000</td>
                                    </tr>
                                    <tr>
                                        <td>Staff Training - food costs</td>
                                        <td>1500</td>
                                        <td>2500</td>
                                    </tr>
                                    <tr>
                                        <td>Working Capital Start up</td>
                                        <td>25000</td>
                                        <td>40000</td>
                                    </tr>
                                    <tr>
                                        <td>Corporation Set up fees</td>
                                        <td>750</td>
                                        <td>1250</td>
                                    </tr>
                                    <tr>
                                        <td>Small Business Loan Fee (if Financing Req.)</td>
                                        <td>2500</td>
                                        <td>3500</td>
                                    </tr>
                                    <tr>
                                        <td>Opening Marketing materials</td>
                                        <td>5000</td>
                                        <td>6000</td>
                                    </tr>
                                    <tr>
                                        <td>Travel and Accommodation Costs</td>
                                        <td>0</td>
                                        <td>5000</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}