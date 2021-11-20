import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pic from "/images/franchise/franchise-contact-us.jpg"


export default function FranContactBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image
                                    src={Pic}
                                    alt="https://symposiumcafe.com/" className="img-responsive"/>
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
                                <div className="sub-navigation">
                                    <ul>
                                        <li><a href="https://symposiumcafe.com/franchise-opportunities"> Franchise</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/franchise-opportunities/why-a-symposium-cafe-franchise">Why
                                                a Symposium Franchise?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/franchise-opportunities/franchise-facts">Franchise
                                                Facts</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/franchise-opportunities/franchising-investment-details">Franchising
                                                Investment Details</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/franchise-opportunities/current-locations-for-sale">Current
                                                Opportunities</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/franchise-opportunities/faq">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="https://symposiumcafe.com/franchise-opportunities/contact-us"
                                               className="active">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2>Request franchising Information Form - Symposium Cafe Franchise</h2>
                                <form action="https://symposiumcafe.com/send-franchise" method="POST">
                                    <fieldset>
                                        <legend className="legend">Please fill out this form completely</legend>
                                        <div className="row margin-bottom0">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="name">Your name:</label>
                                                    <input type="text" name="name" placeholder="Your name..." id="name"
                                                           value="" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="work_phone">Work phone:</label>
                                                    <input type="text" name="work_phone" placeholder="Work phone..."
                                                           id="work_phone" value="" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row margin-bottom0">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="text" name="email" placeholder="Your email..."
                                                           id="email" value="" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="organization">Organization:</label>
                                                    <input type="text" name="organization"
                                                           placeholder="Your organization..." id="organization" value=""
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row margin-bottom0">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="city">City:</label>
                                                    <input type="text" name="city" placeholder="City..." id="city"
                                                           value="" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="province_state">Province/State:</label>
                                                    <input type="text" name="province_state"
                                                           placeholder="Province/State..." id="province_state" value=""
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row margin-bottom0">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="current_occupation">Current occupation:</label>
                                                    <input type="text" name="current_occupation"
                                                           placeholder="Current occupation..." id="current_occupation"
                                                           value="" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="areas_of_interest">Areas of interest:</label>
                                                    <input type="text" name="areas_of_interest"
                                                           placeholder="Areas of interest..." id="areas_of_interest"
                                                           value="" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row margin-bottom0">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="postal_zip_code">Postal Code / Zip Code:</label>
                                                    <input type="text" name="postal_zip_code"
                                                           placeholder="Postal Code / Zip Code..." id="postal_zip_code"
                                                           value="" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="country">Country:</label>
                                                    <input type="text" name="country" placeholder="Country..."
                                                           id="country" value="" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row margin-bottom0">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="money_to_invest">Money to invest:</label>
                                                    <input type="text" name="money_to_invest"
                                                           placeholder="Money to invest..." id="money_to_invest"
                                                           value="" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label htmlFor="additional_information"> Additional
                                                    information: </label>
                                                <textarea name="additional_information"
                                                          placeholder="Some additional information..."
                                                          id="additional_information" rows="5"
                                                          className="form-control"></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <br/>


                                                    <div className="g-recaptcha"
                                                         data-sitekey="6LdRfxcUAAAAAFua-Aw_1RNWi6W0z9wPw6QSZ6g9"></div>
                                                    <noscript>
                                                        <div style="width: 302px; height: 352px;">
                                                            <div
                                                                style="width: 302px; height: 352px; position: relative;">
                                                                <div
                                                                    style="width: 302px; height: 352px; position: absolute;">
                                                                    <iframe
                                                                        src="https://www.google.com/recaptcha/api/fallback?k=6LdRfxcUAAAAAFua-Aw_1RNWi6W0z9wPw6QSZ6g9"
                                                                        frameBorder="0" scrolling="no"
                                                                        style="width: 302px; height:352px; border-style: none;">
                                                                    </iframe>
                                                                </div>
                                                                <div style="width: 250px; height: 80px; position: absolute; border-style: none;
                  bottom: 21px; left: 25px; margin: 0; padding: 0; right: 25px;">
        <textarea id="g-recaptcha-response" name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style="width: 250px; height: 80px; border: 1px solid #c1c1c1;
                         margin: 0; padding: 0; resize: none;"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </noscript>
                                            </div>
                                            <div className="col-md-6">
                                                <br/>
                                                    <input type="submit" value="Submit"
                                                           className="btn btn-primary right"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}