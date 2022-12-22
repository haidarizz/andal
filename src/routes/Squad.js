import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/andal1.JPG";
import Cabinet from "../components/Cabinet";

function Squad (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            subtitle="This is"
            title="Andal Squad"
            heroImg={img}
            imgClass="img"
            btnClass="hide"/>
            <Cabinet />
            <Footer />
        </>
    )
}

export default Squad;