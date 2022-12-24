import "./PopularStyles.css";
import CardData from "./CardData";
import digi8 from "../assets/digi8.jpg";
import digi4 from "../assets/digi4.jpg";
import trend10 from "../assets/trend10.jpg";

function Popular (){
    return(
        <div className="popular">
            <h2>Andal's</h2>
            <h1>Popular Posts</h1>
            <p>This is the most popular Andal's posts in 2022. Click the card to see it on Instagram!</p>
            <div className="popularcard">
                <CardData
                    image={digi8}
                    heading="DigiScope #8: Babarsari as Gotham City"
                    text="Digiscope #8 akan membahas mengenai sikap dan pandangan warganet terhadap isu yang hangat pada awal pekan bulan Juli ini. Tim Analisis Data Digital telah mengumpulkan dan melakukan analisis data melalui cuitan Twitter warganet dalam topik Kerusuhan Babarsari. Penasaran dengan kronologi, tanggapan, dan juga emosi yang dilupakan oleh warganet?"
                    url="https://www.instagram.com/p/CgEAhHqBZIl/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={digi4}
                    heading="DigiScope #4: Warga Jogja Merintih karena Ulah Klitih"
                    text="Klitih sudah lama menjadi penyakit bagi kota yang katanya berhati nyaman ini. Tidak lama ini, seorang siswa Muha (SMA Muhammadiyah 2 Yogyakarta) harus meregang nyawa karena tindak kriminal tersebut. Kasus tersebut lalu sempat menjadi isu yang ramai diperbincangkan di media sosial. Untuk mengetahui bagaimana tanggapan masyarakat, kami melakukan analisis data terhadap cuitan-cuitan twitter publik dengan kata kunci “klitih”. Selengkapnya dapat disimak pada postingan di atas."
                    url="https://www.instagram.com/p/CeLDDEXhHiM/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={trend10}
                    heading='DigiTrend #10: Bjorka: "Stop Being an Idiot"'
                    text="Nama 'Bjorka' muncul terkait peretasan data dari Indonesia sejak Agustus lalu. Kemunculannya, termasuk pernyataan-pernyataannya, diketahui lewat situs forum breached.to. Selebihnya, sosoknya tentu saja misterius. Bagaimana kominfo menanggapi aksi yang dilakukan Bjorka tersebut?"
                    url="https://www.instagram.com/p/CipQOQLOkAx/?utm_source=ig_web_copy_link"
                />
            </div>
        </div>
    )
}

export default Popular;