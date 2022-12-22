import trend1 from "../assets/trend1.jpg";
import trend2 from "../assets/trend2.jpg";
import data1 from "../assets/data1.jpg";
import data2 from "../assets/data2.jpg";
import digi1 from "../assets/digi1.jpg";
import digi2 from "../assets/digi2.jpg";
import PostData from "./PostData";
import "./PostStyles.css";
import "./PostStylesBlock.css";

function Post (props){
    return(
        <div className={props.cName}>
            <h2>Andal's</h2>
            <h1>Content</h1>
            <p>This is three types of Andal's posts in 2022</p>
            <PostData
                className="first-des"
                heading="DigiScope"
                text="DigiScope merupakan sebuah postingan yang berisi tenteng penjaringan opini melalui analisis data digital dari media sosial (dunia digital) terutama Twitter terkait isu yang sedang diangkat maupun hanya sekadar topik trivia. Hasil dari analisis data pada Digiscope di antara lain adalah hasil analisis sentimen, analisis emosi, dan wordcloud."
                img1={digi1}
                img2={digi2}
                btnText="Enjoy DigiScope!"
                url="/digiscope"
                btnClass="show"
            />
            <PostData
                className="first-des-reverse"
                heading="DataScope"
                text="DataScope merupakan sebuah postingan dari hasil melakukan penjaringan data umum pada kanal-kanal berita maupun sumber di internet terkait isu yang sedang diangkat maupun hanya sekedar topik trivia. Postingan ini bertujuan untuk memperkuat landasan data pada isu yang sedang diangkat."
                img1={data1}
                img2={data2}
                btnText="Enjoy DataScope!"
                url="/datascope"
                btnClass="show"
            />
            <PostData
                className="first-des"
                heading="DigiTrend"
                text="DigiTrend merupakan postingan yang bertujuan untuk menginformasikan berita terkini mengenai dunia digital dan dikemas dalam bentuk postingan trivia. Selain topik terkini, DigiTrend juga membahas topik-topik yang jarang didengar oleh masyarakat sehingga memberi pengetahuan baru untuk masyarakat."
                img1={trend1}
                img2={trend2}
                btnText="Enjoy DigiTrend!"
                url="/digitrend"
                btnClass="show"
            />
        </div>
    )
}

export default Post;