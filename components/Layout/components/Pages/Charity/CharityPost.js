import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function CharityPost({post}) {

    const {image, imageAlt, slug, description, title} = post;
    return (
        <div className="charity-blog-post">
            <div className="row">
                <div className="charity-post">
                    <div className="col-lg-5">
                        <Link href={slug} passHref>
                            <div className="abs-border" style={{width: "30%", float: "left"}}>
                                <Image width={424} height={160}
                                       src={image}
                                       alt={imageAlt} className="abs-border-img"/>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-7">
                        <h2><Link href={slug} passHref><a>{title}</a></Link></h2>
                        <p>
                            {description}
                        </p>
                        <Link href={slug} className="right" passHref><a>[ Read more ]</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}