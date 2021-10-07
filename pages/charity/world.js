import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import CharityBody from "../../components/Layout/components/Body/CharityBody";
import WorldBody from "../../components/Layout/components/Body/WorldBody";

export default function World({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <WorldBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}