import React from "react";
import Image from "next/image";
import Gluten from "/images/meni/gluten.png"
import Vegan from "/images/meni/vegan.png"
import Koca from "/images/meni/koca.jpg"
import Kola from "/images/meni/kola.jpg"
import Sprite from "/images/meni/sprite.jpg"
import Kanada from "/images/meni/canada.jpg"
import Nestea from "/images/meni/nestea.jpg"

export default function MenuBody()
{
    return(
        <div>
            <section>
                <div className="container">
                    <div className="page margin-top-80">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contest-errors">
                                </div>
                                <div className="row">
                                    <div className="col-md-8" style={{width:"750px", float:"left"}}>
                                        <div className="regular-menu">
                                            <div className="appetizers">
                                                <div className="full-menu"><h2>APPETIZERS</h2></div>
                                                <div className="left-menu">
                                                    <ul>
                                                        <li><strong>Calamari</strong> <p>Lightly breaded, golden brown
                                                            rings with cocktail sauce 15.95 (410 Cals)</p></li>
                                                        <li><strong>Chicken Quesadilla</strong> <p>Grilled chicken,
                                                            green peppers, onions, mozzarella and cheddar cheese in a
                                                            tomato basil tortilla. Served with sour cream & salsa. 16.95
                                                            (720 Cals)</p></li>
                                                        <li><strong>Steak Bites</strong> <p>Tender, pan seared morsels
                                                            of beef in an Asian inspired marinade; with Korean BBQ
                                                            dipping sauce. 19.95 (820 Cals)</p><p>

                                                            <Image src={Gluten} width={16} height={16} alt="Gluten free icon"
                                                            className="img-responsive" style="max-width:16px; display: inline-block"/>

                                                            Gluten
                                                            friendly without Korean BBQ dipping sauce (reduce 60 Cals)
                                                        </p></li>
                                                        <li><strong>Chicken Wings</strong> <p> A full pound of plump
                                                            roaster wings with celery, carrot sticks and blue cheese
                                                            dip. Add your choice of BBQ (60 Cals) or Honey Garlic (60
                                                            Cals), Hot (10 Cals) or Sweet & Spicy Thai (70 Cals). 16.95
                                                            (570 Cals) </p></li>
                                                        <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                 className="img-responsive"
                                                                 style="max-width:16px; display: inline-block"/> <strong>Warm
                                                            Spinach Dip</strong> <p>Topped with feta & cheddar cheese.
                                                            Served with toasted pita bread. 14.95 (1050 Cals)</p></li>
                                                        <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                 className="img-responsive"
                                                                 style="max-width:16px; display: inline-block"/> <strong>Golden
                                                            Battered Portobello Mushrooms</strong> <p>Fresh cut
                                                            Portobello mushroom caps dipped in batter and fried crispy
                                                            golden. Served with sriracha mayo. 13.95 (520 Cals) </p>
                                                        </li>
                                                        <li><strong> Classic Bacon & Onion Perogies </strong>
                                                            <p> Traditional pan fried potato onion perogies topped with
                                                                caramelized onions and bacon. Garnished with green
                                                                onions and served with sour cream (9 pieces) 12.95 (630
                                                                Cals) </p></li>
                                                    </ul>
                                                    <div className="bordered-segment"><h3>Flatbread & Poutine</h3>
                                                        <ul>
                                                            <li>
                                                                <Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                     className="img-responsive"
                                                                     style="max-width:16px; display: inline-block"/>
                                                                <strong>Bruschetta Flatbread</strong> <p>Diced tomatoes,
                                                                onions, seasonings, mozzarella and goat cheese with a
                                                                balsamic reduction. 13.45 (830 Cals)</p></li>
                                                            <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                     className="img-responsive"
                                                                     style="max-width:16px; display: inline-block"/>
                                                                <strong>Grilled Vegetable Flatbread</strong> <p> Grilled
                                                                zucchini, sautéed mushrooms & onions, roasted red
                                                                peppers, seasoned tomatoes, mozzarella & goat cheese
                                                                with a balsamic drizzle. 14.95 (610 Cals)</p></li>
                                                            <li><strong>Classic Poutine</strong> <p>A generous portion
                                                                of french fries topped with traditional cheese curds and
                                                                beef gravy. 10.95 (490 Cals)</p></li>
                                                            <li><strong>Butter Chicken Poutine</strong> <p> Crispy
                                                                french fries smothered in our delicious butter chicken
                                                                sauce. 13.95 (760 Cals) </p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="right-menu"><h2>SOUPS</h2>
                                                    <ul>
                                                        <li><strong>French Onion</strong> 8.95 (350 Cals)</li>
                                                        <li><strong>Broccoli & Cheddar</strong> 7.95 (360 Cals)</li>
                                                        <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                 className="img-responsive"
                                                                 style="max-width:16px; display: inline-block"/> <strong>Tuscan
                                                            Tomato Bean Soup</strong> <p>Roasted tomatoes, vegetables &
                                                            hearty beans in veggie broth. 6.95 (120 Cals)</p></li>
                                                    </ul>
                                                    <h3>SALADS</h3> <p><strong><small>Bowl salads served with choice of
                                                        Housemade Dressings: Ranch (180 Cals), Creamy Garlic & Parmesan
                                                        (430 Cals), Spicy Italian Vinaigrette (370 Cals) or Clover Honey
                                                        & Mustard Seed Vinaigrette (40 Cals)</small></strong></p>
                                                    <ul>
                                                        <li><Image src={Gluten} width={16} height={16}
                                                                 alt="Gluten free icon" className="img-responsive"
                                                                 style="max-width:16px; display: inline-block"/> <strong>Algarve
                                                            Chicken Salad Bowl</strong> <p>Marinated grilled chicken
                                                            thighs, grape tomatoes, black beans, sliced mushrooms & pea
                                                            shoots, served over crisp romaine lettuce. 22.95 (570
                                                            Cals)</p></li>
                                                        <li><strong>Teriyaki Salmon Salad Bowl </strong> <p>Grilled
                                                            Atlantic salmon loin with our signature teriyaki glaze,
                                                            joined by ripe tomatoes, cucumber, broccoli, sliced
                                                            mushrooms, green onion, pea shoots & crispy wontons on a bed
                                                            of romaine lettuce. 23.95 (480 Cals)</p></li>
                                                        <li><Image src={Gluten} width={16} height={16}
                                                                 alt="Gluten free icon" className="img-responsive"
                                                                 style="max-width:16px; display: inline-block"/> <strong>BBQ
                                                            Chicken Cobb Salad Bowl </strong> <p>Grilled BBQ chicken
                                                            breast, crumbled bacon, grape tomatoes, cucumbers, pea
                                                            shoots, hardboiled egg & goat cheese. Served on crisp
                                                            romaine lettuce. 23.95 (1060 Cals)</p></li>
                                                        <li><Image src={Gluten} width={16} height={16}
                                                                 alt="Gluten free icon" className="img-responsive"
                                                                 style="max-width:16px; display: inline-block"/> <strong>Mediterranean
                                                            Salad</strong> <p><Image src={Vegan} width={16} hidden={16}
                                                                                   alt="Vegan icon"
                                                                                   className="img-responsive"
                                                                                   style="max-width:16px; display: inline-block"/> Crisp
                                                            romaine lettuce tossed with homemade Mediterranean style
                                                            dressing; topped with grape tomatoes, cucumber, green
                                                            peppers, red onions, Kalamata olives & feta cheese. 14.45
                                                            (340 Cals)</p></li>
                                                    </ul>
                                                    <div className="bordered-segment-none text-center"><p><strong>Add
                                                        Protein to your Mediterranean or Caesar Salad:</strong></p><p>
                                                        <strong>Salmon 8.00 (+ 250 Cals) </strong> <strong>Steak 7.00 (+
                                                        190 Cals)</strong> <br/><strong>Chicken 6.00 (+ 230
                                                        Cals)</strong></p></div>
                                                    <ul>
                                                        <li><strong>Caesar Salad</strong> <p>Crisp romaine salad with
                                                            real bacon bits, croutons & our housemade creamy garlic and
                                                            parmesan dressing. 13.95 (430 Cals)</p></li>
                                                    </ul>
                                                    <div className="background-black-menu"><strong>No substitutions will
                                                        be made for ingredients.</strong></div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="sandwiches">
                                                <div className="full-menu"><h2>SANDWICHES </h2> <p><strong>
                                                    <small>All Sandwich Section Items served with Mediterranean Side Salad
                                                    <Image src={Gluten} width={16} height={16} alt="Gluten free icon"
                                                        className="img-responsive" style={{maxWidth:"16px", display:"inline-block"}}/>
                                                    or your choice:</small> </strong> <br/>
                                                    <strong>
                                                        <small>Caesar Salad (- 60 Cals), Fries
                                                    <Image src={Gluten} width={16} height={16}
                                                                      alt="Gluten free icon" className="img-responsive"
                                                                      style={{maxWidth:"16px", display:"inline-block"}}/>
                                                            (+ 120 Cals) or Housemade Tomato Bean Tuscan Soup (- 40 Cals).
                                                        Substitutions: Sweet Potato Fries, Onion Rings (- 20 Cals), or
                                                        French Onion Soup (+ 200 Cals) additional 1.50 each. Substitute
                                                        classic poutine for french fries add 3.00 (240 Cals)</small>
                                                </strong></p>
                                                    <ul className="list-space">
                                                        <li><strong> California Chicken Sandwich </strong> on a gourmet
                                                            bun. Grilled chicken breast layered with sriracha mayo,
                                                            guacamole, black beans, cheddar, bacon, lettuce, tomato, red
                                                            onion and pickles. 19.95 (860 Cals)
                                                        </li>
                                                        <li><strong>Chicken Bacon Club</strong> on a home style ciabatta
                                                            bun. Delicious grilled chicken breast, crispy bacon, lettuce
                                                            & tomato. 18.45 (450 Cals)
                                                        </li>
                                                        <li><strong>Fish Tacos</strong> Lightly seasoned, delicately
                                                            pan-fried Haddock fillet tucked into two warm tortilla
                                                            shells with Asian cucumber slaw, shredded lettuce & piquant
                                                            Thai glaze. 17.45 (680 Cals)
                                                        </li>
                                                        <li><strong>Persian Burrito </strong> Choice of Steak, Chicken
                                                            or Vegetarian mixed with a Persian inspired combination of
                                                            green peppers, onions, tomatoes and spices. Sauteed with
                                                            rice, stuffed into a tortilla and grilled. Served with
                                                            choice of side. <br/>Persian Steak Burrito 19.95 (920
                                                                Cals) <br/> Persian Chicken Burrito 18.95 (930
                                                                Cals) <br/> <Image src={Vegan} width={16} hidden={16}
                                                                                 alt="Vegan icon"
                                                                                 className="img-responsive"
                                                                                 style={{maxWidth:"16px", display:"inline-block"}}/> Persian
                                                                    Vegetarian Burrito 17.95 (800 Cals)</li>
                                                        <li><strong>Chicken Parmesan Sandwich</strong> on a gourmet bun.
                                                            Tender chicken breast rolled in our housemade breading,
                                                            lightly fried and tossed in marinara sauce; topped with
                                                            sautéed mushrooms, roasted red peppers and mozzarella. 18.45
                                                            (800 Cals)
                                                        </li>
                                                        <li><strong>Chicken Caesar Wrap in a tomato basil
                                                            tortilla.</strong> Grilled chicken breast strips with
                                                            romaine lettuce, real bacon bits & creamy caesar dressing.
                                                            17.45 (700 Cals)
                                                        </li>
                                                    </ul>
                                                    <div className="bordered-segment-none"><h2>BURGERS</h2>
                                                        <ul className="centered-list">
                                                            <li><strong>Symposium Burger</strong> <p>Certified Angus
                                                                Chuck double burger (two 4oz patties) served with
                                                                Symposiums signature burger sauce. 15.95 (480
                                                                Cals). <br/> Single Patty Burger 11.95 (360 Cals) </p>
                                                            </li>
                                                            <li><p> Served on a toasted Bun and topped with lettuce,
                                                                tomato, pickle and onions. <strong>Includes
                                                                    Mediterranean Salad</strong> <Image
                                                                    src={Gluten} width={16} height={16}
                                                                    alt="Gluten free icon" className="img-responsive"
                                                                    style={{maxWidth:"16px", display:"inline-block"}}/></p>
                                                            </li>
                                                            <li><Image src={Gluten} width={16} height={16}
                                                                     alt="Gluten free icon" className="img-responsive"
                                                                     style={{maxWidth:"16px", display:"inline-block"}}/>
                                                                <strong>Beyond Meat Burger</strong> <p><Image
                                                                    src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                className="img-responsive"
                                                                style={{maxWidth:"16px", display:"inline-block"}}/> 6 oz
                                                                plant protein Vegetarian Burger. 16.95 (380 Cals)</p>
                                                            </li>
                                                        </ul>
                                                        <div className="clearfix"></div>
                                                        <ul className="four-column-list">
                                                            <li><strong>PICK YOUR CHEESE </strong> <p>Mozzarella (80
                                                                Cals)</p><p>Cheddar (110 Cals)</p><p>Swiss (110
                                                                Cals)</p><p>1.45 each</p></li>
                                                            <li><strong>VEGGIES</strong> <p>Sautéed Onions (20 Cals)</p>
                                                                <p>Sautéed Mushrooms (20 Cals)</p><p>Roasted Zucchini
                                                                    (20 Cals)</p><p>Hot Peppers (20 Cals)</p><p>.95
                                                                    each</p></li>
                                                            <li><strong>A LITTLE EXTRA FLAVOUR</strong> <p>Extra Patty
                                                                4.00 (240 Cals)</p><p>Beyond Meat Patty 6.25 (120
                                                                Cals)</p><p>Peameal Bacon 1.75 (40 Cals)</p><p>Bacon
                                                                1.45 (180 Cals)</p><p>Ham 1.45 (140 Cals)</p></li>
                                                            <li><strong>TOP IT OFF 1.25 each</strong> <p>Jack Daniel’s
                                                                Sauce (60 Cals)</p><p>Guacamole (90 Cals)</p><p>3 Onion
                                                                Rings (60 Cals)</p><p>Housemade Coleslaw (60 Cals)</p>
                                                                <p>Portobello Mushrooms (30 Cals)</p><p>Housemade
                                                                    Bruschetta Mix (70 Cals)</p></li>
                                                        </ul>
                                                        <div className="clearfix"></div>
                                                        <p><small>*gluten free bun available on request</small></p><p>
                                                            <small>Includes: Mediterranean Salad <Image
                                                                src={Gluten} width={16} height={16} alt="Gluten free icon"
                                                                className="img-responsive"
                                                                style={{maxWidth:"16px", display:"inline-block"}}/> OR your
                                                                choice of: Caesar Salad (- 60 Cals), Fries <Image
                                                                    src={Gluten} width={16} height={16}
                                                                    alt="Gluten free icon" className="img-responsive"
                                                                    style={{maxWidth:"16px", display:"inline-block"}}/> (+
                                                                    180 Cals) or Housemade Tuscan Tomato Bean Soup (- 40
                                                                    Cals). Substitute classic poutine for french fries
                                                                    add 3.00 (240 Cals)</small></p></div>
                                                    <p><small>Adults and youth (ages 13 and older) need an average of
                                                        2,000 calories a day, and children (ages 4 to 12) need an
                                                        average of 1,500 calories a day. However, individual needs vary.
                                                        Any add-ons or substitutions add indicated calories to total
                                                        calorie count. <Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                                            className="img-responsive"
                                                                            style={{maxWidth:"16px", display:"inline-block"}}/> indicates
                                                            vegetarian. All items identified with <Image
                                                            src={Gluten} width={16} height={16} alt="Gluten free icon"
                                                                className="img-responsive"
                                                                style={{maxWidth:"16px", display:"inline-block"}}/> are
                                                                considered gluten friendly; however, the possibility of
                                                                cross contact with gluten items does exist. Please
                                                                notify management if you have allergies.</small></p>
                                                    <hr/><p>At this time only these menu items are being offered to our
                                                        Symposium guests. Specials offers, daily features, or promotions
                                                        – unless offered by the individual location – are not valid nor
                                                        available until further notice. We thank you for your
                                                        understanding and ongoing support. All menu items subject to
                                                        availability. Prices subject to change.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="regular-menu">
                                            <div className="full-menu"><h2>BOWLS</h2></div>
                                            <div className="left-menu">
                                                <ul>
                                                    <li><strong>Teriyaki Chicken Rice Bowl </strong> <em> (Ideal
                                                        pairing: Sauvignon Blanc)</em> <p>Succulent chunks of chicken
                                                        breast, stir-fried in gingery teriyaki sauce, on a bed of
                                                        basmati rice, vegetables & pineapple with crisp green onion &
                                                        sesame seeds. 19.95 (1050 Cals)</p></li>
                                                    <li><strong>Butter Chicken Rice Bowl </strong> <em> (Ideal pairing:
                                                        Chardonnay)</em> <p>Juicy chunks of boneless chicken breast and
                                                        caramelized onions simmered in sweet tomato & curried cream.
                                                        Served over basmati rice with toasted pita. 18.95 (1320
                                                        Cals) </p></li>
                                                    <li><strong>Steak Stir-Fry Bowl</strong> <em>(Ideal pairing: Pinot
                                                        Noir)</em> <p>Pan fried steak bites, green pepper, onions &
                                                        tomatoes with our garlic sauce drizzle over basmati rice. 19.95
                                                        (920 Cals)</p></li>
                                                    <li><strong>Chicken Stir-Fry Bowl</strong> <em>(Ideal pairing:
                                                        Chardonnay) </em> <p>Sautéed, diced marinated chicken, bell
                                                        peppers, tomatoes, onions, and cilantro with our garlic sauce
                                                        drizzle over basmati rice. 18.95 (930 Cals)</p></li>
                                                    <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                             className="img-responsive"
                                                             style={{maxWidth:"16px", display:"inline-block"}}/> <strong>Vegetarian
                                                        Stir-Fry Bowl </strong> <em>(Ideal pairing: Pinot Noir)</em><p>A
                                                        flavourful mix of pan fried portobello mushrooms, black beans,
                                                        bell peppers, tomatoes, red onions and cilantro with our garlic
                                                        sauce drizzle over basmati rice. 17.95 (800 Cals)</p></li>
                                                    <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                             className="img-responsive"
                                                             style={{maxWidth:"16px", display:"inline-block"}}/> <strong>Mediterranean
                                                        Zucchini Noodle Bowl</strong> <em>(Ideal pairing: Sauvignon
                                                        Blanc)</em> <p>Spiralized, fresh zucchini noodles sautéed in
                                                        olive oil with grape tomatoes, Kalamata olives & feta cheese.
                                                        Served with garlic bread. 16.95 (480 Cals)</p><p><strong>Add
                                                        Protein to your Mediterranean Zucchini Noodle Bowl:</strong>
                                                        <br/>Chicken 6.00 (230 Cals) Steak 7.00 (190 Cals) <br/>Salmon
                                                            8.00 (250 Cals)</p></li>
                                                </ul>
                                                <h3>ENTREES </h3>
                                                <ul>
                                                    <li><strong>Fire Grilled Jack Daniel’s Petit Filet </strong> <em>(Ideal
                                                        pairing: Tempranillo)</em> <p>9 oz petit filet of beef, grilled,
                                                        sliced and fanned out on the plate. Brushed with our signature
                                                        J.D. BBQ glaze, sided by roasted potatoes & seasonal vegetables.
                                                        25.95 (860 Cals) </p><p><strong> Add Wild Mushroom
                                                        Demi-Glace</strong> 3.50 (45 Cals) <br/></p></li>
                                                    <li><strong>Chicken Souvlaki Dinner</strong> <em> (Ideal pairing:
                                                        Pinot Grigio)</em> <p> Garlic, lemon and oregano marinated
                                                        chicken on skewers. With salad, rice and tzatziki sauce. 23.45
                                                        (830 Cals) </p></li>
                                                    <li><strong>Chicken Parmesan</strong> <em>(Ideal pairing:
                                                        Valpolicella)</em> <p>Lightly breaded chicken breast covered in
                                                        marinara sauce and mozzarella. With fettuccine noodles. 22.95
                                                        (1690 Cals)</p></li>
                                                </ul>
                                            </div>
                                            <div className="right-menu"><h3>Pasta</h3>
                                                <ul>
                                                    <li><strong>Salmon & Spinach Fettuccine</strong> <em>(Ideal pairing:
                                                        Rosé)</em> <p>Flaked Atlantic salmon with spinach tossed in a
                                                        rose sauce with fettuccine noodles & served with garlic toast.
                                                        23.95 (1290 Cals) <br/><Image src={Gluten} width={16} height={16}
                                                                                   alt="Gluten free icon"
                                                                                   className="img-responsive"
                                                                                   style={{maxWidth:"16px", display:"inline-block"}}/> Substitute
                                                            rice noodles. 23.95 (1220 Cals)</p></li>
                                                    <li><strong> Penne Bolognese</strong> <em>(Ideal pairing:
                                                        Montepulciano)</em> <p>Ground sirloin, braised root vegetables,
                                                        roasted tomatoes over penne noodles with garlic toasted
                                                        baguette. 18.95 (1440 Cals)</p></li>
                                                    <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                             className="img-responsive"
                                                             style={{maxWidth:"16px", display:"inline-block"}}/> <strong>Spinach
                                                        & Mushroom Carbonara </strong> <em>(Ideal pairing: Merlot)</em>
                                                        <p>Sautéed spinach, mushrooms tossed with fettuccine in parmesan
                                                            cream made with eggs. 17.95 (1160 Cals)</p></li>
                                                    <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                             className="img-responsive"
                                                             style={{maxWidth:"16px", display:"inline-block"}}/> <strong>Fettuccine
                                                        Alfredo</strong> <em>(Ideal pairing: Chardonnay)</em> <p>Fresh
                                                        mushrooms with al dente noodles tossed in housemade Alfredo
                                                        sauce. 17.95 (1640 Cals) <br/>Substitute rice noodles. (1520
                                                            Cals)</p></li>
                                                    <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                             className="img-responsive"
                                                             style={{maxWidth:"16px", display:"inline-block"}}/> <strong>Vegetarian
                                                        Pad Thai </strong> <em>(Ideal pairing: Shiraz)</em> <p>Spicy Pad
                                                        Thai with julienned vegetables & rice noodles. Topped with
                                                        scrambled eggs and peanuts. 18.95 (1380 Cals)</p><p><strong>Add
                                                        Protein to your Fettuccine Alfredo or Vegetarian Pad
                                                        Thai: </strong> <br/>Chicken 6.00 (230 Cals) Steak 7.00 (190
                                                        Cals) <br/>Salmon 8.00 (250 Cals)</p></li>
                                                </ul>
                                                <div className="bordered-segment">
                                                    <ul>
                                                        <li><strong>Rib Dinner </strong> <em>(Ideal pairing: Cabernet
                                                            Sauvignon)</em> <p>A full rack of “fall off the bone” back
                                                            ribs basted in BBQ sauce: served with crisp french fries &
                                                            coleslaw. 29.95 (2400 Cals)</p></li>
                                                        <li><strong>Ribs & Wings Dinner </strong> <em>(Ideal pairing:
                                                            Cabernet Sauvignon)</em> <p>A half rack of our delicious BBQ
                                                            back ribs with 1 pound of plump roaster wings tossed in your
                                                            choice of sauce. Served with crisp french fries and
                                                            coleslaw. 28.95 (2700 Cals)</p></li>
                                                    </ul>
                                                </div>
                                                <ul>
                                                    <li><strong>Portuguese Style Chicken Dinner</strong> <em>(Ideal
                                                        pairing: Sauvignon Blanc)</em> <p>Marinated chicken grilled to
                                                        perfection and served with roast potatoes and seasonal
                                                        vegetables. 23.45 (930 Cals)</p></li>
                                                    <li><strong>Teriyaki Grilled Salmon</strong> <em>(Ideal pairing:
                                                        Chardonnay)</em> <p>Grilled Atlantic salmon with gingery
                                                        teriyaki sauce, crisp green onion and sesame seeds. Served with
                                                        rice and vegetables. 24.95 (1080 Cals)</p></li>
                                                    <li><strong>Schnitzel Cutlets</strong> <em>(Ideal pairing:
                                                        Chardonnay)</em> <p> Hand breaded, tender pork cutlets topped
                                                        with onion infused country gravy. Sided with roast potatoes and
                                                        local vegetables. 22.95 (1030 Cals)</p></li>
                                                </ul>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="full-menu"><h2>“MEAT” AND POTATOES</h2> <p
                                                className="text-gray"> Served with a side of crispy french fries and
                                                housemade coleslaw. <br/>Substitute classic poutine for french fries add
                                                    3.00 (240 Cals)</p>
                                                <ul>
                                                    <li><Image src={Vegan} width={16} hidden={16} alt="Vegan icon"
                                                             className="img-responsive"
                                                             style={{maxWidth:"16px", display:"inline-block"}}/> <strong>Portobello
                                                        Mushrooms and Fries</strong> <p> Plump portobello mushroom caps
                                                        battered and golden fried. Served with sriracha mayo. 16.95 (980
                                                        Cals)</p></li>
                                                    <li><strong>Steak Bites and Fries</strong> <p>Pan seared in Asian
                                                        inspired marinade with Korean BBQ dipping sauce. 21.95 (1100
                                                        Cals)</p></li>
                                                    <li><strong>Chicken Wings and Fries</strong> <p>One full pound of
                                                        plump roasters wings with your choice of sauce. 19.95 (1190
                                                        Cals)</p></li>
                                                    <li><strong>Chicken Tenders and Fries</strong> <p> Hand breaded,
                                                        seasoned chicken tenders with sriracha mayo. 17.95 (1670
                                                        Cals)</p></li>
                                                    <li><strong>Calamari and Fries</strong> <p>Lightly breaded rings,
                                                        cooked golden brown. Served with cocktail sauce. 16.95 (690
                                                        Cals)</p></li>
                                                    <li><strong>Fish and Chips </strong> <p>2-Piece English Style
                                                        battered Haddock fillets. 17.95 (1400 Cals) <strong>Add a third
                                                            piece</strong> 7.00 (560 Cals)</p></li>
                                                </ul>
                                                <h3>BEVERAGES</h3>
                                                <div className="background-black-menu"><strong>SEE OUR BAR MENU for
                                                    WINE, BEER and COCKTAILS</strong></div>
                                            </div>
                                            <div className="left-menu" style={{float:"left", width:"50%"}}>
                                                <ul>
                                                    <li><strong>Fruit Freezies</strong> Fresh fruit blended with ice.
                                                        4.95 <p> Select one
                                                            fruit or create your own unique combination of Strawberry
                                                            (40 Cals), Banana (100 Cals), Raspberry (60 Cals), Blueberry
                                                            (70 Cals), Blackberry (50 Cals) or Pineapple (60 Cals)</p>
                                                    </li>
                                                    <li>
                                                        <strong>European Soda</strong> A Symposium Favourite! <p
                                                        style={{display:"inline-block"}}> A light and
                                                        refreshing soda beverage in delicious fruit flavours including
                                                        Peach, Mango, Strawberry, Raspberry & Kiwi. Ask for your
                                                        favourite. 3.95 (80 Cals) </p></li>
                                                </ul>
                                            </div>

                                            <div className="right-menu" style={{float:"right", width:"50%"}}>
                                                <ul>
                                                    <li><strong>Evian Spring Water</strong> (330ml) 3.45 (0 Cals)</li>
                                                    <li><strong>Perrier Mineral Water</strong> (330ml) 3.45 (0 Cals)
                                                    </li>
                                                    <li><strong>San Pellegrino Sparkling</strong> (750 ml) 6.45 (0 Cals)
                                                    </li>
                                                    <li><strong>Pop</strong> Coke (140 Cals), Diet Coke (0 Cals), Ginger
                                                        Ale (120 Cals), Sprite (140 Cals) $3.50
                                                        <div
                                                            className="pop-icons">
                                                            <Image src={Koca} width={50} height={50} alt="Coca Cola"
                                                            className="img-responsive"/>
                                                            <Image src={Kola} width={50} height={50} alt="Coca Cola Diet"
                                                            className="img-responsive"/>
                                                            <Image src={Sprite} width={50} height={50} alt="Sprite"
                                                            className="img-responsive"/>
                                                            <Image src={Kanada} width={50} height={50} alt="Canada Dry"
                                                            className="img-responsive"/>
                                                            <Image src={Nestea} width={50} height={50} alt="Nestea"
                                                            className="img-responsive"/>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div></div>

                                            <div className="clearfix"></div>
                                        <div>
                                            <div className="full-menu" style={{float:"left"}}>
                                                <div className="background-black-menu"><h4><strong>AS WE SAFELY REOPEN
                                                    FOR DINING, HERES WHAT YOU CAN EXPECT TO SEE AT SYMPOSIUM:</strong>
                                                </h4>
                                                    <div>
                                                    <ul>
                                                        <li>
                                                            <strong>CARE for HEALTHY TEAM MEMBERS</strong>
                                                            <br/>
                                                            <em>daily
                                                            temperature checks</em>
                                                        </li>
                                                        <li><strong>PROTECTIVE EQUIPMENT</strong> <br/><em>masks to be
                                                            worn by all team members</em></li>
                                                        <li><strong>FREQUENT HANDWASHING</strong> <br/><em>and hand
                                                            sanitizing stations throughout</em></li>
                                                        <li><strong>SOCIAL DISTANCING</strong> <br/><em>seating areas
                                                            modified for your safety</em></li>
                                                        <li><strong>CLEANING PROCEDURES</strong> <br/><em>your table
                                                            disinfected before your visit</em></li>
                                                    </ul>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>

                                                <div>
                                                    <p><small>Adults and youth (ages 13 and older) need an average of 2,000
                                                        calories a day, and children (ages 4 to 12) need an average of 1,500
                                                        calories a day. However, individual needs vary. Any add-ons or
                                                        substitutions add indicated calories to total calorie count. <Image
                                                            src={Vegan} width={16} height={16} alt="Vegan icon"
                                                            className="img-responsive"
                                                            style={{maxWidth:"16px", display:"inline-block"}}/> indicates
                                                        vegetarian. All items identified with <Image
                                                            src={Gluten} width={16} height={16} alt="Gluten free icon"
                                                            className="img-responsive"
                                                            style={{maxWidth:"16px", display:"inline-block"}}/> are
                                                        considered gluten friendly; however, the possibility of
                                                        cross contact with gluten items does exist. Please notify
                                                        management if you have allergies.</small></p>
                                                    <hr/><p>At this time only these menu items are being offered to our
                                                    Symposium guests. Specials offers, daily features, or promotions –
                                                    unless offered by the individual location – are not valid nor
                                                    available until further notice. We thank you for your understanding
                                                    and ongoing support. All menu items subject to availability. Prices
                                                    subject to change.</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{width:"250", float:"right"}}>
                                        <div className="widget yellow-bg">
                                            <div className="header-h2"><h2 className="text-center">Categories</h2></div>
                                            <ul className="menu-categories">
                                                <li>
                                                    <a className="active" href="/patio-dining-menu">Regular Patio Menu</a>
                                                <br/>
                                                    <a href="/dessert-patio-dining-menu">Dessert Menu</a>
                                                    <br/>
                                                    <a href="/cocktail-wine-patio-dining-menu">Cocktails, Beer & Wine Menu</a>
                                                    <br/>
                                                    <a href="/breakfast-patio-dining-menu">Breakfast/Brunch Menu – <small>served until 4 pm</small></a>
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