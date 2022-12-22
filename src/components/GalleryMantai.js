import "./PopularStyles.css";
import CardData from "./CardData";
import mantai1 from "../assets/mantai1.jpg";
import mantai2 from "../assets/mantai2.jpg";
import mantai3 from "../assets/mantai3.jpg";
import mantai4 from "../assets/mantai4.jpg";

function GalleryMantai (){
    return(
        <div className="popular">
            <div className="popularcard-split-1">
                <CardData
                    image={mantai1}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={mantai2}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={mantai3}
                />
            </div>
            <div className="popularcard-split-1">
                <CardData
                    image={mantai4}
                />
            </div>
        </div>
    )
}

export default GalleryMantai;