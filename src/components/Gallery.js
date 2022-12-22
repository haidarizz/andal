import "./PopularStyles.css";
import CardData from "./CardData";
import makrab1 from "../assets/makrab1.jpg";
import mantai1 from "../assets/mantai1.jpg";
import andal from "../assets/andal1.JPG";

function Gallery (){
    return(
        <div className="popular">
            <div className="popularcard">
                <CardData
                    image={makrab1}
                    heading="Malam Keakraban"
                    text="November"
                    url="/makrab"
                />
                <CardData
                    image={mantai1}
                    heading="Mantai ke Pantai Ngrumput"
                    text="Juni"
                    url="/mantai"
                />
                <CardData
                    image={andal}
                    heading="Foto Kabinet"
                    text="Desember"
                    url="/fotkab"
                />
            </div>
        </div>
    )
}

export default Gallery;