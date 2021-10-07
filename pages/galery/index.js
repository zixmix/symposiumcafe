import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import FeedBackBody from "../../components/Layout/components/Body/FeedBackBody";
import GalerijaBody from "../../components/Layout/components/Body/GalerijaBody";

export default function Galery({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <GalerijaBody/>
                <Footer/>
                {childern}
</>
        </div>
    )
}