import React from "react";


export default function FormPost() {
    return (


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


    )
};