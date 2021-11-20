import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "/images/proud/proud-to-support.jpg"
import BodyTop from "../../UI/BodyTop";
import SideMeni from "./SideMeni";

export default function ProudBody()
{
    return(
        <div>
            <BodyTop title="Proud" image={Pic}/>
            <section>
                <div className="container">
                    <div className="page-without-top">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-9" style={{width:"70%", float:"left", paddingLeft:"15px"}}>
                                        <h2> Silver! for Symposium’s Beach Volleyball Team, Julie & Brandie</h2>
                                        <p> Symposium’s ambassadors of sport, Julie Gordon and Brandi Wilkerson, are making their mark
                                            in
                                            the world of beach volleyball.</p>
                                        <p>Julie and Brandi started their 2015 season by coming home with their first international
                                            medal
                                            as a team. Playing in the Cayman Islands earlier, the two earned a silver medal in the
                                            NORCECA
                                            Beach Volleyball Tournament.</p>
                                        <p>Over the next while, Julie and Brandie will be focussed on earning a berth to represent
                                            Canada
                                            in the 2016 Olympic Games.</p>
                                        <p> Throughout 2015, Julie and Brandi participated in tournaments in the following countries,
                                            continually improving and solidifying their skills as a newly formed team:</p>
                                        <ul>
                                            <li> Lucerne, Switzerland May 12-17</li>
                                            <li> Prague, Czech Republic May 20-24</li>
                                            <li> Moscow, Russia May 26-31</li>
                                            <li> Porec, Croatia June 2-7</li>
                                            <li> Stavanger, Norway June 9-14</li>
                                            <li> St. Petersburg, Florida June 16-21</li>
                                        </ul>
                                        <p>Symposium is proud to support Julie and Brandi as they pursue their dreams and proud to be
                                            associated with these two athletes who are wonderful global ambassadors of Canadian skill and
                                            sportsmanship.</p>
                                        <p>“<em>We are so thankful to be able to represent our country every day, and thankful for our amazing
                                            sponsors, supporters, fans, and family. Were thankful for each other and having the ability to
                                            support and push one another every single day</em>”. – Julie Gordon</p>
                                        <p>Join us and show your support for Julie and Brandi on social media:</p>
                                        <p><Link href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d49ea1b8bdb194bea1bea1b3bba6b0" passHref><a>[email&#160;protected]</a></Link>
                                            <Link href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="682a1a09060c010d280a1e1d0104040d1d05010d1a" passHref><a>[email&#160;protected]</a></Link>
                                            Facebook: <Link href="https://www.facebook.com/gordonwilkersonbeach" passHref>
                                                <a>http://www.facebook.com/gordonwilkersonbeach</a></Link>
                                        </p>
                                    </div>
                                    <div className="col-lg-3" style={{float:"right"}}>
                                        <div className="widget yellow-bg">
                                            <div className="header-h2">
                                                <h1 className="text-center">Charity</h1>
                                            </div>
                                            <SideMeni/>
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