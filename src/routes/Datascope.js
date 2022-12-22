import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/greencyber.jpg";
import DatascopeContent from "../components/DatascopeContent";

function Digitrend (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img"
            subtitle="This is"
            title="DataScope"
            btnClass="hide"/>
            <DatascopeContent />
            <Footer />
        </>
    )
}

export default Digitrend;