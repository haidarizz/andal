import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/greencyber.jpg";
import DigiscopeContent from "../components/DigiscopeContent";

function Digiscope (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img"
            subtitle="This is"
            title="DigiScope"
            btnClass="hide"/>
            <DigiscopeContent />
            <Footer />
        </>
    )
}

export default Digiscope;