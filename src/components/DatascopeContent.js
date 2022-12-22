import "./PopularStyles.css";
import CardData from "./CardData";
import data1 from "../assets/data1.jpg";
import data2 from "../assets/data2.jpg";
import data3 from "../assets/data3.jpg";
import data4 from "../assets/data4.jpg";
import data5 from "../assets/data5.jpg";

function DatascopeContent (){
    return(
        <div className="popular">
            <div className="popularcard">
                <CardData
                    image={data1}
                    heading="DataScope #1: Russia VS Ukraina"
                    text="Beberapa hari terakhir ini berita-berita baik di media sosial, pertelevisian, ataupun media massa sedang memberitakan isu internasional yang dikhawatirkan membahayakan perdamaian. Rusia dan Ukraina yang dulunya pernah tergabung dalam negara yang sama, Uni Soviet kini harus menghadapi konflik militer. Namun dalam kesempatan ini kita tidak akan membahas siapa dalang ataupun siapa yang benar dalam konflik ini. Postingan kali ini membahas tentang data perbandingan militer Rusia dan Ukraina, serta dampak global setelah peperangan tersebut meletus. Penasaran dengan tampilan infografis yang berhasil tim kami sajikan? Yuk simak postingan ini."
                    url="https://www.instagram.com/p/CbG-D8EheCl/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={data2}
                    heading="DataScope #2: Minyak Goreng: Harga Melejit Warga Menjerit"
                    text="Penghasil kelapa sawit terbesar katanya, namun rakyatnya sendiri menjerit berluka demi berebut minyak goreng yang langka. Pengungkapan mafia katanya, ternyata internal sendiri yang menjadi pelakunya. Tak bisa menggoreng? Merebus saja katanya, dirinya sendiri duduk di singgasana dan hidup serta mulia. Kelangkaan minyak goreng membuat mayoritas lapisan masyarakat menengah ke bawah menjerit berharap ada solusi konkret yang bisa diberikan. Bukan solusi berupa alternatif cara memasak, tapi pengendalian kenaikan harga minyak goreng yang membengkak. Lahan sawit kita begitu luas, produksinya jangan ditanya, melimpah ruah adanya. Namun ekspor terus berjalan, supply dalam negeri pun tertahan. Datascope kali ini menyajikan data-data luas perkebunan sawit, produksi sawit, konsumsi domestik sawit, serta volume ekspor sawit dari tahun ke tahun. Semoga bermanfaat dan bisa menjadi bahan renungan untuk kita semua (tak terkecuali pemerintah)."
                    url="https://www.instagram.com/p/CcuTo0WBRe2/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={data3}
                    heading="DataScope #3 : Indonesia Darurat Cyber Attack"
                    text="Revolusi teknologi yang begitu cepat akan selalu diikuti dengan berbagai masalah yang mendampingi. Seperti halnya cybersecurity yang akhir-akhir ini makin sering terdengar di berbagai penjuru dunia, tidak terkecuali Indonesia. Cybersecurity didefinisikan sebagai praktik perlindungan sistem, data, jaringan, dan program dari ancaman atau serangan digital. Makin banyaknya penggunaan komputer dan perangkat jaringan meningkatkan kesempatan para cyber attacker untuk meretas data-data penting masyarakat. Beberapa kasus cyber attack yang menyerang Indonesia akhir-akhir ini membuktikan bahwa Indonesia merupakan salah satu negara yang menjadi target empuk serangan siber. Oleh karena itu, penting untuk masyarakat Indonesia meningkatkan kewaspadaannya terhadap cyber security. Pada edisi Datascope kali ini, akan dipaparkan berbagai informasi menarik mengenai cyber security, termasuk tentang kasus kebocoran data yang menyerang Indonesia beberapa waktu lalu. Penasaran? Yuk simak postingan kami supaya kamu lebih waspada mengenai pentingnya peran cyber security."
                    url="https://www.instagram.com/p/Cd-dN6phbCG/?utm_source=ig_web_copy_link"
                />
            </div>
            <div className="popularcard-split-2">
                <CardData
                    image={data4}
                    heading="DataScope #4: Pemindahan IKN Nambah Utang Negara?"
                    text="Realisasi program pemindahan ibu kota negara menuai beragam pro dan kontra dikalangan ahli dan masyarakat. Kelancaran program besar-besaran era kepresidenan Bapak Joko Widodo, mengenai pindahnya ibukota negara, perlu dipertimbangkan dan dikawal semua pihak agar jalannya dapat bermanfaat bagi keberlangsungan Negara Kesatuan Republik Indonesia kedepannya. Pada Datascope #4 kali ini, kami menganalisis berbagai aspek pro dan kontra terhadap pemindahan IKN. Data yang kami analisis merupakan data umum yang telah tersebar luas di internet dan tentunya dapat dipercaya. Setelah membaca datascope kali ini, diharapkan pembaca dapat memiliki jawaban dari pertanyaan ”Apakah pertimbangan pemerintah sudah benar dan pemindahan ibu kota merupakan pilihan dan solusi tepat bagi berbagai permasalahan yang ada?”"
                    url="https://www.instagram.com/p/CfgFrW2hz-L/?utm_source=ig_web_copy_link"
                />
                <CardData
                    image={data5}
                    heading="DataScope #5: Data Aja Bocor, Gimana Mau Percaya?"
                    text="Cybersecurity Indonesia sedang dalam keadaan kacau dengan dugaan kebocoran data yang dialami masyarakat Indonesia sudah tidak jarang didengar. Berdasarkan artikel yang ditulis Kompas.com, pada tahun 2020, tercatat 7 kasus kebocoran data baik dari pemerintah maupun swasta, sedangkan pada tahun 2021 setidaknya ada 3 kasus kebocoran data masyarakat Indonesia. Data tersebut menunjukan betapa rentannya data kita untuk tersebar ke pihak-pihak yang kurang bertanggung jawab. Dari beberapa kasus kebocoran data tentu besar sekali kerugian yang dialami baik oleh pengguna maupun instansi. Dilansir dari Laporan Indonesia Cyber Security Independent Resilience Team (CSIRT), kerugian materil dari kebocoran data BPJS mencapai Rp600 triliun. Angka tersebut diperhitungkan berdasarkan kerugian yang dialami baik oleh pengguna maupun pemerintah. Bagaimana tidak? Lantas bagaimana sikap pemerintah dalam menanggapi kekacauan cybersecurity Indonesia? Amankah data kita dalam genggaman pemerintah? Simak kajian kami berikut."
                    url="https://www.instagram.com/p/CiuRIz5OO4h/?utm_source=ig_web_copy_link"
                />
            </div>
        </div>
    )
}

export default DatascopeContent;