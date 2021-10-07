import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";
import DeliveryBody from "../../components/Layout/components/Body/DeliveryBody";

export default function Delivery({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <DeliveryBody/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}