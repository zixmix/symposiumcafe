import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pic from "/images/about/about.jpg"
import {SymposiumCafeLondon, UniqueDecor, Beverages, Support, Cocktail} from "../../../../../data/images";

import BodyTop from "../../UI/BodyTop";

export default function AboutBody()
{
    return(
        <div>
            <BodyTop title="Charity" image={Pic}/>
            <section>
                <div className="container">
                    <div className="page-without-top">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-us">
                                    <h2 className="bold">About Symposium Cafe Restaurants - your local restaurant chain </h2>
                                    <p>You want to know all about us? Gladly. We’re proud to share the Symposium story.</p>

                                    <h3>Our Start</h3>
                                    <div className="image-in-paragraph right">

<span className="abs-border">
<Image src={SymposiumCafeLondon} alt="Outside Symposium Cafe Restaurant" width={300} height={117}
     className="img-responsive abs-border-img"/>
</span><br/>
                                        <span className="text">Symposium Cafe London</span>
                                    </div>
                                    <p>
                                        The first Symposium Cafe Restaurant opened in London, Ontario over 20 years ago and quickly
                                        became the
                                        go-to dessert place for date night and late night and a favourite local restaurant in
                                        London. But our customers wanted more. So, we
                                        kept
                                        our guest-focused full service and unique decor, but expanded the menu to include
                                        breakfast,
                                        lunch, dinner and late night meals - along with full bar service.
                                        Today, with a menu that
                                        includes burgers, steak, pasta, and seafood, we have something for everyone, and menu items
                                        for
                                        all
                                        dining periods. We’re definitely #notjustdesserts.</p>
                                    <div className="line-dashed"></div>

                                    <h3>
                                        Unique Restaurant Decor
                                    </h3>
                                    <div className="image-in-paragraph left" style={{float:"left"}}>
                                        <span className="abs-border" >
                                            <Image src={UniqueDecor}  width={100} height={150} alt="Sappho renaissance art" className="img-responsive abs-border-img"/>
                                        </span>
                                        <br/>
                                        <span className="text">Decor</span>
                                    </div>
                                    <p>
                                        Walk into Symposium Cafe Restaurant & Lounge and you’ll be wowed by the distinctive inviting
                                        decor
                                        and
                                        unique atmosphere. Our trademark stone-art walls and beautiful Renaissance inspired
                                        frescoes
                                        are
                                        one-of-a-kind, and with their timeless quality provide a distinctive backdrop for any
                                        restaurant dining
                                        experience; from burgers & beer to salmon & sauvignon. We’re what you’d call upscale
                                        casual-
                                        special enough for birthday celebrations, engagements, or business meetings, and just as
                                        fitting
                                        for quick take-out after work, dinner before a movie, or appetizers at the bar.
                                    </p>

                                    <div className="line-dashed"></div>
                                    <h3>
                                        Wine, Beer, Cocktails & More
                                    </h3>
                                    <div className="image-in-paragraph right">
<span className="abs-border">
<Image
    src={Beverages} width={216} height={167}
    alt="Milkshakes fresh fruit" className="img-responsive abs-border-img"/>
</span><br/>
                                        <span className="text">Specialty Beverages</span>
                                    </div>
                                    <p>Like traditional european cafes, all Symposium restaurants are fully licensed with a full
                                        range of
                                        wines and spirits. Our selected vintages include exclusive Owner’s Cellar wines which
                                        are
                                        not
                                        only great wines, but also great value. For beer drinkers, we offer over 10 draught
                                        beers,
                                        both
                                        domestic and imported. Symposium guests also enjoy a variety of cocktails and martinis,
                                        and
                                        when
                                        patio season opens, relax with a cold drink on our comfortable outdoor patios.
                                    </p>

                                    <div className="line-dashed"></div>
                                    <h3>
                                        From Breakfast to Late Night Dining
                                    </h3>
                                    <p> We love reading customer restaurant reviews describing Symposium as their “little
                                        secret” or
                                        “unknown gem” or “favourite local restaurant”, but with over 21 restaurants, it’s obviously
                                        our guest-focused brand that
                                        makes
                                        us a favourite neighbourhood restaurant and an award winner in local communities.
                                        Guest-focused
                                        means our kitchens are open from 8am-12am (breakfast, brunch, lunch, dinner + late night
                                        dining), 364 days a year to fit your schedule. We also
                                        respond
                                        to our customer needs through our daily dining features and meal promotions.</p>
                                    <div className="line-dashed"></div>
                                    <h3>
                                        Restaurant Features & Promotions
                                    </h3>
                                    <p> 7 days a week Symposium restaurants offer select menu items for feature prices including $5
                                        Burgers,
                                        $48
                                        Dinner for Two, and 33% off Appetizers. Our 7 Day restaurant Specials were the first of
                                        their kind
                                        and
                                        continue to be customer favourites. Check out all our offerings on the
                                        <Link href="/menu" passHref><a>Our Menu</a></Link>
                                        page of our website.
                                    </p>
                                    <div className="promotions-seven">
                                        <h2>Daily Symposium Specials & Features </h2>
                                        <div className="content-of-day" id="full-width"></div>
                                    </div>
                                    <div className="line-dashed"></div>
                                    <div className="image-in-paragraph left"  style={{float:"left"}}>
<span className="abs-border">
<Image src={Support} alt="Symposium Golf Tournament Index" width={250} height={163}
     className="img-responsive abs-border-img"/>
</span><br/>
                                        <span className="text">Symposium Index Support</span>
                                    </div>
                                    <h3>
                                        Symposium Support
                                    </h3>
                                    <p>
                                        Giving back to the neighbourhood has always been important to us, and the Symposium
                                        Index
                                        division supports local Breakfast Club Canada programs in Symposium communities.These
                                        programs
                                        work due to the efforts of generous volunteers and $percentages from our 7 Day Specials
                                        help
                                        fund local schools.
                                        In addition we support Breast Cancer Research - through our Annual Golf
                                        Tournament - World Vision and Canadian athletes.</p>
                                    <div className="clear"></div>
                                    <div className="line-dashed"></div>
                                    <br/>

                                    <br/>
                                    <br/>
                                    <h3 className="bold">
                                        Come on Over
                                    </h3>
                                    <p> So that’s what we’re about. We’re glad you’ve gotten to know us and we look forward to
                                        your
                                        next
                                        visit. Whether it’s sharing appetizers with friends, family dining, special occasions,
                                        or
                                        business lunches; we’ve got something for you - 7 days a week - from early mornings to
                                        late
                                        nights.</p>
                                    <p>We’re proud to be your “go-to” local restaurant for quality, casual dining, and invite you to
                                        experience
                                        the
                                        warmth and hospitality of our Symposium style.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="location-maps">
                                        <div className="col-lg-4">
                                            <h3> Google 360 Tour</h3>
                                            <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" width={333} height={365}
                                                    src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sca!4v1442861684594!6m8!1m7!1sXsvO6HZwVCIAAAQIL2Mndg!2m2!1d43.88314486173313!2d-79.01727133654629!3f166!4f0!5f0.7820865974627469"></iframe>
                                        </div>
                                        <div className="col-lg-4">
                                            <h3>Symposium Video</h3>
                                            <iframe src="https://www.youtube.com/embed/o99jiw4XSSI" frameBorder="0" width={333} height={365}
                                                    allowFullScreen></iframe>
                                        </div>
                                        <div className="col-lg-4">
                                            <h3>Photo Gallery</h3>
                                            <Link href="/galery" passHref>
                                                <div className="abs-border">
                                                    <Image src={Cocktail} alt="Gallery image" width={333} height={365}
                                                         className="abs-border-img height365"/>
                                                </div>
                                            </Link>
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