import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import FeedBackBody from "../../components/Layout/components/Body/FeedBackBody";
import FranchiseBody from "../../components/Layout/components/Body/FranchiseBody";

export default function Franchise({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <FranchiseBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}