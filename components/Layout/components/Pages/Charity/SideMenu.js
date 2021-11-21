import React from "react";
import Side from "./Side"

export default function SideMenu() {
    const list = [
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
            {list.map((menu, key) => {
                return <Side key={key} menu={menu}></Side>
            })}
        </>
    )
};