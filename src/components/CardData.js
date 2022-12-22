//import Popular from "./Popular";
import "./PopularStyles.css";
import {Link} from "react-router-dom";

function CardData(props){
    return(
        <div className="t-card">
            <a href={props.url} className="t-links">
                <div className="t-image">
                    <img src={props.image} alt="image"/>
                </div>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </a>
        </div>
    )
}

export default CardData;