import "./PopularStyles.css";
import CardData from "./CardData";
import makrab1 from "../assets/makrab1.jpg";
import makrab2 from "../assets/makrab2.jpg";
import makrab3 from "../assets/makrab3.jpg";
import makrab4 from "../assets/makrab4.jpg";

function GalleryMakrab (){
    return(
        <div className="popular">
            <div className="popularcard-split-1">
                <CardData
                    image={makrab1}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={makrab2}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={makrab3}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={makrab4}
                />
            </div>
        </div>
    )
}

export default GalleryMakrab;