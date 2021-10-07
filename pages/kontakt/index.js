import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import ContackBody from "../../components/Layout/components/Body/ContackBody";

export default function ContactUs({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <ContackBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}