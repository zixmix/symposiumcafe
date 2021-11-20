import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Symposiumlogo} from "../../../../data/images";
import locations from "/data/location.js"



export default function Header()
{
    return(
    <div className="black-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 centered">
                    <div className="padding-logo-nav">
                        <div className="logo">
                            <Link  href="/" passHref>
                                <a>
                                    <Image src={Symposiumlogo} width={268} height={107} alt="Symposium Cafe Restaurant Logo"/>
                                </a>
                            </Link>
                            <nav role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
                                <ul>

                                    <li itemProp="name">
                                        <Link href="/"  itemProp="url" passHref>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li itemProp="name">
                                        <Link href="/menu" itemProp="name" passHref>
                                            <a>MENU</a>
                                        </Link>
                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/location" passHref>
                                            <a>Locations</a>
                                        </Link>


                                        <ul>
                                            {locations.map(result => {
                                                const {id, name} = result;
                                                return (
                                                    <li itemProp="name">
                                                    <Link href={'/location/'+result.id} key={id} passHref>
                                                        <a href="https://symposiumcafe.com/locations/ajax-restaurants">
                                                            {name}
                                                        </a>
                                                    </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>


                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/gallery" passHref>
                                            <a>Gallery</a>
                                        </Link>

                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/franchise" passHref>
                                            <a>Franchise</a>
                                        </Link>

                                    </li>
                                    <li itemProp="name">
                                        <Link itemProp="name" href="/about" passHref>
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