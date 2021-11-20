import Image from "next/image";
import React from "react";
import Link from "next/link";
import {Pic1} from "../../../../../data/images";
import CharityPost from "./CharityPost";
import Side from "./Side"

export default function SideMeni() {
    const sidemenu =[
        {
        id: 1,
        title: "Breakfast Club of Canada",
        slug: "./breakfast",

    },
        {
            id: 2,
            title: "Golf for a Cure",
            slug: "./golf",

        },
        {
            id: 3,
            title: "World Vision International",
            slug: "./world",

        },
        {
            id: 4,
            title: "Proud to Support",
            slug: "./proud",

        }
    ];
    return (
        <>
        {sidemenu.map((menu, key) => {
                return <Side key={key} menu={menu}></Side>
            })}
        </>
    )
};