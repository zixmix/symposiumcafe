import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "/images/contact/contact-us.jpg"
import BodyTop from "../../UI/BodyTop";
import FormPost from "./FormPost";

export default function ContactBody() {
    return (
        <div>
            <BodyTop title="Contact us" image={Pic}/>
            <section>
                <div className="container">
                    <div className="page-without-top">
                        <div className="row">
                            <div className="col-lg-12">

                                <h4>For Reservations - see <Link href="/locations">LOCATIONS</Link> page contact info
                                </h4>
                                <p> Questions or Comments? We’d like to hear from you…</p>
                                <p>Let us know how you enjoyed your Symposium experience by completing our
                                    <Link href="feedback" className="bold purple-text">Feedback</Link>form.
                                </p>
                                <p>If you’d like information about specific Symposium restaurant hours, telephone
                                    numbers,
                                    location maps etc., see our <Link href="locations"
                                                                      className="bold purple-text">Locations</Link>
                                    page.
                                </p>
                                <p>For additional information, take a look at the options below, and we’ll do our best
                                    to
                                    direct
                                    your inquiry to the right person.</p>
                                <p>
                                    <small>*REQUIRED FIELDS</small>
                                </p>
                                <div style={{width: '70%', float: 'left'}}>
                                    <div style={{width: "600px"}}>
                                        <div className="row" style={{width: "600px"}}>
                                            <div className="col-lg-8">
                                                <FormPost/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{width: '30%', float: 'right'}}>
                                    <div className="yellow-bg">
                                        <div className="widget contact">
                                            <div className="header-h2">
                                                <h2>Contact information</h2>
                                            </div>
                                            <h3 itemProp="name"> The Symposium Cafe Restaurant Group Corporate
                                                Office</h3>
                                            <address itemProp="location" itemScope
                                                     itemType="https://schema.org/PostalAddress">
                                                <span itemProp="streetAddress">6021 Yonge Street, Unit 475</span>
                                                <span itemProp="addressLocality">Toronto</span>,
                                                <span itemProp="addressRegion">Ontario </span>
                                                <span itemProp="postalCode">M2M 3W2</span>
                                            </address>
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