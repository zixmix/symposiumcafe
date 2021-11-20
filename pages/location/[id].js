import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Lokacija from "../../images/location/location.jpg";
import Pic1 from "/images/location_slug/skip-the-dishes.png";
import Pic2 from "/images/location_slug/uber-eats.png";
import Pic3 from "/images/location_slug/doordash.png";
import Face from "/images/social-icons/fb.png";
import Insta from "/images/social-icons/instagram.png";
import Trip from "/images/social-icons/trip.png";
import Yelp from "/images/social-icons/yelp.png";
import Twit from "/images/social-icons/twitter.png";
import Zomato from "/images/social-icons/zomato.png";
import Pic4 from "/images/social-icons/full_service_small.png";
import Pic5 from "/images/social-icons/outer_patio_small.png";
import Pic6 from "/images/social-icons/full_bar_small.png";
import Pic7 from "/images/social-icons/parking_small.png";
import Pic8 from "/images/social-icons/wheelchair_small.png";
import Pic9 from "/images/social-icons/free_wifi_small.png";
import Pic10 from "/images/social-icons/casual_attire-new_small.png";
import Bottom from "/images/location_slug/bottom.jpg"

export const getStaticPaths = async () =>{
    const res = await fetch("https://my-json-server.typicode.com/zixmix/json-data-sympo/locations");
    const data = await res.json();

    const paths = data.map(location=>{
        return{
            params: {id: location.id.toString()},
        }
    })
    return{
        paths,
        fallback:false
    }
}
function mojaFunkcija(url){
    return '1';
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://my-json-server.typicode.com/zixmix/json-data-sympo/locations/"+ id);
    const rest = mojaFunkcija("https://my-json-server.typicode.com/zixmix/json-data-sympo/locations/"+ id);
    const data = await res.json();
    return{
        props: {location: data}
    }
}

