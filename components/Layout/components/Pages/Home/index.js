import React from "react";
import Image from "next/image"
import Link from "next/link";
import {Paste, Girls, Contact, Banner, Face, Insta, Twit, Goggle, Trip, Biz, Zomato} from "/data/images"


export default function HomeBody() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-bg">
                                <h3 className="home-headings">WINE – BEER - CIDER – SELTZERS NOW AVAILABLE TO ADD TO
                                    YOUR PICK-UP
                                    ORDER</h3>
                                <div className="fullwidthbanner-container">
                                    <div className="fullwidthbanner home-slider">
                                        <ul>


                                            <li data-transition="slotfade-horizontal" data-slotamount="1"
                                                data-masterspeed="700">
                                                <Image src={Banner} width={1060} height={380}
                                                       alt="" data-bgfit="cover" data-bgposition="center center"
                                                       data-bgrepeat="no-repeat"/>
                                                <div className="tp-caption fadeout slider-purple " data-y="450"
                                                     data-x="left" data-z="550" data-hoffset="0" data-c="500"
                                                     data-voffset="0"
                                                     data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                                     data-speed="700" data-start="900"
                                                     data-easing="Power4.easeInOut" data-splitin="none"
                                                     data-splitout="none" data-elementdelay="0.1"
                                                     data-endelementdelay="0.1" data-endspeed="600">
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="tp-bannertimer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page">
                                <div className="logo">

                                </div>
                                <h2 className="text-center">Symposium Cafe Restaurant & Lounge from breakfast to dessert
                                    & from
                                    morning
                                    to midnight
                                </h2>
                                <h3 className="text-center margin-top0">Were the spot for casual, contemporary
                                    dining</h3>
                                <p>
                                    At Symposium Restaurants, theres something for everyone: eggs benedict breakfasts
                                    and late night steaks, burgers; rich, frothy
                                    cappuccinos and refreshing, ice cold beer; decadent cheesecakes desserts, and light
                                    salads. So whether
                                    its fuelling up for your day, a social lunch, family dining occasions, a business
                                    lunch or late night,
                                    weve got a local restaurant ready for you and a menu to meet your dining needs.
                                </p>
                                <p className="text-center"><strong>Early mornings to late nights - 7 days a week - Come
                                    on over and
                                    enjoy our hospitality</strong></p>

                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="abs-border">
                                            <Image src={Paste} width={333.33} height={237.83}
                                                   alt="Our menu" className="abs-border-img"/>
                                        </div>

                                        <h3 className="text-center title-h3">Our menu</h3>
                                        <p className="justify">
                                            At Symposium restaurants, theres something for everyone. With an
                                            extensive, varied menu, weve
                                            got
                                            what youre hungry for; and our team continually offers the best quality
                                            for value.
                                            Our
                                            7 Day restaurant Specials, which we introduced in 2007, were unique to
                                            the Ontario restaurant
                                            community and we’re flattered that they are now an restaurant industry
                                            norm.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="abs-border">
                                            <Image src={Girls} width={333.33} height={237.83}
                                                   alt="Get social" className="abs-border-img"/>

                                            <div className="get-social">
                                                <ul className="get-social-list">
                                                    <li>
                                                        <Link passHref
                                                              href="https://www.facebook.com/pages/The-Symposium-Cafe-Restaurants/175747402455407"
                                                        ><Image src={Face} width={32} height={32}
                                                                alt="Facebook"/></Link></li>
                                                    <li>
                                                        <Link passHref
                                                              href="https://www.instagram.com/symposiumcafe_restaurantlounge/"
                                                        ><Image
                                                            src={Insta} width={32} height={32}
                                                            alt="Instagram"/></Link></li>
                                                    <li><Link passHref href="https://twitter.com/CafeSymposium"
                                                    ><Image width={32} height={32}
                                                            src={Twit}
                                                            alt="Twitter"/></Link></li>
                                                    <li><Link passHref
                                                              href="https://plus.google.com/+symposiumcafe/about"
                                                    ><Image width={32} height={32}
                                                            src={Goggle} alt="Twitter"/></Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref
                                                              href="https://www.yelp.ca/biz/symposium-caf%C3%A9-restaurant-and-lounge-ajax-ajax"
                                                        ><Image width={32} height={32}
                                                                src={Biz} alt="Yelp"/></Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref
                                                              href="https://www.tripadvisor.ca/Restaurant_Review-g499247-d4607684-Reviews-Symposium_Cafe_Restaurant_Lounge_Ajax-Ajax_Ontario.html"
                                                        ><Image width={32} height={32}
                                                                src={Trip}
                                                                alt="Trip Advisor"/></Link></li>
                                                    <li>
                                                        <Link passHref
                                                              href="https://www.zomato.com/toronto/symposium-cafe-restaurant-lounge-ajax-gta"
                                                        ><Image width={32} height={32}
                                                                src={Zomato} alt="Zomato"/></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h3 className="text-center title-h3">Get social</h3>
                                        <p className="justify">
                                            Were passionate about what we do, and nothing makes us happier than
                                            hearing about
                                            your
                                            Symposium dining experience. From first dates to anniversaries,
                                            graduations to promotions,
                                            and
                                            all the special, memorable moments in between; share your Symposium
                                            style and find
                                            out
                                            what’s happening @cafesymposium <Link
                                            href="https://www.facebook.com/hashtag/symposiumstyle">#symposiumcafe</Link>
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <Link passHref href="about">
                                            <div className="abs-border">
                                                <Image src={Contact} width={333.33} height={237.83}
                                                       alt="Our menu" className="abs-border-img"/>
                                            </div>
                                        </Link>
                                        <h3 className="text-center title-h3">About us</h3>
                                        <p className="justify">
                                            It started with a vision. There had to be a restaurant where you could
                                            enjoy great food
                                            and
                                            drink, beautiful surroundings and superior service; it also needed to
                                            have a value
                                            component that would make it a regular affordable go-to local
                                            restaurant. So that’s how
                                            Symposium
                                            Cafe Restaurant & Lounge came to be... <Link passHref href="about">[Read
                                            more]</Link>
                                        </p>
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