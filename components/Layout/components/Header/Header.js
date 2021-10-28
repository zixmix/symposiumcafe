import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slika1 from "/public/images/header/logo (1).png"
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
                                            {locations.map(result => {
                                                const {id, name} = result;
                                                return (
                                                    <li itemProp="name">
                                                    <Link href={'/location/'+result.id} key={id}>
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