import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import CharityBody from "../../components/Layout/components/Body/CharityBody";
import GolfBody from "../../components/Layout/components/Body/GolfBody";
import ProudBody from "../../components/Layout/components/Body/ProudBody";

export default function Proud({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <ProudBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}