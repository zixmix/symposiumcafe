import React from "react";

export default function GalleryBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12"  style={{width:"700px"}}>
                            <div className="page margin-top-80">
                                <div className="row">
                                    <div className="col-lg-8">
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
                                            <div style={{width:"250px", float:"left"}}>
                                            <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" >
                                                <a href="https://symposiumcafe.com/images/gallery/1467919875-bourbon-martini.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x735">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1467919875-bourbon-martini.jpg"
                                                        alt="bourbon martini" />
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Special order Bourbon Martinis
                                                    <br/>
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            </div>
                                            <div style={{width:"200px", float:"inline"}}>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject" style={{width:"33%"}}>
                                                <a href="https://symposiumcafe.com/images/gallery/1486055340-rich-espresso.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="592x599">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1486055340-rich-espresso.jpg"
                                                        alt="rich espresso"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Espresso first
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            </div>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1453918909-salad-shrimp-appetizer-light-meal-garlic-seasoning-symposium-cafe-restaurant-lounge-milton-markham.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1453918909-salad-shrimp-appetizer-light-meal-garlic-seasoning-symposium-cafe-restaurant-lounge-milton-markham.jpg"
                                                        alt="add shrimp chicken steak to a salad lunch menu"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Add shrimp to any salad for a green and protein meal
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1453918957-cake-showcase-dessert-squares-symposium-guelph-cafe-restaurant-lounge-cherry-caramel-chocolate.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1453918957-cake-showcase-dessert-squares-symposium-guelph-cafe-restaurant-lounge-cherry-caramel-chocolate.jpg"
                                                        alt="cake showcase dessert squares date night restaurant"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Dessert showcase with cakes and dessert squares welcomes guests at
                                                    Symposium Guelph
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1461168146-monday-1--feature.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="403x403">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1461168146-monday-1--feature.jpg"
                                                        alt="monday 1  feature"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Cheeseburger with Mushrooms, Restaurant Dining
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1461168921-wine-bottles-in-display-unit.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1461168921-wine-bottles-in-display-unit.jpg"
                                                        alt="wine bottles in display unit"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Wine bar, restaurant dining
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1453918875-eggs-benedict-ham-home-fries-delicious-hollandaise-symposium-cafe-restaurant-breakfast.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1453918875-eggs-benedict-ham-home-fries-delicious-hollandaise-symposium-cafe-restaurant-breakfast.jpg"
                                                        alt="eggs benedict hollandaise sauce best brunch "/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Eggs Benedict: poached eggs and peameal on an english muffin with a
                                                    creamy Hollandaise
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1461010700-salad-bean-and-quinoa-salad.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="800x501">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1461010700-salad-bean-and-quinoa-salad.jpg"
                                                        alt="salad bean and quinoa salad"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Quinoa and Bean Salad – It’ll be your new favourite
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1454533664-martini-purple-haze-mango-gin-vodka-olives-cocktail-symposium-cafe-restaurant-lounge.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="403x403">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1454533664-martini-purple-haze-mango-gin-vodka-olives-cocktail-symposium-cafe-restaurant-lounge.jpg"
                                                        alt="creative martini vintage cocktail menu for girls night"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Purple Haze Classic Vodka Mango Passion
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1454533679-symposium-wines-with-logo.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="376x230">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1454533679-symposium-wines-with-logo.jpg"
                                                        alt="large wine menu selection great vintages great value"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Great Wines & Great Value
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1486055114-best-blueberry-cheesecake-milton.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="598x597">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1486055114-best-blueberry-cheesecake-milton.jpg"
                                                        alt="best blueberry cheesecake milton"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Blueberry Cheesecake at Symposium Milton
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1454533662-martini-mango-orange-strawberry-cocktail-symposium-cafe-restaurant-lounge-bar-happy-hour.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x649">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1454533662-martini-mango-orange-strawberry-cocktail-symposium-cafe-restaurant-lounge-bar-happy-hour.jpg"
                                                        alt="special martini drinks happy hour feature menu"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Mango passion: strawberry, mango, & vodka
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1461010700-breakfast-brunch-gourmet-homefries-pork-pineapple-orange-juice.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="517x702">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1461010700-breakfast-brunch-gourmet-homefries-pork-pineapple-orange-juice.jpg"
                                                        alt="breakfast brunch gourmet homefries pork pineapple orange juice"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Treat yourself to a Gourmet Breakfast
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1454533639-cappuccino-latte-espresso-chocolate-fudge-brownie-cheesecake-dessert-sharing-symposium-cafe-restaurant-lounge.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x654">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1454533639-cappuccino-latte-espresso-chocolate-fudge-brownie-cheesecake-dessert-sharing-symposium-cafe-restaurant-lounge.jpg"
                                                        alt="desserts for sharing cappuccino caffe latte coffee lounge "/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Date Night: Apps, Entrees, and Dessert to Share
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1453918902-pasta-rice-bowls-guacamole-wonton-lime-spicy-red-wine-tuesday-symposium-special.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x654">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1453918902-pasta-rice-bowls-guacamole-wonton-lime-spicy-red-wine-tuesday-symposium-special.jpg"
                                                        alt="rice pasta bowls with wine pairing dining special"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Pasta and Rice Bowl Specials on Tuesdays with Glasses of Wine
                                                    starting at $4
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1454533698-cake-showcase-dessert-squares-symposium.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="304x277">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1454533698-cake-showcase-dessert-squares-symposium.jpg"
                                                        alt="beautiful cake display dessert options"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Come visit the Dessert Showcase
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1453918885-garden-salad-with-jack-daniels-flat-iron-steak-symposium-cafe-restaurant--lounge.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1453918885-garden-salad-with-jack-daniels-flat-iron-steak-symposium-cafe-restaurant--lounge.jpg"
                                                        alt="steak salad chicken quinoa light meal "/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Garden Salad with Steak: greens and proteins for a lighter meal
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1461168189-seafood-pasta-dinner.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="980x653">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1461168189-seafood-pasta-dinner.jpg"
                                                        alt="seafood pasta dinner"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Seafood Pasta Dinner, Restaurant
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1464522892-fish-tacos.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="604x488">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1464522892-fish-tacos.jpg"
                                                        alt="fish tacos"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Fish tacos with tangy Thai and strawberry salsa
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                            <figure itemProp="associatedMedia" itemScope
                                                    itemType="http://schema.org/ImageObject">
                                                <a href="https://symposiumcafe.com/images/gallery/1477339468-candy-apple-martini.jpg"
                                                   itemProp="contentUrl" className="thumbnail" data-size="568x691">
                                                    <img
                                                        src="https://symposiumcafe.com/images/gallery/thumbs/1477339468-candy-apple-martini.jpg"
                                                        alt="candy apple martini"/>
                                                </a>
                                                <figcaption className="gallery-description"
                                                            itemProp="caption description">
                                                    Candy Apple
                                                    <span itemProp="copyrightHolder">Symposium Cafe Restaurant</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                                            <div className="pswp__bg"></div>
                                            <div className="pswp__scroll-wrap">
                                                <div className="pswp__container">
                                                    <div className="pswp__item"></div>
                                                    <div className="pswp__item"></div>
                                                    <div className="pswp__item"></div>
                                                </div>
                                                <div className="pswp__ui pswp__ui--hidden">
                                                    <div className="pswp__top-bar">
                                                        <div className="pswp__counter"></div>
                                                        <button className="pswp__button pswp__button--close"
                                                                title="Close (Esc)"></button>
                                                        <button className="pswp__button pswp__button--share"
                                                                title="Share"></button>
                                                        <button className="pswp__button pswp__button--fs"
                                                                title="Toggle fullscreen"></button>
                                                        <button className="pswp__button pswp__button--zoom"
                                                                title="Zoom in/out"></button>
                                                        <div className="pswp__preloader">
                                                            <div className="pswp__preloader__icn">
                                                                <div className="pswp__preloader__cut">
                                                                    <div className="pswp__preloader__donut"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                                        <div className="pswp__share-tooltip"></div>
                                                    </div>
                                                    <button className="pswp__button pswp__button--arrow--left"
                                                            title="Previous (arrow left)">
                                                    </button>
                                                    <button className="pswp__button pswp__button--arrow--right"
                                                            title="Next (arrow right)">
                                                    </button>
                                                    <div className="pswp__caption">
                                                        <div className="pswp__caption__center"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
            </section>
        </div>

    )
}