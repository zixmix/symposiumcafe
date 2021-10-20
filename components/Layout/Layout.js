import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Layout({ children }) {
    return (
        <>
            <TopBar />
            <Header/>
            <main>{children}</main>
            <Footer />
        </>
    )
}