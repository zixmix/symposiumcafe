import React from "react";
import TopBar from "../components/Layout/components/TopBar/TopBar";
import Header from "../components/Layout/components/Header/Header";
import Footer from "../components/Layout/components/Footer/Footer";
import HomeBody from "../components/Layout/components/Body/HomeBody";

export default function Layout({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <h1> Zeljko Car - order STRANA</h1>
                <HomeBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}