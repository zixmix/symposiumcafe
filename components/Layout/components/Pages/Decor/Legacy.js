import Image from "next/image";

export default function Legacy({post}) {
    const {title, image, imageAlt, description} = post;
    return(


                <div className="col-lg-3 col-md-4" style={{width:"25%"}}>
                    <div className="img-symposium">
                        <div className="img-overlay"></div>
                            <div className="img-name smaller">{title}</div>
                            <Image src={image} alt={imageAlt} className="img-responsive"/>
                            <p>{description}
                            </p>
                        </div>
                    </div>


)}