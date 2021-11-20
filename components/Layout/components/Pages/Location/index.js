import React from "react";
import Image from "next/image";
import Pic from "/images/location/location.jpg"
import locations from "/data/location.js"
import Link from "next/link";

import BodyTop from "../../UI/BodyTop";


export default function LocationBody({locs}) {
    console.log(locs);
    return (
        <div>
            <BodyTop title="Charity" image={Pic}/>
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
                                                {/*{locs.map((ninja) => {*/}
                                                {/*    return <Link key={ninja.id}>*/}
                                                {/*        <a><h3>{ninja.name}</h3></a>*/}
                                                {/*    </Link>*/}
                                                {/*})}*/}
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

export async function getStaticProps() {
    const res = await fetch("https://my-json-server.typicode.com/zixmix/json-data-sympo/locations");
    const data = await res.json();

    console.log('aaaa');
    console.log(data);
    return {
        props: {locs: data}
    }
}
