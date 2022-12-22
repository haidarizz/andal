import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/andal1.JPG";
import GalleryMakrab from "../components/GalleryMakrab";

function Makrab (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            subtitle="Makrab"
            title="Moment"
            heroImg={img}
            imgClass="img"
            btnClass="hide"/>
            <GalleryMakrab />
            <Footer />
        </>
    )
}

export default Makrab;