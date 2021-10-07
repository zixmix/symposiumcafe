import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=9"/>
                    <title>Restaurant dining - Breakfast, lunch, dinner, late night!</title>
                    <meta name="robots" content="index, follow"/>
                    <link rel="canonical" href="https://symposiumcafe.com"/>
                    <meta name="description" content="Symposium Cafe Restaurant dining: breakfast, lunch, dinner, late night at all our Ontario restaurants.  Restaurant specialties breakfast, brunch, desserts, burgers appetizers."/>
                    <meta name="keywords" content="restaurant, restaurants, dining, breakfast, lunch, dinner, restaurants near me, local restaurants, restaurants around me, cafes near me, local cafes, cafes around me, breakfast near me, local breakfast, breakfast around me, lunch near me, local lunch, lunch around me, dinner restaurants, lunch restaurants, breakfast restaurants, café, breakfast restaurant, lunch restaurant, dinner restaurant, symposium cafe"/>
                    <meta name="twitter:card" content="https://symposiumcafe.com/images/logo.png"/>
                    <meta name="twitter:site" content="https://symposiumcafe.com"/>
                    <meta name="twitter:title"content="Restaurant dining - Breakfast, lunch, dinner, late night!"/>
                    <meta name="twitter:description" content="Symposium Cafe Restaurant dining: breakfast, lunch, dinner, late night at all our Ontario restaurants.  Restaurant specialties breakfast, brunch, desserts, burgers appetizers."/>
                    <meta name="twitter:image:src"content="https://symposiumcafe.com/images/logo.png"/>
                    <meta property="og:title"content="Restaurant dining - Breakfast, lunch, dinner, late night!"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://symposiumcafe.com"/>
                    <meta property="og:image" content="https://symposiumcafe.com/images/logo.png"/>
                    <meta property="og:description" content="Symposium Cafe Restaurant dining: breakfast, lunch, dinner, late night at all our Ontario restaurants.  Restaurant specialties breakfast, brunch, desserts, burgers appetizers."/>
                    <meta property="og:site_name"content="Restaurant dining - Breakfast, lunch, dinner, late night!"/>
                    <meta name="google-site-verification" content="MK2Wup5hVj3YPY-8ZZdeSF8sng49IvoGMOSdv_bKjps"/>
                    <link rel="shortcut icon" href="https://symposiumcafe.com/images/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="https://symposiumcafe.com/images/favicon.ico" type="image/x-icon"/>
                    <link rel="alternate" href="https://symposiumcafe.com"hrefLang="en-ca"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                <script src="https://apis.google.com/js/platform.js" async defer type="5950157d5381ab56baf5271d-text/javascript"></script>
                <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="5950157d5381ab56baf5271d-|49" defer=""></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument