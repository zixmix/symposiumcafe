import React from "react"
import Image from "next/image";
import Link from "next/link";
import Silka1 from "/public/images/footer/logo.png"
import Slika2 from "/public/images/footer/fb.png"
import Slika3 from "/public/images/footer/yelp.png"
import Slika4 from "/public/images/footer/trip.png"
import Slika5 from "/public/images/footer/instagram.png"
import Slika6 from "/public/images/footer/zomato.png"

export default function Footer()
{
    return(
        <div className="black-footer">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-logo centered">
                                    <Link href="/">
                                        <a>
                                            <Image src={Silka1} width={268} height={107} alt="Symposium Cafe Restaurant Logo"/>
                                        </a>
                                    </Link>
                                </div>
                                <p className="text-center">
                                    A warm and inviting atmosphere, delicious menu offerings, and superior customer
                                    service.
                                    Were the go-to destination for
                                    casual upscale dining.
                                </p>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ul className="get-social-list">
                                    <li>
                                        <Link href="https://www.facebook.com/pages/The-Symposium-Cafe-Restaurants/175747402455407">
                                            <a>
                                                <Image src={Slika2} width={48} height={48} alt="Facebook"/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.yelp.ca/biz/symposium-caf%C3%A9-restaurant-and-lounge-ajax-ajax">
                                            <a>
                                                <Image src={Slika3} width={48} height={48} alt="Yelp"/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.tripadvisor.ca/Restaurant_Review-g499247-d4607684-Reviews-Symposium_Cafe_Restaurant_Lounge_Ajax-Ajax_Ontario.html">
                                            <a>
                                                <Image src={Slika4} width={48} height={48} alt="Trip Advisor"/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.zomato.com/toronto/symposium-cafe-restaurant-lounge-ajax-gta">
                                            <a>
                                                <Image src={Slika6} width={48} height={48} alt="Zomato"/>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="footer-socials">
                                    <div className="col-xs-12">
                                        <div id="instaeed" className="instafeed">
                                            <Image src={Slika5} width={48} height={48} alt="Instagram"/>
                                            <Link href="https://www.instagram.com/symposiumcafe_restaurantlounge/">
                                                <a style={{color:"gold"}}>
                                                    <span>#symposiumcafe</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-title">More...</div>
                                <ul className="footer-list">
                                    <li>
                                        <Link href="/feedback">
                                            <a>Feedback</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/decor">
                                            <a>Decor</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://symposiumcafe.com/franchise-opportunities">
                                            <a>Franchise information</a>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href="https://symposiumcafe.com/privacy">
                                            <a>Privacy Policy</a>
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-title">Contact</div>
                                <ul className="footer-contact-us">
                                    <li>
                                        <span className="white">Mailing Address:</span>
                                        6021 Yonge Street Unit 475
                                        Toronto, Ontario, Canada M2M3W2

                                    </li>
                                </ul>
                                <h4 style={{color:"white"}}>See
                                    <Link href="/locations"  style={{color:"white"}} >
                                    <a>
                                        LOCATIONS
                                    </a>
                                    </Link>page to contact your local Symposium
                                </h4>
                            </div>
                            <div className="col-lg-12">
                                <p>
                                    <small className="smaller">All information and prices subject to restrictions and
                                        change. Ask
                                        your server for details.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>



    )
}