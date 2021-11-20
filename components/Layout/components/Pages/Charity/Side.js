import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Side({menu}) {

    const {slug, title} = menu;
    return (

                <ul className="menu-categories">
                    <Link href={slug} className="link-charity " passHref><a>{title}</a></Link>
                    <br></br>
                </ul>

    );
}