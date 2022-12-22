import "./HeroStyles.css";
import img12 from "../assets/arg.webp";

function Hero (props){
    return(
        <>
        <div className={props.cName}>
            <img className={props.imgClass} alt="HerpImg" src={props.heroImg}/>
            <div className="hero-text">
                <h2>{props.subtitle}</h2>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
        </>
    );
}

export default Hero;