import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/andal1.JPG";
import GalleryFotkab from "../components/GalleryFotkab";

function Fotkab (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            subtitle="Fotkab"
            title="Moment"
            heroImg={img}
            imgClass="img"
            btnClass="hide"/>
            <GalleryFotkab />
            <Footer />
        </>
    )
}

export default Fotkab;