import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/trend-cover.jpg";
import DigitrendContent from "../components/DigitrendContent";

function Digitrend (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img-mid"
            title="This is Digitrend"
            btnClass="hide"/>
            <DigitrendContent />
            <Footer />
        </>
    )
}

export default Digitrend;