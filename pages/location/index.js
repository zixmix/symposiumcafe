import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import FeedBackBody from "../../components/Layout/components/Body/FeedBackBody";
import LocationBody from "../../components/Layout/components/Body/LocationBody";

export default function Location({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <LocationBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}