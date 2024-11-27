import { Link } from "@inertiajs/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function Layout({ children }) {
    return (
        <>
            <Header/>

            <main>{children}</main>

            <Footer/>
        </>
    );
}