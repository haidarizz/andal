import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import img12 from "../assets/andal1.JPG";
import Post from "../components/Post";
import AboutUs from "../components/AboutUs";

function Home (){
    return(
        <>
            <Navbar />
            <Hero cName="hero"
            heroImg={img12}
            imgClass="img"
            subtitle="Mengenang"
            title="Andal 2022"
            text="I will miss it guys, very sure :("
            buttonText="Let's Enjoy"
            url="/"
            btnClass="show"/>
            <AboutUs />
            <Post />
        </>
    )
}

export default Home;