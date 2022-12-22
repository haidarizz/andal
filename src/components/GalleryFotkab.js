import "./PopularStyles.css";
import CardData from "./CardData";
import fotkab1 from "../assets/fotkab1.JPG";
import fotkab2 from "../assets/fotkab2.JPG";
import fotkab3 from "../assets/fotkab3.JPG";

function GalleryFotkab (){
    return(
        <div className="popular">
            <div className="popularcard-split-1">
                <CardData
                    image={fotkab1}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={fotkab2}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={fotkab3}
                />
            </div>
        </div>
    )
}

export default GalleryFotkab;