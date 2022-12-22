import "./PopularStyles.css";

function CardData(props){
    return(
        <div className="t-card">
            <a href={props.url} className="t-links">
                <div className="t-image">
                    <img src={props.image} alt="image"/>
                </div>
                <h4>{props.heading}</h4>
                <h5>{props.subtitle}</h5>
                <p>{props.text}</p>
            </a>
        </div>
    )
}

export default CardData;