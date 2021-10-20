import React from "react";
import Image from "next/image";
import Slika1 from "/images/delivery/delivery.jpg"
import Door from "/images/delivery/door.png"
import Feastify from "/images/delivery/feastify.png"
import Feastifybela from "/images/delivery/feastify_white.png"
import Uber from "/images/delivery/uber.png"
import Skip from "/images/delivery/skip.png"
import North from"/images/delivery/north.png"

export default function DeliveryBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-image">
                                <Image src={Slika1}  width={1060} height={380} alt="Symposium Delivery Uber & Skip the Dishes"
                                     className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="page margin-top-80">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="delivery-locations">
                                    <h2>Delivery</h2>
                                    <p>Breakfast, Working Lunch, Dinner for Two. Late Night Cravings.</p>
                                    <p>Choose from our Delivery menu and enjoy Symposium where ever you are.</p>
                                    <div>
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3>
                                                    <a href="">Ajax</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 338 Rossland Road East, Ajax L1Z 0K4</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-683-3232">905-683-3232</a>
                                                            <br/>
                                                                <strong>Email:</strong>
                                                                <a href="">
                                                                    <span className="__cf_email__" data-cfemail="f6858f9b8699859f839bd8979c978eb6858f9b8699859f839b95979093d895999b">[email&#160;protected]
                                                                    </span>
                                                                </a>
                                                </p>
                                            </div>
                                            <div className="col-md-3"  id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-ajax">
                                                        <Image src={Skip}  width={142.20} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes" /></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-ajax/6SwPLiANR3i8vGomu0Jleg/">
                                                            <Image src={Uber}  width={142.2} height={35.55} alt="Symposium Delivery via Uber eats"/></a>
                                                    <br/>
                                                        <a href="https://www.doordash.com/en-CA/store/symposium-cafe-restaurant-ajax-1019563/">
                                                            <Image src={Door} style="max-width: 45%; margin-top:8px;"  width={106.65} height={51.78}
                                                                 alt="Symposium Delivery via DoorDash"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Alliston</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 117 Young Street, Alliston L9R 0E9</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:705-435-2488">705-435-2488</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="196a607469766a706c7437787575706a6d7677596a607469766a706c747a787f7c377a7674">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                        <span className="glf-button"
                                              data-glf-cuid="a6098bc0-4037-4f7b-b983-4afb2616567c"
                                              data-glf-ruid="1029c79a-e5a3-4955-9211-aea8b84cbf02">
                                            <Image src={Feastify} alt="Symposium Delivery Alliston"  width={142.2} height={44.56}/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Ancaster</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 1146 Wilson St. West, Ancaster L9G 3K9</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-304-6226">905-304-6226</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="7a0903170a1509130f17541b14191b090e1f083a0903170a1509130f17191b1c1f54191517">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-hamilton-ancaster">
                                                        <Image src={Skip}  width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/hamilton/food-delivery/symposium-cafe-ancaster/MBp-FAwyScKLNbIp_0Q33A/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats"  width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Aurora</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 444 Hollandview Trail, Aurora L4G 7Z9</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-503-8899">905-503-8899</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="54272d39243b273d21397a3521263b263514272d39243b273d2139373532317a373b39">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge-444-jollandview-trail">
                                                        <Image src={Skip}  width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-aurora/3jSupGnzQXqwA1oqd8s6cw/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats"  width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Barrie</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 307 Cundles Road East, Barrie L4M 0G9</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:705-737-1818">705-737-1818</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="a7d4decad7c8d4ced2ca89c5c6d5d5cec2e7d4decad7c8d4ced2cac4c6c1c289c4c8ca">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-barrie">
                                                        <Image src={Skip}  width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-barrie/mjUaOasOQGy552knw_SL9A/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats"  width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Bolton</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 192 McEwan Drive East, Bolton L7E 4E5</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-857-8818">905-857-8818</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="4f3c36223f203c263a22612d20233b20210f3c36223f203c263a222c2e292a612c2022">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-bolton">
                                                        <Image src={Skip}  width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-restaurant-bolton/ccXjzZYMQ2OfM6Vr-fwmHw/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats"  width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Brantford</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 58 King George Road, Brantford N3R 5K4</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:519-756-2023">519-756-2023</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="0c7f75617c637f657961226e7e6d62786a637e684c7f75617c637f6579616f6d6a69226f6361">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-brantford">
                                                        <Image src={Skip}  width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/ca/kitchenerwaterloo/food-delivery/symposium-cafe-restaurant-brantford/g9U3r8ylT8W4v4rjrYc20g">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats"  width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Cambridge</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 500 Can-Amera Parkway, Cambridge N1T 0A2</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:519-621-8878">519-621-8878</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="582b213528372b312d35763b39353a2a313c3f3d182b213528372b312d353b393e3d763b3735">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://skipthedishes.com/Symposium-cafe-restaurant-and-lounge-can-Amera-parkway">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/kitchenerwaterloo/food-delivery/symposium-cafe-cambridge/dEikFfLLTq-mUM3zC1a8Tg/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                    <br/>
                                                        <a href="https://www.doordash.com/en-CA/store/symposium-caf-restaurant-lounge-cambridge-961682">
                                                            <Image src={Door} style="max-width: 45%; margin-top:8px;" width={106.65} height={51.78}
                                                                 alt="Symposium Delivery via DoorDash"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Cobourg</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 965 Elgin Street West, Cobourg K9A 5J3</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:289-252-0414">289-252-0414</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="16656f7b6679657f637b387579747963647156656f7b6679657f637b757770733875797b">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.doordash.com/en-CA/store/symposium-cafe-restaurant-cobourg-1656444/">
                                                        <Image src={Door} style="max-width: 45%; margin-top:8px;" width={106.65} height={51.78}
                                                             alt="Symposium Delivery via DoorDash"/></a>
                                                    <br/>
                                                    <a href="https://www.northumberlanddelivers.com/en/store/Symposium-Cafe/942104">
                                                        <Image src={North} width={100} height={100}
                                                             alt="Symposium Delivery via Northumberland Delivers"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Georgetown</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 235 Guelph Street, Georgetown L7G 4A8</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-877-2222">905-877-2222</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="2053594d504f5349554d0e47454f524745544f574e6053594d504f5349554d434146450e434f4d">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge-guelph-street">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-georgetown/WUpHZeZQRFC5SE22vnMBjQ/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Guelph</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 304 Stone Road West, Guelph N1G 3C4</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:519-824-4138">519-824-4138</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="384b415548574b514d55165f4d5d544850784b415548574b514d555b595e5d165b5755">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-guelph">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/kitchenerwaterloo/food-delivery/symposium-cafe-guelph/uqLNdGtcQtyxZ2pk32ZE1Q/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Keswick</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 236 Dovedale Drive, Keswick L4P 0H3</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-952-3129">905-952-3129</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="2a5953475a4559435f4704414f595d4349416a5953475a4559435f47494b4c4f04494547">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.doordash.com/store/symposium-caf-restaurant-lounge-georgina-667706/en-AU">
                                                        <Image src={Door} style="max-width: 45%; margin-top:8px;" width={106.65} height={51.78}
                                                             alt="Symposium Delivery via DoorDash"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Lindsay</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 449 Kent Street West, Lindsay K9V 6C3</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:705-328-2929">705-328-2929</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="afdcd6c2dfc0dcc6dac281c3c6c1cbdcced6efdcd6c2dfc0dcc6dac2cccec9ca81ccc0c2">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href=" https://www.doordash.com/store/symposium-cafe-restaurant-kawartha-lakes-1714895"
                                                       target="_blank">
                                                        <Image src={Door} style="max-width: 45%; margin-top:8px;" width={106.65} height={51.78}
                                                             alt="Symposium Delivery via DoorDash"/></a>
                                                    <br/>
                                                    <a href="https://feastify.com/listing/symposium-cafe-lindsay/">
                                                        <Image src={Feastifybela} alt="Symposium Delivery via Feastify" width={142.2} height={56}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Markham</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 9990 Kennedy Road, Markham L6C 0M4</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-927-9779">905-927-9779</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="b6c5cfdbc6d9c5dfc3db98dbd7c4ddded7dbf6c5cfdbc6d9c5dfc3dbd5d7d0d398d5d9db">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge-9990-kennedy-rd">
                                                        <Image src={Skip}  width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://order.ubereats.com/toronto/food-delivery/Symposium%20Cafe%20Restaurant%20(Markham)/Anu4AsBxTpSRnUI4Q-5_mA">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Milton</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 611 Holly Ave., Milton L9T 0K4</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-878-1777">905-878-1777</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="4033392d302f3329352d6e2d292c342f2e0033392d302f3329352d232126256e232f2d">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge-holly-avenue">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-milton/jWMbzhyoQZ2aJ1gs4cwpHw/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Mississauga
                                                    South</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 3055 Dundas Street West, Mississauga L5L 3R8</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-820-3100">905-820-3100</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href="">symposium.mississa<span
                                                                className="__cf_email__"
                                                                data-cfemail="7d081a1c0e120809153d0e04100d120e1408101e1c1b18531e1210">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-mississauga-dundas">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/ca/toronto/food-delivery/symposium-cafe-restaurant-mississauga-south/y7ThcHMiRu-RN7RhMI-whw">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Oakville</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 1500 Upper Middle Road, Oakville L6M 3G3</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-847-2200">905-847-2200</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="97e4eefae7f8e4fee2fab9f8f6fce1fefbfbf2d7e4eefae7f8e4fee2faf4f6f1f2b9f4f8fa">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-upper-middle-road">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-oakville/j8ZcocnHTCqDAJTMLggKSA/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Oshawa</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 2630 Simcoe Street North, Unit 7, Oshawa, Ontario L1L 0R1</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-440-4448">905-440-4448</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="f3808a9e839c809a869edd9c809b928492b3808a9e839c809a869e90929596dd909c9e">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/store/symposium-cafe-oshawa/NPOpRbdCQ9muMbYa48mgaA">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Stoney Creek</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 2247 Rymal Road East, Stoney Creek L8J 2V8</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-578-9900">905-578-9900</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="fd8e84908d928e948890d38e89929398849e8f989896bd8e84908d928e9488909e9c9b98d39e9290">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-rounge-rymal-road-east">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/hamilton/food-delivery/symposium-cafe-stoney-creek/Mhe0iRgvRZ6oWeKqUQ6AXw/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Thornhill</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 8187 Yonge Street, Thornhill L3T 2C6</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-881-2233">905-881-2233</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href="">sympos<span
                                                                className="__cf_email__"
                                                                data-cfemail="80e9f5edaef4e8eff2eee8e9ececc0f3f9edf0eff3e9f5ede3e1e6e5aee3efed">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href=" https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge-yonge-street"
                                                       target="_blank">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-thornhill/vIgOZ0iASYCwmXAAoEVJ3Q/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Waterdown</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 64 Hamilton Street North., Waterdown L8B 0E6</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:289-895-7860">289-895-7860</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="6f1c16021f001c061a0241180e1b0a1d0b0018012f1c16021f001c061a020c0e090a410c0002">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-hamilton-waterdown">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/hamilton/food-delivery/symposium-cafe-waterdown/2v_sdlQdQd-QY4vSkUxbqw/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="">Waterloo
                                                    Erbsville</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 668 Erb Street West, Waterloo N2T 2K8</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:519-749-4616">519-749-4616</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="05767c68756a766c70682b7264716077696a6a2b60776776736c69696045767c68756a766c7068666463602b666a68">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-waterloo-erb">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/kitchenerwaterloo/food-delivery/symposium-cafe-waterloo-erbsville/ODeew9xCS1a0fEcSy-I5FA/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Whitby</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 30 Broadleaf Avenue, Whitby L1R3N8 </span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-425-1111">905-425-1111</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="f083899d809f8399859dde879899849289b083899d809f8399859d93919695de939f9d">[email&#160;protected]</span></a>
                                                </p>
                                            </div>

                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-cafe-restaurant-and-lounge-broadleaf-avenue">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://order.ubereats.com/toronto/food-delivery/symposium-cafe-restaurant-whitby/kZYrhBnIQfmpGeh3XClDCw">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="row" style={{display: "inline-block", verticalAlign:"middle"}}>
                                            <div className="col-md-5" id={"bloc1"} style={{float:"left", width:"900px"}}>
                                                <h3><a href="" target="_blank">Woodbridge</a>
                                                </h3>
                                                <p className="location-info">
                                                    <span className="address"> 31 Colossus Drive, Woodbridge L4L 9K4</span>
                                                    <br/>
                                                        <br/>
                                                            <strong>Phone:</strong> <a href="tel:905-265-1099">905-265-1099</a>
                                                            <br/>
                                                                <strong>Email:</strong> <a
                                                                href=""><span
                                                                className="__cf_email__"
                                                                data-cfemail="d9aaa0b4a9b6aab0acb4f7aeb6b6bdbbabb0bdbebc99aaa0b4a9b6aab0acb4bab8bfbcf7bab6b4">[email&#160;protected]</span></a>
                                                </p>
                                            </div>
                                            <div className="col-md-3" id={"bloc2"} style={{float:"right"}}>
                                                <div className="delivery-logos">
                                                    <a href="https://www.skipthedishes.com/symposium-vaughan-woodbridge">
                                                        <Image src={Skip} width={142.2} height={55.69}
                                                             alt="Symposium Delivery via Skip the dishes"/></a>
                                                    <br/>
                                                        <a href="https://www.ubereats.com/en-CA/toronto/food-delivery/symposium-cafe-woodbridge/ST2UxnNQTgC9gqqHFlafiA/">
                                                            <Image src={Uber} alt="Symposium Delivery via Uber eats" width={142.2} height={35.55}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}