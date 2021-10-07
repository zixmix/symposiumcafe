import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import DecorBody from "../../components/Layout/components/Body/DecorBody";

export default function Index({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <h1></h1>
                <DecorBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}