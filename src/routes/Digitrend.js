import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/greencyber.jpg";
import DigitrendContent from "../components/DigitrendContent";

function Digitrend (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img"
            subtitle="This is"
            title="DigiTrend"
            btnClass="hide"/>
            <DigitrendContent />
            <Footer />
        </>
    )
}

export default Digitrend;