import Image from "next/image";
import React from "react";

export default function BodyTop({
                                    image, title
                                }) {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-image">
                            <Image src={image} width={1060} height={380}
                                   alt="https://symposiumcafe.com/" className="img-responsive"/>
                            <div className="header-image-with-text">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};