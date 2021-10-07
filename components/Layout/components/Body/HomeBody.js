import React from "react";
import Image from "next/image"
import Paste from  "/public/images/home/pasta.jpg";
import Girls from "/public/images/home/girls.jpg";
import Kontakt from "/public/images/home/kontakt.jpg";

export default function HomeBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-bg">
                                <h1 className="home-headings">WINE – BEER - CIDER – SELTZERS NOW AVAILABLE TO ADD TO
                                    YOUR PICK-UP
                                    ORDER</h1>
                                <div className="fullwidthbanner-container">
                                    <div className="fullwidthbanner home-slider">
                                        <ul>


                                            <li data-transition="slotfade-horizontal" data-slotamount="1"
                                                data-masterspeed="700">
                                                <img src="https://symposiumcafe.com/images/news/collage-banner.jpg"
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
                                        <div className="tp-bannertimer"></div>
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
                                                    <Image src={Paste} alt="Our menu" className="abs-border-img"/>
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
                                                <Image src={Girls} alt="Get social" className="abs-border-img"/>

                                                <div className="get-social">
                                                        <ul className="get-social-list">
                                                            <li>
                                                                <a href="https://www.facebook.com/pages/The-Symposium-Cafe-Restaurants/175747402455407"
                                                                   ><img src="images/social-icons/fb.png"
                                                                                        alt="Facebook"/></a></li>
                                                            <li>
                                                                <a href="https://www.instagram.com/symposiumcafe_restaurantlounge/"
                                                                   ><img
                                                                    src="images/social-icons/instagram.png"
                                                                    alt="Instagram"/></a></li>
                                                            <li><a href="https://twitter.com/CafeSymposium"
                                                                   ><img
                                                                src="images//social-icons/twitter.png"
                                                                alt="Twitter"/></a></li>
                                                            <li><a href="https://plus.google.com/+symposiumcafe/about"
                                                                   ><img
                                                                src="images//social-icons/gplus.png" alt="Twitter"/></a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.yelp.ca/biz/symposium-caf%C3%A9-restaurant-and-lounge-ajax-ajax"
                                                                   ><img
                                                                    src="images/social-icons/yelp.png" alt="Yelp"/></a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.tripadvisor.ca/Restaurant_Review-g499247-d4607684-Reviews-Symposium_Cafe_Restaurant_Lounge_Ajax-Ajax_Ontario.html"
                                                                   ><img
                                                                    src="images/social-icons/trip.png"
                                                                    alt="Trip Advisor"/></a></li>
                                                            <li>
                                                                <a href="https://www.zomato.com/toronto/symposium-cafe-restaurant-lounge-ajax-gta"
                                                                   ><img
                                                                    src="images/social-icons/zomato.png" alt="Zomato"/></a>
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
                                                what’s happening @cafesymposium <a
                                                href="https://www.facebook.com/hashtag/symposiumstyle">#symposiumcafe</a>
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <a href="about">
                                                <div className="abs-border">
                                                    <Image src={Kontakt} alt="Our menu" className="abs-border-img"/>
                                                </div>
                                            </a>
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
                                                Cafe Restaurant & Lounge came to be... <a href="about">[Read
                                                more]</a>
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