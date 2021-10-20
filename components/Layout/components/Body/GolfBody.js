import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "/images/charity/golf-for-a-cure_2.jpg"

export default function GolfBody()
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
                                        <h1>Golf for a Cure</h1>
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
                                    <div className="col-lg-9" style={{width:"70%", float:"left", paddingLeft:"15px"}}>
                                        <h2>ANOTHER $50,000 RAISED at THE 11 TH ANNUAL SYMPOSIUM CHARITY GOLF TOURNAMENT!!!</h2>
                                        <p>Since 2008, we’ve been hitting the greens with guests, staff, suppliers, management and owners for the
                                            best golf tournament of the season – The Annual Symposium Charity Golf Tournament in Support of The
                                            Breast Cancer Society of Canada.</p>
                                        <p>From a small group of dedicated golfers in the early years, to more than 200 duffers in 2018,
                                            Symposium’s golf has always been to provide the most memorable day on the course with great greens,
                                            plentiful food and beverages, and a super selection of auction and raffle prizes. In return our
                                            Symposium friends have generously supported the cause.</p>
                                        <p>For the fifth year in a row, on June 11 th , 2018 Symposium golfers and contributors have made it possible
                                            to present a cheque for $50,000 to The Breast Cancer Society of Canada; bringing Symposium’s
                                            donations to over a quarter of a million dollars to date. This year’s Tournament took place at the
                                            picturesque Country Club in Woodbridge: a member of the Club Links group.</p>
                                        <p>Golfers enjoyed a delicious pre-round BBQ, 18 holes of golf, a sit-down dinner, libations and food
                                            throughout the holes, as well as a Super Silent Auction and Fantastic Raffle Prizes including the grand
                                            prize of a Trip to Italy to see the original Renaissance artworks of Symposium’s walls in the Vatican
                                            Museum and Uffizi Gallery.</p>
                                        <p>The Symposium family has a special commitment to the promotion of patient-focused research into the
                                            prevention, detection and treatment of breast cancer, because we all know that #researchmatters.
                                            Special thanks for the success of this year’s tournament goes to the main corporate sponsors including
                                            golf cart sponsors Flanagan Food Service &amp; Leadbetter Foods, as well as Sleeman Breweries, Coca-Cola,
                                            and Labatt.</p>
                                        <hr />
                                        <p>The Breast Cancer Society of Canada is a registered not-for-profit charitable organization. Donations to
                                            the Society can be made online at <Link href="http://www.bcsc.ca"  >http://www.bcsc.ca</Link> or by calling <Link href="tel:1-800-567-8767">1-800-567-8767</Link></p>
                                    </div>
                                    <div className="col-lg-3" style={{float:"right"}}>
                                        <div className="widget yellow-bg">
                                            <div className="header-h2">
                                                <h1 className="text-center">Charity</h1>
                                            </div>
                                            <ul className="menu-categories">
                                                <Link href="/charity/breakfast" className="link-charity ">Breakfast Club of Canada</Link>
                                                <br></br>
                                                <Link href="/charity/golf" className="link-charity ">Golf for a Cure</Link>
                                                <br></br>
                                                <Link href="/charity/world" className="link-charity ">World Vision International</Link>
                                                <br></br>
                                                <Link href="/charity/proud" className="link-charity active">Proud to Support</Link>
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