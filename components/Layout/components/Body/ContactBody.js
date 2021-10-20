import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "/images/contact/contact-us.jpg"

export default function ContactBody()
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
                                    <h1>Contact Us</h1>
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

                            <h4>For Reservations - see <Link href="/locations">LOCATIONS</Link> page contact info </h4>
                            <p> Questions or Comments? We’d like to hear from you…</p>
                            <p>Let us know how you enjoyed your Symposium experience by completing our
                                <Link href="feedback" className="bold purple-text">Feedback </Link>form.
                            </p>
                            <p>If you’d like information about specific Symposium restaurant hours, telephone numbers,
                                location maps etc., see our <Link href="locations"
                                                               className="bold purple-text">Locations</Link>
                                page.
                            </p>
                            <p>For additional information, take a look at the options below, and we’ll do our best to
                                direct
                                your inquiry to the right person.</p>
                            <p>
                                <small>*REQUIRED FIELDS</small>
                            </p>
                        <div style={{width:"600px"}}>
                            <div className="row" style={{width:"600px"}}>
                                <div className="col-lg-8" >
                                    <form method="POST" action="https://symposiumcafe.com/send-contact"
                                          className="contact-form">
                                        <fieldset>
                                            <legend className="legend">Please fill out this form completely</legend>
                                            <div className="">
                                                <div className="form-group">
                                                    <div className="col-md-8">
                                                        <label htmlFor="name">Name<sup>*</sup></label>
                                                        <input type="text" name="name" className="form-control"
                                                               id="name" placeholder="Name..." value=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email<sup>*</sup></label>
                                                        <input type="text" name="email" className="form-control"
                                                               id="email" placeholder="example@email.com" value=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-8">
                                                        <label htmlFor="phone_number">Phone number:</label>
                                                        <input type="text" name="phone_number" className="form-control"
                                                               placeholder="Phone number..." value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row margin-top8">
                                                    <div className="col-lg-12">
                                                        <label htmlFor="department">Department <sup>*</sup></label>
                                                        <select name="department" id="department"
                                                                className="form-control" required="required">
                                                            <option value="" selected="selected">Choose...</option>
                                                            <option value="0">Head Office</option>
                                                            <option value="1">Menu Inquiries</option>
                                                            <option value="2">Donation / Charity Requests</option>
                                                            <option value="3">Employment Opportunities</option>
                                                            <option value="4">Marketing</option>
                                                            <option value="5">Franchising</option>
                                                            <option value="6">Other Requests</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row margin-top10">
                                                    <div className="col-lg-12">
                                                        <label htmlFor="comments">Comments<sup>*</sup></label>
                                                        <textarea name="comments" id="comments" className="form-control"
                                                                  rows="10" placeholder="Comments?"></textarea>
                                                    </div>
                                                    <div className="col-md-6">



                                                        <div className="g-recaptcha"
                                                             data-sitekey="6LdRfxcUAAAAAFua-Aw_1RNWi6W0z9wPw6QSZ6g9"></div>
                                                        <noscript>
                                                            <div style={{width: "302px", height: "352px"}}>
                                                                <div
                                                                    style={{width: "302px", height: "352px", position: "relative"}}>
                                                                    <div
                                                                        style={{width: "302px", height: "352px", position: "absolute"}}>
                                                                        <iframe
                                                                            src="https://www.google.com/recaptcha/api/fallback?k=6LdRfxcUAAAAAFua-Aw_1RNWi6W0z9wPw6QSZ6g9"
                                                                            frameBorder="0" scrolling="no"
                                                                            style={{width: "302px", height:"352px", borderStyle: "none"}}>
                                                                        </iframe>
                                                                    </div>
                                                                    <div style={{width: "250px", height: "80px", position: "absolute", borderStyle: "none", bottom: "21px", left: "25px", margin: "0", padding: "0", right: "25px"}}>
        <textarea id="g-recaptcha-response" name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{width: "250px", height: "80px", border: "1px solid #c1c1c1", margin: "0", padding: "0", resize: "none"}}></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </noscript>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="submit" value="Send" className="btn btn-primary right"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="yellow-bg">
                                <div className="widget contact">
                                    <div className="header-h2">
                                        <h2>Contact information</h2>
                                    </div>
                                    <h3 itemProp="name"> The Symposium Cafe Restaurant Group Corporate
                                        Office</h3>
                                    <address itemProp="location" itemScope itemType="http://schema.org/PostalAddress">
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