import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/trend-cover.jpg";
import DatascopeContent from "../components/DatascopeContent";

function Digitrend (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img-mid"
            title="This is DataScope"
            btnClass="hide"/>
            <DatascopeContent />
            <Footer />
        </>
    )
}

export default Digitrend;