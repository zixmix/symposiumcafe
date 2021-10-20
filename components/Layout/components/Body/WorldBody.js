import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "/images/world/world-vision.jpg"

export default function WorldBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Pic} width={1060} height={380} alt="https://symposiumcafe.com/" className="img-responsive"/>
                                    <div className="header-image-with-text">
                                        <h1>World Vision International</h1>
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
                            <div className="col-lg-12" >
                                <div className="row">
                                    <div className="col-lg-9" style={{width:"70%", float:"left", paddingLeft:"15px"}}>
                                        <h2>Symposium Cafe Restaurant & Lounge Supports World Vision International</h2>
                                        <p> It’s all about giving back. With the opening of every new Symposium location, Symposium Cafe
                                            Restaurant & Lounge commits to the sponsorship of another child through the World Vision
                                            International program. The Symposium family of restaurants has been embraced by our
                                            customers
                                            throughout Southern Ontario, and with their support, Symposium is able to help World Vision
                                            provide relief to children and families around the world. As we continue to grow, so does
                                            our
                                            support.</p>
                                        <p>Through the ongoing partnership with World Vision, Symposium aids in transcending legal,
                                            structural, and cultural boundaries; and promotes the best process to provide and manage
                                            relief
                                            efforts to overcome poverty and injustice. We value people at Symposium, regardless of race,
                                            religion, culture, or gender, and these values are further reflected across the political
                                            and
                                            social boundaries on an international scale.</p>
                                        <p> The efforts made by Symposium to support World Vision International would not be possible
                                            without the support of our valued customers and staff. We thank them for their continued
                                            patronage and hope they too are proud to be making a difference by living the World Vision
                                            motto
                                            of “building a better world for children”.</p>
                                        <p> Contact <Link href="http://www.worldvision.ca/getinvolved">http://www.worldvision.ca/getinvolved</Link>
                                            for information and volunteering opportunities.</p>
                                    </div>
                                    <div className="col-lg-3" style={{float:"right"}}>
                                        <div className="widget yellow-bg">
                                            <div className="header-h2">
                                                <h2 className="text-center">Charity</h2>
                                            </div>
                                            <ul className="menu-categories">
                                                <Link href="/charity/breakfast" className="link-charity ">Breakfast Club of Canada</Link>
                                                <br></br>
                                                <Link href="/charity/golf" className="link-charity ">Golf for a Cure</Link>
                                                <br></br>
                                                <Link href="/charity/world" className="link-charity ">World Vision International</Link>
                                                <br></br>
                                                <Link href="/charity/proud" className="link-charity active">Proud to Support</Link>
                                            </ul>
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