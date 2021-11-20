import React from "react"
import Image from "next/image";
import Link from "next/link";
import {Symposium, Face, Biz, Trip, Zomato, Insta} from '../../../../data/images';


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
                                    <Link href="/" passHref>
                                        <a>
                                            <Image src={Symposium} width={268} height={107} alt="Symposium Cafe Restaurant Logo"/>
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
                                        <Link href="https://www.facebook.com/pages/The-Symposium-Cafe-Restaurants/175747402455407" passHref>
                                            <a>
                                                <Image src={Face} width={32} height={32} alt="Facebook"/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.yelp.ca/biz/symposium-caf%C3%A9-restaurant-and-lounge-ajax-ajax" passHref>
                                            <a>
                                                <Image src={Biz} width={32} height={32} alt="Yelp"/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.tripadvisor.ca/Restaurant_Review-g499247-d4607684-Reviews-Symposium_Cafe_Restaurant_Lounge_Ajax-Ajax_Ontario.html" passHref>
                                            <a>
                                                <Image src={Trip} width={32} height={32} alt="Trip Advisor"/>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.zomato.com/toronto/symposium-cafe-restaurant-lounge-ajax-gta" passHref>
                                            <a>
                                                <Image src={Zomato} width={32} height={32} alt="Zomato"/>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="footer-socials">
                                    <div className="col-xs-12">
                                        <div id="instaeed" className="instafeed">

                                            <Link href="https://www.instagram.com/symposiumcafe_restaurantlounge/" passHref>

                                                <a style={{color:"gold"}}>
                                                    <Image src={Insta} width={32} height={32} alt="Instagram"/>
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
                                        <Link href="/feedback" passHref>
                                            <a>Feedback</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/decor" passHref>
                                            <a>Decor</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/franchise" passHref>
                                            <a>Franchise information</a>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href="/privacy" passHref>
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
                                    <Link href="/location"  style={{color:"white"}} passHref>
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