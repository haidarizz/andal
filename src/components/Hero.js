import "./HeroStyles.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero (props){
    return(
        <>
        <div className={props.cName}>
            <img className={props.imgClass} alt="HerpImg" src={props.heroImg}/>
            <div className="hero-text">
                <h2>{props.subtitle}</h2>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.url} activeClass="active" className={props.btnClass} spy={true} smooth={true} offset={-70} duration={500}>
                    {props.buttonText}
                </Link>
            </div>
        </div>
        </>
    );
}

export default Hero;