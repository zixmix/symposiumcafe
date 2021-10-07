import React from "react";







export default function FeedBackBody()
{
    return(
<div>
    <h1></h1>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-image">
                        <img src="https://symposiumcafe.com/images/pages/1453412827feedback.jpg"
                             alt="https://symposiumcafe.com/" className="img-responsive"/>
                            <div className="header-image-with-text">
                                <h1>Feedback</h1>
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
                        <h2>Customer Feedback</h2>
                        <p>This information goes directly to the Symposium Cafe Restaurant & Lounge Executive Team to
                            help us to continually meet your needs and exceed your expectations.
                                Your feedback is always welcome and appreciated.</p>
                        <form method="POST" action="https://symposiumcafe.com/send-feedback" className="feedback-form">
                            <fieldset>
                                <legend className="legend">Please fill out this form completely</legend>
                                <div className="col-md-8">
                                    <div className="col-md-8">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="name">Name<sup>*</sup></label>
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Name..." required="required" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="email">Email<sup>*</sup></label>
                                                <input type="text" name="email" className="form-control" id="email"
                                                       placeholder="example@email.com" required="required" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="postal_code">Postal Code:</label>
                                                <input type="text" name="postal_code" className="form-control"
                                                       placeholder="Postal code..." value=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="col-lg-8">
                                            <div className="form-group">
                                                <label htmlFor="location">Location<sup>*</sup>
                                                    <small>(Please select the location of your visit)</small>
                                                </label>
                                                <select className="form-control" id="location" required="required"
                                                        name="location">
                                                    <option value="0">Select location</option>
                                                    <option value="1">Ajax</option>
                                                    <option value="2">Aurora</option>
                                                    <option value="3">Ancaster</option>
                                                    <option value="4">Bolton</option>
                                                    <option value="5">Brantford</option>
                                                    <option value="6">Cambridge</option>
                                                    <option value="7">Georgetown</option>
                                                    <option value="8">Guelph</option>
                                                    <option value="10">Markham</option>
                                                    <option value="11">Milton</option>
                                                    <option value="13">Mississauga South</option>
                                                    <option value="16">Oakville</option>
                                                    <option value="18">Stoney Creek</option>
                                                    <option value="20">Thornhill</option>
                                                    <option value="22">Woodbridge</option>
                                                    <option value="26">Lindsay</option>
                                                    <option value="27">Barrie</option>
                                                    <option value="30">Waterdown</option>
                                                    <option value="31">Alliston</option>
                                                    <option value="32">Keswick</option>
                                                    <option value="33">Waterloo Erbsville</option>
                                                    <option value="35">Whitby</option>
                                                    <option value="36">Cobourg</option>
                                                    <option value="37">Oshawa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="date">Date<sup>*</sup></label>
                                                <input type="text" className="form-control" name="date" id="date"
                                                       placeholder="mm/dd/yyyy" required="required" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="date">Time<sup>*</sup></label>
                                                <input type="text" className="form-control" name="time" id="time"
                                                       placeholder="12:00" required="required" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <label htmlFor="age">Your age:</label>
                                            <select name="age" id="age" className="form-control">
                                                <option selected="selected">Choose...</option>
                                                <option value="1">Under 18</option>
                                                <option value="2">18-24</option>
                                                <option value="3">25-34</option>
                                                <option value="4">35-44</option>
                                                <option value="5">45-54</option>
                                                <option value="6">55-64</option>
                                                <option value="7">65 or over</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2">
                                            <label htmlFor="gender">Gender:</label>
                                            <input type="radio" name="gender" value="1" id="male"/><label
                                                htmlFor="male">Male</label>
                                                <input type="radio" name="gender" value="0" id="female" checked/>
                                                <label htmlFor="female">Female</label>

                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="col-lg-12">
                                            <label htmlFor="server">Server
                                                <small>(Please feel free to let us know who your server was)</small>
                                            </label>
                                            <input type="text" name="server" className="form-control" id="server"
                                                   placeholder="Server..." value=""/>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="col-lg-6">
                                            <label htmlFor="check">Receipt Number:</label>
                                            <input type="text" name="cheque" className="form-control" id="check"
                                                   placeholder="Receipt Number" value=""/>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="check">Table#:</label>
                                            <input type="text" className="form-control" id="table" name="table"
                                                   placeholder="Table#" value=""/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-12">
                                            <h3>Please tell us about overall:</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <label htmlFor="overalls">Overall Service<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="overalls" data-slider-id='overalls' name="overall_service"
                                                   type="text" data-slider-min="0" data-slider-max="5"
                                                   data-slider-step="1" data-slider-value="" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="overalla">Overall Atmosphere<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="overalla" data-slider-id='overalla' name="overall_atmosphere"
                                                   type="text" data-slider-min="0" data-slider-max="5"
                                                   data-slider-step="1" data-slider-value="0" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="overallf">Overall Food<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="overallf" data-slider-id='overallf' name="overall_food"
                                                   type="text" data-slider-min="0" data-slider-max="5"
                                                   data-slider-step="1" data-slider-value="0" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="overallv">Overall Value<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="overallv" data-slider-id='overallv' name="overall_value"
                                                   type="text" data-slider-min="0" data-slider-max="5"
                                                   data-slider-step="1" data-slider-value="0" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h3>Please tell us how satisfied where you with:</h3>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="stafffriend">Staff Friendliness:</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="stafffriend" data-slider-id='stafffriend'
                                                   name="staff_friendliness" type="text" data-slider-min="0"
                                                   data-slider-max="4" data-slider-step="1" data-slider-value="0"
                                                   style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="attentivenesstaff">Attentiveness of
                                                Staff<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="attentivenesstaff" data-slider-id='attentivenesstaff'
                                                   name="attentiveness_of_staff" type="text" data-slider-min="0"
                                                   data-slider-max="4" data-slider-step="1" data-slider-value="0"
                                                   style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="promptnessos">Promptness of Service<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="promptnessos" data-slider-id='promptnessos'
                                                   name="promptness_of_service" type="text" data-slider-min="0"
                                                   data-slider-max="4" data-slider-step="1" data-slider-value="0"
                                                   style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="accuracyorder">Accuracy of Order<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="accuracyorder" data-slider-id='accuracyorder'
                                                   name="accuracy_of_order" type="text" data-slider-min="0"
                                                   data-slider-max="4" data-slider-step="1" data-slider-value="0"
                                                   style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="foodtaste">Food Taste<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="foodtaste" data-slider-id='foodtaste' name="food_taste"
                                                   type="text" data-slider-min="0" data-slider-max="4"
                                                   data-slider-step="1" data-slider-value="0" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="foodtemperature">Food Temperature<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="foodtemperature" data-slider-id='foodtemperature'
                                                   name="food_temperature" type="text" data-slider-min="0"
                                                   data-slider-max="4" data-slider-step="1" data-slider-value="0"
                                                   style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="portsize">Portition Size<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="portsize" data-slider-id='portsize' name="portition_size"
                                                   type="text" data-slider-min="0" data-slider-max="4"
                                                   data-slider-step="1" data-slider-value="0" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="row slider-range">
                                        <div className="col-lg-4">
                                            <label htmlFor="presentation">Presentation<sup>*</sup></label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input id="presentation" data-slider-id='presentation' name="presentation"
                                                   type="text" data-slider-min="0" data-slider-max="4"
                                                   data-slider-step="1" data-slider-value="0" style={{width: "100px"}}/>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="row margin-top10">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="comments">Comments<sup>*</sup></label>

                                            </div>
                                        </div>
                                        <div className="col-lg-6">




                                        </div>
                                        <div className="col-lg-6"><input type="submit" value="Send feedback"
                                                                             className="btn btn-primary right"/></div>
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