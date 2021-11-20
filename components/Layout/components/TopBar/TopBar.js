import React from "react";
import Link from "next/link"

export default function TopBar()
{
    return(
        <div className="black-header" id="nav">
            <header>
                <div className="nav-top">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-11 centered">
                                <div className="top-nav-left" id="first-nav">
                                    <ul className="top-left-list">
                                        <li>
                                            <Link href="/decor" passHref>
                                                <a>Decor</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/feedback" passHref>
                                                <a>Feedback</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/charity" passHref>
                                                <a>Charity</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" passHref>
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="top-right-nav">
                                    <li>
                                        <Link className="gold-text" href="https://order2.silverwarepos.com/app/SymposiumCafe#!/stores" passHref>
                                            <a>ORDER ONLINE</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/delivery" className="gold-text" style={{color:'#d2c41a;'}} passHref>
                                            <a>Delivery</a>
                                        </Link>
                                </li>
                                <li>
                                    <Link href="https://cws.givex.com/cws4.0/symposium4/" className="gold-text" style={{color:'#d2c41a;'}} passHref>
                                        <a>Online Gift Cards</a>
                                    </Link>
                            </li>
                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>



    )
}