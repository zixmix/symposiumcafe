import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import FeedBackBody from "../../components/Layout/components/Body/FeedBackBody";
import GalleryBody from "../../components/Layout/components/Body/GalleryBody";

export default function Galery({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <GalleryBody/>
                <Footer/>
                {childern}
</>
        </div>
    )
}