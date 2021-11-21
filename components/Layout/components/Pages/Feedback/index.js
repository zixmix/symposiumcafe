import React from "react";
import Pic from "/images/feedback/feedback.jpg"
import BodyTop from "../../UI/BodyTop";
import FormPost from "./FormPost";

export default function FeedbackBody() {
    return (
        <div>
            <BodyTop title="Feedback" image={Pic}/>
            <section>
                <div className="container">
                    <div className="page-without-top">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Customer Feedback</h2>
                                <p>This information goes directly to the Symposium Cafe Restaurant & Lounge Executive
                                    Team to
                                    help us to continually meet your needs and exceed your expectations.
                                    Your feedback is always welcome and appreciated.</p>
                                <FormPost/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}