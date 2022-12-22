import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import img from "../assets/trend-cover.jpg";
import Post from "../components/Post";

function Content (){
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={img}
            imgClass="img-mid"
            title="This is Our Content"
            btnClass="hide"/>
            <Post />
            <Footer />
        </>
    )
}

export default Content;