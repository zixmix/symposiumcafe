import React from "react";
import Image from "next/image";
import Lokacija from "/images/location/location.jpg"

export default function LocationBody()
{
    return(
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
                                        <h2> Find your local Ontario Symposium Cafe Restaurant</h2>
                                        <p> Symposium restaurant guests always comment on how they enjoy having a
                                            unique, local restaurant in
                                            their
                                            neighbourhood, and are pleasantly surprised when they discover there are
                                            over 28
                                            Symposium
                                            Cafe Restaurant & Lounge locations in the Southern Ontario area. Since 1996
                                            we’ve been
                                            “Redefining the Cafe Experience ™” with our customer focussed and value
                                            driven restaurant brand.
                                            From
                                            breakfasts to late night dining, coffees to cocktails, Symposium restaurants
                                            have brought the european cafe experience to a new level with our extensive
                                            menu, great wine lists, and special
                                            daily
                                            features; all enjoyed within our one-of-a-kind stone art walls that are so
                                            special that
                                            they
                                            have Trade Dress protection from Trademarks Canada.
                                        </p>
                                        <p>
                                            With new restaurants under construction throughout Ontario, there’s sure to
                                            be a
                                            local Symposium
                                            Cafe Restaurant & Lounge opening soon in your neighbourhood. Be sure to
                                            visit our
                                            <a href="">Franchise</a>
                                            development link for information on our rewarding restaurant franchise
                                            opportunities.
                                        </p>
                                    </div>
                                </div>
                                <div className="locations-list">
                                    <div className="row row-eq-height">
                                        <div className="col-lg-8">
                                            <ul className="three-columns-list">
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/ajax-restaurants">Ajax</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/alliston-restaurants">Alliston</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/ancaster-restaurants">Ancaster</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/aurora-restaurants">Aurora</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/barrie-restaurants">Barrie</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/bolton-restaurants">Bolton</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/brantford-restaurants">Brantford</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/cambridge-restaurants">Cambridge</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/cobourg-restaurants">Cobourg</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/georgetown-restaurants">Georgetown</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/guelph-restaurants">Guelph</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/keswick-restaurants">Keswick</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/lindsay-restaurants">Lindsay</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/markham-restaurants">Markham</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/milton-restaurants">Milton</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/mississauga-south-restaurants">Mississauga
                                                        South</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/oakville-restaurants">Oakville</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/oshawa-restaurants">Oshawa</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/stoney-creek-restaurants">Stoney
                                                        Creek</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/thornhill-restaurants">Thornhill</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/waterdown-restaurants">Waterdown</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/waterloo-erbsville-restaurants">Waterloo
                                                        Erbsville</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/whitby-restaurants">Whitby</a>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/locations/woodbridge-restaurants">Woodbridge</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 yellow-bg" id="opening-soon">
                                            <div className="yellow-bg">
                                                <h3>Opening soon</h3>
                                                <ul className="opening-soon-list">
                                                </ul>
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

    )
}