import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/andal1.JPG";
import GalleryMantai from "../components/GalleryMantai";

function Mantai (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            subtitle="Mantai"
            title="Moment"
            heroImg={img}
            imgClass="img"
            btnClass="hide"/>
            <GalleryMantai />
            <Footer />
        </>
    )
}

export default Mantai;