import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/trend-cover.jpg";
import AboutUs from "../components/AboutUs";

function Content (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img-mid"
            title="This is Our About"
            btnClass="hide"/>
            <AboutUs />
            <Footer />
        </>
    )
}

export default Content;