import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pic from "/images/franchise/faq.jpg"


export default function FranFaqBody()
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
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise"
                                                  className="active"> Franchise</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/whySymposium">Why
                                                a Symposium Franchise?
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/franchiseFacts">Franchise
                                                Facts</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/franchisingInvestment">Franchising
                                                Investment Details</Link>
                                        </li>
                                        <li>
                                            <Link  style={{padding:"8px 4px"}}
                                                   href="/franchise/currentLocation">Current
                                                Opportunities</Link>
                                        </li>
                                        <li>
                                            <Link style={{padding:"8px 4px"}}
                                                  href="/franchise/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            {/*<Link style={{padding:"8px 4px"}}*/}
                                            {/*      href="/franchise/contactUs" passHref>Contact*/}
                                            {/*    us</Link>*/}
                                        </li>
                                    </ul>
                                </div>
                                <h1>Frequently asked questions (FAQ) - Symposium Cafe Franchise opportunities </h1>
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq0"><h3 className="panel-title">
                                            <Link role="button" data-toggle="collapse" data-parent="#accordion"
                                               href="#cfaq0" aria-expanded="true" aria-controls="cfaq0">What
                                                is a Symposium Cafe Restaurant?</Link></h3></div>
                                        <div id="cfaq0" className="panel-collapse collapse in" role="tabpanel"
                                             aria-labelledby="faq0">
                                            <div className="panel-body"> Symposium Cafe restaurant is a unique exciting
                                                concept, of
                                                an upscale, licensed, casual cafe. Symposium Cafe niche is the fastest
                                                growing
                                                food service segment in North America. With a menu including classic
                                                gourmet
                                                meals, full service breakfast exotic desserts, European coffees and
                                                specialty beverages. Each
                                                restaurant location is open 7 days from early morning breakfast to late
                                                evenings
                                                with
                                                dining available both indoors or outside on our restaurant patios.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq1"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq1" aria-expanded="false"
                                               aria-controls="cfaq1">What kind of clientele does Symposium Cafe
                                                attract?</Link></h3></div>
                                        <div id="cfaq1" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq1">
                                            <div className="panel-body"> Symposium Cafe attracts a casual dining
                                                clientele,
                                                that
                                                appreciates a well designed restaurant, and good quality food, excellent
                                                service
                                                and a comfortably unique restaurant experience.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq2"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq2" aria-expanded="false"
                                               aria-controls="cfaq2"> What does the CFA award of excellence
                                                awarded to
                                                Symposium Cafe mean? </Link></h3></div>
                                        <div id="cfaq2" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq2">
                                            <div className="panel-body">
                                                Symposium Cafe concept has been awarded the Canadian Franchise
                                                Associations 2011, 2012, 2013, 2014 and 2015 Award of Excellence in
                                                regards to our Franchise support - one of only two full service
                                                restaurants in Canada to win this prestigious award.
                                                <br/>
                                                    <strong>We also have won the Gold award three of the past five
                                                        years,
                                                        being top Franchise in our category for these three
                                                        years.</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq3"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq3" aria-expanded="false"
                                               aria-controls="cfaq3"> The decor is the most unique in the
                                                Canadian
                                                marketplace, but is it protected with trademarks Canada? </Link></h3>
                                        </div>
                                        <div id="cfaq3" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq3">
                                            <div className="panel-body">
                                                The uniqueness of our decor is recognized by Trademarks Canada which has
                                                awarded Symposium Cafe Restaurant & Lounge Trade dress protection
                                                throughout Canada - one of only a handful of restaurants to ever
                                                achieve this.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq4"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq4" aria-expanded="false"
                                               aria-controls="cfaq4">What is the cost to purchase a Symposium
                                                Cafe?</Link>
                                        </h3></div>
                                        <div id="cfaq4" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq4">
                                            <div className="panel-body"> The total investment required will vary by
                                                location, but is
                                                estimated to be approximately $625,000 - $675,000 for a turnkey
                                                operation. You
                                                will need approximately $300,000 -$325,000 in unencumbered cash, with
                                                the
                                                balance financed. Other store opening costs (detailed in the Investment
                                                Details section) range from $85,000 - $130,000 which include your store
                                                opening
                                                cash on hand, inventories, prepaid rent, etc.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq5"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq5" aria-expanded="false"
                                               aria-controls="cfaq5">What do you mean by unencumbered cash?</Link>
                                        </h3>
                                        </div>
                                        <div id="cfaq5" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq5">
                                            <div className="panel-body"> Unencumbered cash is cash on hand, in a savings
                                                account,
                                                chequing account or GIC account, otherwise known as liquid capital.
                                                Home
                                                equity and RRSPs are not usually considered unencumbered, except in
                                                certain
                                                circumstances. Your assets must be in Canada and you must be able to
                                                provide
                                                appropriate documentation to substantiate all assets.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq6"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq6" aria-expanded="false"
                                               aria-controls="cfaq6">Does Symposium Cafe provide or assist in
                                                financing?</Link></h3></div>
                                        <div id="cfaq6" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq6">
                                            <div className="panel-body"> We do not provide financial assistance, but
                                                will
                                                provide
                                                assistance with the preparation of a business presentation and will work
                                                with
                                                your financial institution to provide any information they require to
                                                complete
                                                your loan application. While we do not offer direct or indirect
                                                financing, we
                                                may recommend competent lenders who are capable of meeting the financing
                                                needs
                                                of our Franchise Partners.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq7"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq7" aria-expanded="false"
                                               aria-controls="cfaq7">What are the royalty fees ?</Link></h3></div>
                                        <div id="cfaq7" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq7">
                                            <div className="panel-body"> The royalty fees are 5% as defined in the
                                                Franchise
                                                Agreement and are paid monthly.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq8"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq8" aria-expanded="false"
                                               aria-controls="cfaq8">What are the advertising fee? </Link></h3>
                                        </div>
                                        <div id="cfaq8" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq8">
                                            <div className="panel-body"> The Advertising Fees are 2% of sales as defined
                                                in
                                                the
                                                Franchise Agreement and are paid monthly to the Franchisor. These fees
                                                are
                                                maintained in a Symposium Cafe Advertising Account and are used for
                                                system
                                                advertising and promotion of Symposium Cafe system as established by the
                                                Franchisor.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq9"><h3 className="panel-title">
                                            <Link className="collapsed" role="button" data-toggle="collapse"
                                               data-parent="#accordion" href="#cfaq9" aria-expanded="false"
                                               aria-controls="cfaq9">What kind of training is provided to a new
                                                franchisee? </Link></h3></div>
                                        <div id="cfaq9" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq9">
                                            <div className="panel-body"> Symposium Cafe offers one of the most extensive
                                                training
                                                programs in Canada offering three full months of training for up to
                                                three
                                                individuals at an existing Symposium Cafe location.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq10"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq10" aria-expanded="false"
                                                                       aria-controls="cfaq10">What support do I receive
                                            when opening a
                                            restaurant?</Link></h3></div>
                                        <div id="cfaq10" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq10">
                                            <div className="panel-body"> Upon successful completion of Symposium Cafe
                                                training
                                                program and assuming the responsibility of your restaurant franchise, a
                                                transition tutor is assigned to directly assist you on a regular basis
                                                in your
                                                restaurant franchise for a period of 10 weeks. This tutor works closely
                                                with you
                                                through the opening stages of your cafe, the day-to-day operating
                                                systems and
                                                procedures to ensure a successful start-up of your restaurant. This
                                                program is
                                                designed to strengthen and build the Franchise operators commitment to
                                                our
                                                proven systems. Our unique 10 weeks in-store program is crucial to
                                                building your
                                                team, establishing a strong customer base, growing restaurant sales and
                                                operating a successful Symposium Cafe franchise.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq11"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq11" aria-expanded="false"
                                                                       aria-controls="cfaq11">What ongoing support is
                                            given to a
                                            franchisee? </Link></h3></div>
                                        <div id="cfaq11" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq11">
                                            <div className="panel-body"> The field consulting team provides ongoing
                                                support
                                                and
                                                training through restaurant visits and coaching. They ensure all
                                                Symposium Cafe
                                                systems, specifications and standards are in place to drive consistent
                                                operations and profitable sales. Professional operations staff makes
                                                ongoing
                                                visits to your restaurant to hear any concerns you may have. They ll
                                                also
                                                conduct restaurant audits, which expose areas of concern within your
                                                operation.
                                                Our regional managers work with our Franchisees to develop action plans
                                                to
                                                correct and eliminate any problems uncovered.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq12"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq12" aria-expanded="false"
                                                                       aria-controls="cfaq12">What can I expect as a
                                            return on
                                            investment? </Link>
                                        </h3></div>
                                        <div id="cfaq12" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq12">
                                            <div className="panel-body"> Franchise regulations prevent us from making
                                                income
                                                disclosures. The restaurant s profitability will vary depending on
                                                management
                                                control and local market conditions, the franchisees dedication to our
                                                systems,
                                                sales mix, and competition in the area, operational costs, time of year
                                                and
                                                more. We encourage prospective Franchisees to obtain independent
                                                professional
                                                legal and accounting opinions on a Symposium Cafe franchise program, and
                                                to
                                                speak to existing franchisees.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq13"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq13" aria-expanded="false"
                                                                       aria-controls="cfaq13">What are the criteria for
                                            a Symposium
                                            Cafe
                                            location? </Link></h3></div>
                                        <div id="cfaq13" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq13">
                                            <div className="panel-body"> Restaurants are typically located in a market
                                                with
                                                a
                                                minimum population of 25,000 people, as well as possessing a square
                                                footage of
                                                approximately 3,100 to 3,500 square feet. As well we want to ensure that
                                                each
                                                location has a well rounded mix of residential, commercial mix. We are a
                                                destination restaurant and do not necessarily have to be located at the
                                                most
                                                prime site, as long as we are located close by.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq14"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq14" aria-expanded="false"
                                                                       aria-controls="cfaq14">Who selects the
                                            location? </Link></h3></div>
                                        <div id="cfaq14" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq14">
                                            <div className="panel-body"> The Franchisor has its own development
                                                department
                                                that
                                                locates and negotiates sites. Demographic research and other studies are
                                                carried
                                                out to determine suitability. We welcome all site suggestions, however
                                                they are
                                                subject to approval by our development department.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq15"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq15" aria-expanded="false"
                                                                       aria-controls="cfaq15">Are franchisees
                                            responsible for building
                                            their
                                            own restaurant? </Link></h3></div>
                                        <div id="cfaq15" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq15">
                                            <div className="panel-body"> No - Symposium Cafe designs and oversees the
                                                construction provided by separate entities, turning over a turnkey
                                                operation to the Franchisee.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="faq16"><h3
                                            className="panel-title"><Link className="collapsed" role="button"
                                                                       data-toggle="collapse" data-parent="#accordion"
                                                                       href="#cfaq16" aria-expanded="false"
                                                                       aria-controls="cfaq16">I already own a
                                            restaurant; can I convert
                                            it to a
                                            Symposium Cafe? </Link></h3></div>
                                        <div id="cfaq16" className="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="faq16">
                                            <div className="panel-body"> A visit to the location would be made to
                                                inspect and
                                                determine the practicality of converting it. We have well established
                                                relationships with contractors that can assist with the conversion
                                                process.
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