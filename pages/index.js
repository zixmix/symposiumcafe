import React from "react";
import HomeBody from "../components/Layout/components/Body/HomeBody";
import location from "/data/location"

export default function Index()
{
    return(
        <div>
            <>
                <h1>{location.id}</h1>
                <h1>{location.name}</h1>
                <HomeBody/>

            </>
        </div>
    )

}