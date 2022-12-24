import "./PopularStyles.css";
import CardData from "./CardData";
import digi1 from "../assets/digi1.jpg";
import digi2 from "../assets/digi2.jpg";
import digi3 from "../assets/digi3.jpg";
import digi4 from "../assets/digi4.jpg";
import digi5 from "../assets/digi5.jpg";
import digi6 from "../assets/digi6.jpg";
import digi7 from "../assets/digi7.jpg";
import digi8 from "../assets/digi8.jpg";
import digi9 from "../assets/digi9.jpg";
import digi10 from "../assets/digi10.jpg";

function DigiscopeContent (){
    return(
        <div className="popular">
            <p className="p-content">Click the card to see the post on Instagram!</p>
            <div className="popularcard">
                <CardData
                    image={digi1}
                    heading="DigiScope #1: #WadasMelawan"
                    text="Baru-baru ini, tagar #WadasMelawan trending di berbagai media sosial terutama Twitter. Banyak sekali warganet yang mengecam penambangan di Desa Wadas dan tindakan represif aparat terhadap warga Wadas. Bagaimana reaksi warganet mengenai hal itu? Simak postingan kami kali ini."
                    url="https://www.instagram.com/p/CZy-IXkhUct/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={digi2}
                    heading="DigiScope #2: Gejolak Russia VS Ukraina"
                    text="Penempatan tentara Rusia di wilayah Ukraina mengundang perhatian seluruh dunia. Pasalnya, invasi militer tersebut dapat memicu perpecahan dan peperangan yang lebih mengerikan lagi. Berberapa perbincangan Rusia vs Ukraina menjadi hot topic bagi sebagian orang, tak terlebih para warganet yang ada di Twitter. Oleh karena, itu tim BEM KMFT mencoba menganalisis opini masyarakat Indonesia terkait isu internasional ini. Beberapa tool analisis seperti grafik timeline dan wordcloud digunakan untuk menginterpretasikan opini warganet Indonesia. Bagaimana reaksi warganet mengenai hal itu? Simak postingan kami kali ini."
                    url="https://www.instagram.com/p/CbaERDyBDTB/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={digi3}
                    heading="DigiScope #3 : Naiknya Harga Minyak Goreng di Kalangan Warganet"
                    text="Fenomena kenaikan harga minyak goreng telah menjadi isu hangat di kalangan masyarakat, baik dalam surat kabar maupun media sosial. Pengungkapan adanya mafia di balik naiknya harga minyak goreng inipun tidak menyurutkan munculnya reaksi-reaksi warganet terhadap kenaikan harga minyak goreng. Dalam edisi Digiscope terbaru ini, akan disajikan analisis data yang disaring dari cuitan Twitter publik dan juga berita-berita dari surat kabar elektronik. Untuk lebih lengkapnya, yuk simak postingan di atas!"
                    url="https://www.instagram.com/p/Cc2ATZRBl_5/?utm_source=ig_web_copy_link"
                />
            </div>
            <div className="section2">
                <div className="popularcard-split-4">
                    <CardData
                        image={digi4}
                        heading="DigiScope #4: Warga Jogja Merintih karena Ulah Klitih"
                        text="Klitih sudah lama menjadi penyakit bagi kota yang katanya berhati nyaman ini. Tidak lama ini, seorang siswa Muha (SMA Muhammadiyah 2 Yogyakarta) harus meregang nyawa karena tindak kriminal tersebut. Kasus tersebut lalu sempat menjadi isu yang ramai diperbincangkan di media sosial. Untuk mengetahui bagaimana tanggapan masyarakat, kami melakukan analisis data terhadap cuitan-cuitan twitter publik dengan kata kunci “klitih”. Selengkapnya dapat disimak pada postingan di atas."
                        url="https://www.instagram.com/p/CeLDDEXhHiM/?utm_source=ig_web_copy_link"
                    />
                    <CardData
                        image={digi5}
                        heading="DigiScope #5: Suara Publik terhadap Ibu Kota Negara Baru"
                        text="Nusantara akan menjadi nama sekaligus tempat baru bagi Ibu Kota Negara Indonesia. Tentunya pemindahan ibu kota bukanlah hal yang bisa dilakukan dengan instan. Kesiapan negara dari berbagai aspek masih dipertanyakan. Lantas bagaimana tanggapan warga terhadap topik ini? Digiscope #5 disusun untuk mengetahui tanggapan masyarakat mengenai IKN. Kami melakukan analisis data melalui cuitan-cuitan twitter publik dengan kata kunci “IKN”. Selengkapnya dapat disimak pada postingan di atas."
                        url="https://www.instagram.com/p/Cfa6BzPh64e/?utm_source=ig_web_copy_link"
                    />
                    <CardData
                        image={digi6}
                        heading="DigiScope #6: Analisis Sentimen Publik terhadap Ibu Kota Negara Baru"
                        text="Rencana pemindahan Ibu Kota Negara (IKN) ke Kalimantan Timur merupakan topik yang sedang hangat-hangatnya diperbincangkan oleh masyarakat Indonesia saat ini. Dikatakan bahwa IKN baru akan membawa perubahan besar pada dinamika perekonomian di Indonesia. Tentu masyarakat Indonesia ingin juga terlibat dalam mengawal pembangunan IKN, mereka tidak dapat sepenuhnya percaya pada pemerintah. Salah satu caranya adalah dengan mengutarakan opininya di sosial media. Pada Digiscope #6 ini kami melanjutkan analisis lebih lanjut mengenai topik IKN. Data yang kami gunakan diambil dari cuitan publik di twitter. Penasaran bagaimana tanggapan warganet twitter? Simak postingan kali ini."
                        url="https://www.instagram.com/p/CfbFWeEuICw/?utm_source=ig_web_copy_link"
                    />
                    <CardData
                        image={digi7}
                        heading="DigiScope #7: Apakah MyPertamina merupakan Solusi?"
                        text="Saat ini, masyarakat Indonesia khususnya pengguna bahan bakar minyak bersubsidi, tengah dihadapkan dengan persyaratan terbaru dalam membeli BBM bersubsidi, yaitu melakukan pendaftaran di aplikasi MyPertamina. Tentunya penggunaan aplikasi ini menjadi topik hangat yang diperbincangkan di media sosial. Digiscope #7 dirancang untuk mengetahui tanggapan masyarakat mengenai Aplikasi MyPertamina. Kami telah melakukan analisis data melalui cuitan twitter publik dan menemukan hal yang menarik. Penasaran bagaimana tanggapan netizen twitter? Yuk simak pada postingan ini."
                        url="https://www.instagram.com/p/CfyCqCrB-uC/?utm_source=ig_web_copy_link"
                    />
                </div>
            </div>
            <div className="section2">
                <div className="popularcard">
                    <CardData
                        image={digi8}
                        heading="DigiScope #8: Babarsari as Gotham City"
                        text="Digiscope #8 akan membahas mengenai sikap dan pandangan warganet terhadap isu yang hangat pada awal pekan bulan Juli ini. Tim Analisis Data Digital telah mengumpulkan dan melakukan analisis data melalui cuitan Twitter warganet dalam topik Kerusuhan Babarsari. Penasaran dengan kronologi, tanggapan, dan juga emosi yang dilupakan oleh warganet?"
                        url="https://www.instagram.com/p/CgEAhHqBZIl/?utm_source=ig_web_copy_link"
                    />
                    <CardData
                        image={digi9}
                        heading="DigiScope #9: Kebocoran Data: Apa Kata Netizen?"
                        text="Kebocoran data yang melanda pemerintahan Indonesia akhir-akhir ini sangatlah memprihatinkan. Bagaimana tidak? Kita sebagai netizen pasti juga sangat muak dengan berita kebocoran yang datang bertubi-tubi. Tidak terbayang sudah berapa banyak data masyarakat Indonesia yang tersebar di seluruh dunia akibat kebocoran data. Melihat fenomena ini, masyarakat Indonesia tentu tidak bisa hanya diam. Media sosial pun ramai dengan berbagai macam keluhan netizen. Digiscope kali ini akan membahas mengenai tanggapan netizen mengenai fenomena kebocoran data. Apakah netizen biasa saja? atau mereka cenderung tidak terima?"
                        url="https://www.instagram.com/p/Cirruipu1QD/?utm_source=ig_web_copy_link"
                    />
                    <CardData
                        image={digi10}
                        heading='DigiScope #10: Netizen: For Bjorka Or Plate?'
                        text="Melanjutkan postingan Digiscope #9 kemarin, kali ini Digiscope #10 menghadirkan analisis sentimen dan analisis emosi warganet Twitter mengenai topik kebocoran data yang melanda akhir-akhir ini. Selain itu, Digiscope #10 juga merangkum beberapa tweet yang mendapatkan atensi lebih dari warganet. Bagaimanakah netizen bereaksi terhadap hal itu? Yuk simak postingan berikut ini!"
                        url="https://www.instagram.com/p/CiuEW5MO2-F/?utm_source=ig_web_copy_link"
                    />
                </div>
            </div>
        </div>
    )
}

export default DigiscopeContent;