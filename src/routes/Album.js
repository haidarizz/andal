import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/andal1.JPG";
import Gallery from "../components/Gallery";

function Album (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            subtitle="This is"
            title="Our Moments"
            heroImg={img}
            imgClass="img"
            btnClass="hide"/>
            <Gallery />
            <Footer />
        </>
    )
}

export default Album;