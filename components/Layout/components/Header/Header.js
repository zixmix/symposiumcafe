import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slika1 from "/public/images/header/logo (1).png"


export default function Header()
{
    return(
    <div className="black-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 centered">
                    <div className="padding-logo-nav">
                        <div className="logo">
                            <Link  href="/">
                                <a>
                                    <Image src={Slika1} width={268} height={107} alt="Symposium Cafe Restaurant Logo"/>
                                </a>
                            </Link>
                            <nav role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
                                <ul>

                                    <li itemProp="name">
                                        <Link href="/"  itemProp="url">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li itemProp="name">
                                        <Link href="/menu" itemProp="name">
                                            <a>MENU</a>
                                        </Link>
                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/location">
                                            <a>Locations</a>
                                        </Link>


                                        <ul>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/ajax">
                                                    <a>
                                                        Ajax
                                                    </a>
                                                </Link>

                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/alliston">
                                                <a>
                                                    Alliston
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/amcaster">
                                                <a>
                                                    Ancaster
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/aurorab">
                                                <a>
                                                    Aurora
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/barrie">
                                                <a>
                                                    Barrie
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/bolton">
                                                <a>
                                                    Bolton
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/brantford">
                                                <a>
                                                    Brantford
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/cambridge">
                                                <a>
                                                    Cambridge
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/cobourg">
                                                <a>
                                                    Cobourg
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/grorgetown">
                                                <a>
                                                    Georgetown
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/guelph">
                                                <a>
                                                    Guelph
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/keswick">
                                                <a>
                                                    Keswick
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/lindsay">
                                                <a>
                                                    Lindsay
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/markham">
                                                <a>
                                                    Markham
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/milton">
                                                <a>
                                                    Milton
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/mississauga">
                                                <a>
                                                    Mississauga South
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/oakville">
                                                <a>
                                                    Oakville
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/osnawa">
                                                <a>
                                                    Oshawa
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/stoney">
                                                <a>
                                                    Stoney Creek
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/thornhill">
                                                <a>
                                                    Thornhill
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/waterdown">
                                                <a>
                                                    Waterdown
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/waterlo">
                                                <a>
                                                    Waterloo Erbsville
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/whitby">
                                                <a>
                                                    Whitby
                                                </a>
                                                </Link>
                                            </li>
                                            <li itemProp="name">
                                                <Link itemProp="url" href="/location/woodbridge">
                                                <a>
                                                    Woodbridge
                                                </a>
                                                </Link>
                                            </li>
                                        </ul>


                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/galery">
                                            <a>Gallery</a>
                                        </Link>

                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/franchise">
                                            <a>Franchise</a>
                                        </Link>

                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/about">
                                            <a>About Us</a>
                                        </Link>

                                    </li>

                                </ul>
                            </nav>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}