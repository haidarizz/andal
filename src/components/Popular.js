import "./PopularStyles.css";
import CardData from "./CardData";
import img1 from "../assets/5.jpg";
import img2 from "../assets/6.jpg";
import img3 from "../assets/9.jpg";
import img4 from "../assets/8.jpg";

function Popular (){
    return(
        <div className="popular">
            <h2>Andal's</h2>
            <h1>Popular Posts</h1>
            <p>This is the most popular Andal's posts in 2022</p>
            <div className="popularcard">
                <CardData
                    image={img1}
                    heading="Lorem Ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <CardData
                    image={img2}
                    heading="Lorem Ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <CardData
                    image={img3}
                    heading="Lorem Ipsum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            </div>
        </div>
    )
}

export default Popular;