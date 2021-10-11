import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import FeedBackBody from "../../components/Layout/components/Body/FeedBackBody";
import MenuBody from "../../components/Layout/components/Body/MenuBody";

export default function Menu({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
<MenuBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}