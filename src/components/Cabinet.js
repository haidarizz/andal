import "./PopularStyles.css";
import CardData from "./CardData";
import haidar from "../assets/haidar.jpg";
import diqi from "../assets/diqi.jpeg";
import agnes from "../assets/agnes.jpg";
import nisa from "../assets/nisa.jpg";
import abil from "../assets/abil.jpg";
import aji from "../assets/aji.jpg";
import alfian from "../assets/alfian.png";
import banen from "../assets/banen.jpg";
import besty from "../assets/besty.jpg";
import farhan from "../assets/farhan.jpg";
import inam from "../assets/inam.jpg";
import intan from "../assets/intan.jpg";
import iqbal from "../assets/iqbal.png";
import juang from "../assets/juang.png";
import roy from "../assets/roy.jpg";
import salma from "../assets/salma.jpeg";
import shabira from "../assets/shabira.jpg";
import khalid from "../assets/khalid.jpg";
import leon from "../assets/leon.jpg";
import uswa from "../assets/uswa.jpg";
import yazid from "../assets/yazid.png";

function Cabinet (){
    return(
        <div className="popular">
            <h2>Pengurus</h2>
            <h1>Harian</h1>
            <div className="popularcard-split-4">
                <CardData
                    image={haidar}
                    heading="Muhammad Haidar Izzuddin"
                    subtitle="Menteri Analisis Data Digital"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/haidarizz/"
                />
                <CardData
                    image={diqi}
                    heading="Habib Luthfi Ash-Shiddiqie"
                    subtitle="Wakil Menteri Analisis Data Digital"
                    text="Teknik Mesin 2020"
                    url="https://www.instagram.com/ashshiddiqie_01/"
                />
                <CardData
                    image={agnes}
                    heading="Agnes Suarna"
                    subtitle="Sekretaris"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/agnessuarna_/"
                />
                <CardData
                    image={nisa}
                    heading="Khairun Nisa' Zuqri"
                    subtitle="Bendahara"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/khanisaz/"
                />
            </div>
            <h2>Kedirjenan</h2>
            <h1>Internal</h1>
            <div className="popularcard-split-5">
                <CardData
                    image={banen}
                    heading="Raden Muhammad Banendra Bagaskara"
                    subtitle="Dirjen Internal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/muhammadbanendra/"
                />
                <CardData
                    image={intan}
                    heading="Rizky Intan Nurlita"
                    subtitle="Staf Internal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/intanurlitaa/"
                />
                <CardData
                    image={besty}
                    heading="Faizah Bestiyana Darmawati"
                    subtitle="Staf Internal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/faizahbestyanaa/"
                />
                <CardData
                    image={inam}
                    heading="In'am Nurul Fuady"
                    subtitle="Staf Internal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/inamnurul/"
                />
                <CardData
                    image={shabira}
                    heading="Shabira Salwa Hanan"
                    subtitle="Staf Internal"
                    text="Teknik Biomedis 2021"
                    url="https://www.instagram.com/shabiraas/"
                />
            </div>
            <h2>Kedirjenan</h2>
            <h1>Media dan Penulisan</h1>
            <div className="popularcard-split-6">
            <CardData
                    image={salma}
                    heading="Salma Fathina Azzahwa"
                    subtitle="Dirjen Media dan Penulisan"
                    text="Teknik Biomedis 2020"
                    url="https://www.instagram.com/salmaazzahwa/"
                />
                <CardData
                    image={iqbal}
                    heading="Muhammad Iqbal Masykuri"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/kaniqbal_/"
                />
                <CardData
                    image={roy}
                    heading="Roy Rinatza Zain"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknik Sipil 2021"
                    url="https://www.instagram.com/royrzain/"
                />
                <CardData
                    image={leon}
                    heading="Leonard Mars Kurniaputra"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/leleonnn/"
                />
                <CardData
                    image={abil}
                    heading="Abdjad Aiman Sabilla"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknik Mesin 2021"
                    url="https://www.instagram.com/abdjadabil/"
                />
                <CardData
                    image={alfian}
                    heading="Muhammad Alfian Mukti Sampurno"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknik Elektro 2020"
                    url="https://www.instagram.com/muhammadalfianmukti/"
                />
            </div>
            <h2>Kedirjenan</h2>
            <h1>Teknikal</h1>
            <div className="popularcard-split-6">
            <CardData
                    image={juang}
                    heading="Karunia Perjuangan Mustadl'Afin"
                    subtitle="Dirjen Teknikal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/karuniaperjuangan/"
                />
                <CardData
                    image={yazid}
                    heading="Ahmad Yazid Naufan"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/yazidnaufan/"
                />
                <CardData
                    image={khalid}
                    heading="Khalid Rizki Ananta"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/khalid.rizki22/"
                />
                <CardData
                    image={aji}
                    heading="Qornain Aji"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/qornainaji/"
                />
                <CardData
                    image={uswa}
                    heading="Annisa Uswa Sufia"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/uswaow/"
                />
                <CardData
                    image={farhan}
                    heading="Farhan Franaka"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/farhanfranaka/"
                />
            </div>
        </div>
    )
}

export default Cabinet;