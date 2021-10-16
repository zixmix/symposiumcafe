import React from "react";
import Image from "next/image";
import Pic1 from "/images/galery/1453918885-garden-salad-with-jack-daniels-flat-iron-steak-symposium-cafe-restaurant--lounge.jpg"
import Pic2 from "/images/galery/1454533664-martini-purple-haze-mango-gin-vodka-olives-cocktail-symposium-cafe-restaurant-lounge.jpg"
import Pic3 from "/images/galery/1461168416-symposium-chicken-wings.jpg"
import Pic4 from "/images/galery/1461010700-salad-bean-and-quinoa-salad.jpg"
import Pic5 from "/images/galery/1461168137-chicken-parmesan.jpg"
import Pic6 from "/images/galery/1464523019-martini-summertime.jpg"
import Pic7 from "/images/galery/1495478423-great-appetizers-happy-hour.jpg"
import Pic8 from "/images/galery/1486055340-wine-&-milkshake-delicious-drinks.jpg"
import Pic9 from "/images/galery/1453918875-eggs-benedict-ham-home-fries-delicious-hollandaise-symposium-cafe-restaurant-breakfast.jpg"
import Pic10 from "/images/galery/1461168415-butter-chicken-rice-bowl.jpg"
import Pic11 from "/images/galery/1453918957-cafe-latte-milton-espresso-steamed-milk-coffeebreak-symposium-cafe-restaurant-lounge.jpg"
import Pic12 from "/images/galery/1464522878-delicious-brunch.jpg"
import Pic13 from "/images/galery/1461168415-crispy-chicken-wrap-with-salad.jpg"
import Pic14 from "/images/galery/1454533639-caffe-mocha-espresso-chocolate-whipped-cream-european-dessert-late-night-special-breakfast-club-sponsor.jpg"
import Pic15 from "/images/galery/1488917333-breakfast-in-ancaster.jpg"
import Pic16 from "/images/galery/1453918865-eggs-bacon-home-fries-toast-breakfast-brunch-delicious-symposium-cafe-restaurant-lounge-cambridge-georgetown.jpg"
import Pic17 from "/images/galery/1467919876-refreshing-sangria.jpg"
import Pic18 from "/images/galery/1464522878-brunch-with-yoda.jpg"
import Pic19 from "/images/galery/1461010700-wrap-chicken--crispy-garden-salad-brunch-lunch-healthy-symposium.jpg"
import Pic20 from "/images/galery/1453918902-pasta-rice-bowls-guacamole-wonton-lime-spicy-red-wine-tuesday-symposium-special.jpg"


