import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import FeedBackBody from "../../components/Layout/components/Body/FeedBackBody";

export default function Alliston({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <h1>alliston</h1>
                <Footer/>
                {childern}
            </>
        </div>
    )
}