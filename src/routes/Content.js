import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/andal1.JPG";
import Post from "../components/Post";

function Content (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-low"
            heroImg={img}
            imgClass="img"
            btnClass="hide"/>
            <Post />
            <Footer />
        </>
    )
}

export default Content;