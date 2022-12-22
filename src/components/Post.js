import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";
import PostData from "./PostData";
import "./PostStyles.css";

const Post = () =>{
    return(
        <div className="post">
            <h2>Andal's</h2>
            <h1>Content</h1>
            <p>These are the different types of content that Andal posts during 2022</p>
            <PostData
                className="first-des"
                heading="DigiScope"
                text="DigiScope merupakan sebuah postingan yang berisi tenteng penjaringan opini melalui analisis data digital dari media sosial (dunia digital) terutama Twitter terkait isu yang sedang diangkat maupun hanya sekadar topik trivia. Hasil dari analisis data pada Digiscope di antara lain adalah hasil analisis sentimen, analisis emosi, dan wordcloud."
                img1={mountain1}
                img2={mountain2}
                btnText="Enjoy DigiScope!"
                url="/digiscope"
                btnClass="show"
            />
            <PostData
                className="first-des-reverse"
                heading="DataScope"
                text="DataScope merupakan sebuah postingan dari hasil melakukan penjaringan data umum pada kanal-kanal berita maupun sumber di internet terkait isu yang sedang diangkat maupun hanya sekedar topik trivia. Postingan ini bertujuan untuk memperkuat landasan data pada isu yang sedang diangkat."
                img1={mountain3}
                img2={mountain4}
                btnText="Enjoy DataScope!"
                url="/datascope"
                btnClass="show"
            />
            <PostData
                className="first-des"
                heading="DigiTrend"
                text="DigiTrend merupakan postingan yang bertujuan untuk menginformasikan berita terkini mengenai dunia digital dan dikemas dalam bentuk postingan trivia. Selain topik terkini, DigiTrend juga membahas topik-topik yang jarang didengar oleh masyarakat sehingga memberi pengetahuan baru untuk masyarakat."
                img1={mountain1}
                img2={mountain3}
                btnText="Enjoy DigiTrend!"
                url="/digitrend"
                btnClass="show"
            />
        </div>
    )
}

export default Post;