export default function Details({location}){
    return(
        <>
            <Head>
                <title>{location.name}</title>
            </Head>
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Lokacija} width={1060} height={380}
                                       alt="https://symposiumcafe.com/" className="img-responsive"/>
                                <div className="header-image-with-text">
                                    <h1>Locations</h1>
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
                                <div className="locations-content">
                                    <div className="locations-content-text">
                                        <div style={{float:"left", width:"68%"}}>
                                        <h1> {location.content.title}</h1>
                                        <p> {location.content.description}
                                        </p>
                                        <h2>{location.content.subtitle}</h2>
                                        <ul className="location-for-you-list">
                                            <li> Full service Breakfast/Brunch menu: Omelettes, Waffles, French Toast,
                                                Freshly squeezed
                                                juices
                                            </li>
                                            <li> Lunch menu: burgers, salads, soup, appetizers, sandwiches, and full
                                                breakfast menu til
                                                4 pm
                                            </li>
                                            <li> Dinner menu: steaks, seafood, pastas, rice bowls and unique
                                                appetizers
                                            </li>
                                            <li> Fully licensed lounge: specialty cocktails, over 30 martini options, 12
                                                beer on tap, 34
                                                varieties of wine, specialty coffee beverages.
                                            </li>
                                            <li> Restaurant open early mornings and late nights</li>
                                            <li> Late Night Kitchen & Dining: full restaurant menu available until
                                                closing including
                                                burgers, steaks, seafood
                                            </li>
                                            <li> Business meetings and staff functions party menus</li>
                                            <li> Award winning restaurant concept</li>
                                            <li> Large scenic outdoor restaurant patio</li>
                                            <li> Good selection of vegetarian menu options</li>
                                            <li> Extensive menu selection of desserts: cakes, freshly made waffles,
                                                ice-cream, crepes
                                            </li>
                                        </ul>
                                        </div>
                                        <div style={{float:"left", width:"2%"}}>

                                        </div>
                                        <div className="location-content-widget" style={{float:"right", width:"30%"}}>
                                            <div className="">
                                                <div className="yellow-bg">
                                                    <a className="header-h2"
                                                       href="https://order2.silverwarepos.com/app/SymposiumCafe#!/stores"
                                                       style={{background: "#b52b27",
                                                        padding:"10px 10px",
                                                        color:"#fff", display:"table",
                                                        fontSize:"18px",
                                                        margin: "0 auto 20px auto",
                                                        borderRadius: "4px", textAlign:"center", width:"300px", height:"20px"
                                                        }}>
                                                        ORDER & PAY ONLINE CURBSIDE PICK-UP
                                                    </a>
                                                    <div className="delivery-location">
                                                        <div className="header-h2"
                                                             style={{margin: "0 auto", display: "table"}}>
                                                            <h2 style={{padding: "0 0 15px", margin: "0 0 15px", float: "left",display:"inline-block",fontWeight: "700",borderBottom: "1px solid #dcb77c"}}>Symposium Delivery</h2>
                                                        </div>
                                                        <div className="delivery-location-logos"
                                                             style={{display: "table", margin:"0 auto"}}>
                                                            <a href="https://www.skipthedishes.com/symposium-ajax"
                                                               style={{display: "table-cell", textAlign: "right"}}>
                                                                <Image src={Pic1} width={80} height={31.33}
                                                                     style={{maxWidth: "80px", marginRight:"8px"}}
                                                                     alt="Symposium Delivery via Skip the dishes"/></a>
                                                            <br/>
                                                                <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-ajax/6SwPLiANR3i8vGomu0Jleg/"
                                                                   style={{display: "table-cell", textAlign: "left"}}>
                                                                    <Image src={Pic2} width={80} height={31.33}
                                                                         style={{maxWidth: "80px",  marginLeft:"8px"}}
                                                                         alt="Symposium Delivery via Uber eats"/></a>
                                                                <a href="https://www.doordash.com/en-CA/store/symposium-cafe-restaurant-ajax-1019563/"
                                                                   style={{display: "table-cell", textAlign: "left"}}>
                                                                    <Image src={Pic3} width={80} height={31.33}
                                                                         style={{maxWidth: "75px",  marginLeft:"8px"}}
                                                                         alt="Symposium Delivery via DoorDash"/></a>
                                                        </div>
                                                    </div>
                                                    <div className="widget">
                                                        <div className="header-h2">
                                                            <h2 style={{textAlign:"center"}}>Restaurant Info <br/> {location.content.name}</h2>
                                                        </div>
                                                        <div>
                                                            <span>Symposium Cafe Restaurant & Lounge</span>
                                                            <address>
                                                                <span>{location.address}</span>
                                                                <br/>
                                                                <strong>Telephone:</strong> <a
                                                                href="tel:{location.phone}">{location.phone}</a><br/>
                                                                <strong>Email:</strong>
                                                                <a>
                                                                    <span className="__cf_email__">{location.email}
                                                                    </span>
                                                                </a>
                                                            </address>
                                                            <iframe style={{
                                                                padding:"10px 10px",
                                                                color:"#fff", display:"table",
                                                                fontSize:"18px",
                                                                margin: "0 auto 20px auto",
                                                                borderRadius: "4px", textAlign:"center"}} className="location-map" frameBorder="0"
                                                                    scrolling="no" marginHeight="0" marginWidth="0"
                                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.672177535187!2d-79.0187647208632!3d43.88334333820645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xd49417ded8abbac5!2sSymposium+Caf%C3%A9+Restaurant+%26+Lounge+-+Ajax!5e0!3m2!1sen!2sus!4v1450008202137"></iframe>
                                                        </div>
                                                        <div className="header-h2">
                                                            <h2>Restaurant Hours</h2>
                                                        </div>
                                                        <time dateTime="Mo, Tu, We, Th, Fr, Su, Sa 08:00-23:00">Daily
                                                            <span>08:00 am - 11:00 pm</span></time>
                                                        <br/>
                                                            <div className="header-h2">
                                                                <h2>Follow us</h2>
                                                            </div>
                                                            <ul className="get-social-list" style={{
                                                                padding:"10px",
                                                                color:"#fff", display:"table",
                                                                fontSize:"18px",
                                                                margin: "0 auto 0px auto",
                                                                borderRadius: "4px", textAlign:"center"}}>
                                                                <li>
                                                                    <Link href={location.facebook}>
                                                                        <Image src={Face} width={32} height={32} alt="Facebook"/>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <a href={location.insta}>
                                                                        <Image src={Insta} width={32} height={32} alt="Facebook"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={location.twiter}>
                                                                        <Image src={Twit} width={32} height={32} alt="Twitter"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={location.yelp}>
                                                                        <Image src={Yelp} width={32} height={32} alt="Yelp"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={location.trip}>
                                                                        <Image src={Trip} width={32} height={32} alt="Trip Advisor"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={location.zomato}>
                                                                        <Image src={Zomato} width={32} height={32} alt="Zomato"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <br/>
                                                                <div className="header-h2">
                                                                    <h2>
                                                                        Restaurant Services
                                                                    </h2>
                                                                </div>
                                                                <div className="get-social-list">
                                                                    <ul style={{
                                                                        padding:"10px",
                                                                        color:"#fff", display:"table",
                                                                        fontSize:"18px",
                                                                        margin: "0 auto 0px auto",
                                                                        borderRadius: "4px", textAlign:"center"}}>
                                                                        <li><Image
                                                                            src={Pic4} width={32} height={32}
                                                                            alt="Full service" data-toggle="tooltip"
                                                                            data-placement="top" title="Full service"/>
                                                                        </li>
                                                                        <li><Image
                                                                            src={Pic5} width={32} height={32}
                                                                            alt="Outdoor patio" data-toggle="tooltip"
                                                                            data-placement="top" title="Outdoor patio"/>
                                                                        </li>
                                                                        <li><Image
                                                                            src={Pic6} width={32} height={32}
                                                                            alt="Full bar" data-toggle="tooltip"
                                                                            data-placement="top" title="Full bar"/></li>
                                                                        <li><Image
                                                                            src={Pic7} width={32} height={32}
                                                                            alt="Parking" data-toggle="tooltip"
                                                                            data-placement="top" title="Parking"/></li>
                                                                        <li><Image
                                                                            src={Pic8} width={32} height={32}
                                                                            alt="Wheelchair Access"
                                                                            data-toggle="tooltip" data-placement="top"
                                                                            title="Wheelchair Access"/>
                                                                        </li>
                                                                        <li><Image
                                                                            src={Pic9} width={32} height={32}
                                                                            alt="Free Wireless" data-toggle="tooltip"
                                                                            data-placement="top" title="Free Wireless"/>
                                                                        </li>
                                                                        <li><Image
                                                                            src={Pic10} width={32} height={32}
                                                                            alt="Casual Attire" data-toggle="tooltip"
                                                                            data-placement="top" title="Casual Attire"/>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <br/>
                                                                    <div className="header-h2">
                                                                        <h2>
                                                                            Accepted payments
                                                                        </h2>
                                                                    </div>
                                                                    <div className="paymentAccepted"> Cash and all major
                                                                        credit cards
                                                                        accepted: <br/>
                                                                            <strong>VISA</strong>, <strong>MC</strong>, <strong>AMEX</strong> &
                                                                            <strong>Debit</strong>
                                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="location-maps" >
                                            <div className="col-lg-4">
                                                <h3>Symposium Google 360 Tour
                                                    <br/>
                                                    Alliston Ontario Restaurant
                                                </h3>

                                                <iframe style={{height:"365px"}} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                                        src={location.content.map}></iframe>
                                                <div className="location-box-text margin-top-5">Food restaurant near me
                                                    - cocktail bar, lounge, patio dining
                                                </div>

                                            </div>
                                            <div className="col-lg-4"><h3>Symposium Video <br/>
                                                Alliston Ontario Restaurant</h3>
                                                <iframe style={{height:"365px"}} src={location.content.youtube} frameBorder="0"
                                                        allowFullScreen></iframe>
                                                <div className="location-box-text margin-top-5">Alliston Ontario family
                                                    restaurant near me
                                                </div>
                                            </div>
                                            <div className="col-lg-4"><h3>Photo Gallery <br/>
                                                Alliston Ontario Restaurant</h3> <a href="/photos">
                                                <div className="abs-border"><Image src={Bottom}
                                                                                 alt="Gallery of Location"
                                                                                 className="abs-border-img"/></div>
                                            </a>
                                                <div className="location-box-text">Food, breakfast, desserts - a great
                                                    restaurants near me choice
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="location-socials">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h2>Symposium Cafe Restaurant Reviews ({location.content.name})</h2>
                                                    <strong>
                                                        Heres what our guests are saying about their Symposium Ancaster experience:
                                                    </strong>
                                                    <ul className="locations-reviews-list">
                                                        <li>A new restaurant on the far end of Ancaster. Worth the
                                                            drive
                                                        </li>
                                                        <li>The date night special is amazing value and will keep us
                                                            coming back
                                                        </li>
                                                        <li> Service is good Food is excellent value Enjoyable
                                                            experience
                                                        </li>
                                                        <li> Best Burgers</li>
                                                        <li> I love the ambience of the restaurant and the decor
                                                        </li>
                                                        <li> Huge menu friendly staff</li>
                                                        <li> Great daily specials. We especially love the
                                                            desserts.
                                                        </li>
                                                        <li> Food was excellent and the beer was cold</li>
                                                        <li> The food is great the restaurant atmosphere is lovely
                                                        </li>
                                                        <li> They have a very good wine list as well as all the
                                                            mixed drinks
                                                        </li>
                                                        <li> Decor is very inviting..Staff is very attentive</li>
                                                        <li> Really good cake and desserts</li>
                                                        <li> Food was well prepared and presentation was excellent
                                                        </li>
                                                    </ul>
                                                    <Link href={"/location"}>Back</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
        </>
    )
}