export default function GalleryBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page margin-top-80">
                                <div className="row">
                                    <div className="col-lg-8" style={{float:"left", width:"700px"}}>
                                        <div className="gallery-content">
                                            <h1>Photo Gallery for Symposium Cafe Restaurants</h1><p>Browse the Symposium
                                            Cafe Restaurant photo gallery: there’s something for everyone: eggs benedict
                                            breakfasts and late night steaks, burgers, rich, frothy cappuccinos and
                                            refreshing, ice cold beer; decadent cheesecakes and light salads. So whether
                                            its fuelling up for your day, a social lunch, family dining occasions, or a
                                            business lunch or late night, weve got a local restaurant ready for you and
                                            a menu to meet your needs.</p>
                                        </div>
                                        <div className="gallery" itemScope itemType="http://schema.org/ImageGallery">
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1453918885-garden-salad-with-jack-daniels-flat-iron-steak-symposium-cafe-restaurant--lounge.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic1}
                                                        alt="steak salad chicken quinoa light meal "/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1454533664-martini-purple-haze-mango-gin-vodka-olives-cocktail-symposium-cafe-restaurant-lounge.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="403x403">
                                                    <Image
                                                        src={Pic2}
                                                        alt="creative martini vintage cocktail menu for girls night"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1461168416-symposium-chicken-wings.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic3}
                                                        alt="symposium chicken wings"/>
                                                </a>

                                            <br/>
                                            </figure>
                                            </div>
                                            <br/>
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1461010700-salad-bean-and-quinoa-salad.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="800x501">
                                                    <Image
                                                        src={Pic4}
                                                        alt="salad bean and quinoa salad"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject"style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1464523019-martini-summertime.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="600x564">
                                                    <Image
                                                        src={Pic5}
                                                        alt="martini summertime"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">

                                                <a href="https://symposiumcafe.com/images/gallery/1461168137-chicken-parmesan.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic6}
                                                        alt="chicken parmesan"/>
                                                </a>

                                            </figure>
                                            </div>
                                            <br/>
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1495478423-great-appetizers-happy-hour.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="578x573">
                                                    <Image
                                                        src={Pic7}
                                                        alt="great appetizers happy hour"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1453918875-eggs-benedict-ham-home-fries-delicious-hollandaise-symposium-cafe-restaurant-breakfast.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic8}
                                                        alt="eggs benedict hollandaise sauce best brunch "/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1486055340-wine-&-milkshake-delicious-drinks.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="961x960">
                                                    <Image
                                                        src={Pic9}
                                                        alt="wine & milkshake delicious drinks"/>
                                                </a>

                                            </figure>
                                            </div>
                                            <br/>
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1464522878-delicious-brunch.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="598x601">
                                                    <Image
                                                        src={Pic10}
                                                        alt="delicious brunch"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1461168415-butter-chicken-rice-bowl.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic11}
                                                        alt="butter chicken rice bowl"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1453918957-cafe-latte-milton-espresso-steamed-milk-coffeebreak-symposium-cafe-restaurant-lounge.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x649">
                                                    <Image
                                                        src={Pic12}
                                                        alt="cafe latte epresso steamed milk coffeebreak "/>
                                                </a>

                                            </figure>
                                            </div>
                                            <br/>
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1461168415-crispy-chicken-wrap-with-salad.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic13}
                                                        alt="crispy chicken wrap with salad"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1488917333-breakfast-in-ancaster.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="586x589">
                                                    <Image
                                                        src={Pic14}
                                                        alt="breakfast in ancaster"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1454533639-caffe-mocha-espresso-chocolate-whipped-cream-european-dessert-late-night-special-breakfast-club-sponsor.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="403x403">
                                                    <Image
                                                        src={Pic15}
                                                        alt="dessert night special breakfast club canada sponsor"/>
                                                </a>

                                            </figure>
                                            </div>
                                            <br/>
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1453918865-eggs-bacon-home-fries-toast-breakfast-brunch-delicious-symposium-cafe-restaurant-lounge-cambridge-georgetown.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <Image
                                                        src={Pic16}
                                                        alt="best breakfast bacon eggs benedict "/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1464522878-brunch-with-yoda.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="595x591">
                                                    <Image
                                                        src={Pic17}
                                                        alt="brunch with yoda"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1467919876-refreshing-sangria.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x735">
                                                    <Image
                                                        src={Pic18}
                                                        alt="refreshing sangria"/>
                                                </a>

                                            </figure>
                                            </div>
                                            <br/>
                                            <div style={{height:"300", float:"left", width:"700px", padding:"10px"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1461010700-wrap-chicken--crispy-garden-salad-brunch-lunch-healthy-symposium.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="960x540">
                                                    <Image
                                                        src={Pic19}
                                                        alt="wrap chicken  crispy garden salad brunch lunch healthy symposium"/>
                                                </a>

                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%", float:"left"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1453918902-pasta-rice-bowls-guacamole-wonton-lime-spicy-red-wine-tuesday-symposium-special.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x654">
                                                    <Image
                                                        src={Pic20}
                                                        alt="rice pasta bowls with wine pairing dining special"/>
                                                </a>

                                            </figure>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="widget yellow-bg" id="static">
                                            <div className="header-h2">
                                                <h2 className="text-center">Categories</h2>
                                            </div>
                                            <ul className="menu-categories">
                                                <li>
                                                    <a href="https://symposiumcafe.com/photos/beverages">Menu items</a>
                                                    <ul>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/beverages">Beverages</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/deserts">Desserts</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/food">Food</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/photos/decor">Decor</a>
                                                    <ul>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/photos/ajax">Locations</a>
                                                    <ul>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/ajax">Ajax</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/ancaster">Ancaster</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/aurora">Aurora</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/barrie">Barrie</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/bolton">Bolton</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/brantford">Brantford</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/cambridge">Cambridge</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/georgetown">Georgetown</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/guelph">Guelph</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/keswick">Keswick</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/lindsay">Lindsay</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/markham">Markham</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/milton">Milton</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/mississauga-south">Mississauga
                                                                South</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/oakville">Oakville</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/stoney-creek">Stoney
                                                                Creek</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/thornhill">Thornhill</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/waterdown">Waterdown</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/waterloo">Waterloo</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/woodbridge">Woodbridge</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/photos/symposium-fun">Special
                                                        events</a>
                                                    <ul>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/symposium-fun">Symposium
                                                                Fun</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/symposium-golf">Symposium
                                                                Golf</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/symposium-openings">Symposium
                                                                Openings</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://symposiumcafe.com/photos/symposium-support">Symposium
                                                                Support</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="https://symposiumcafe.com/photos/video">Video</a>
                                                    <ul>
                                                    </ul>
                                                </li>
                                            </ul>
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