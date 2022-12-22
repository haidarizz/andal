import "./PopularStyles.css";
import CardData from "./CardData";
import man from "../assets/man.jpg";
import woman from "../assets/woman.jpg";

function Cabinet (){
    return(
        <div className="popular">
            <h2>Pengurus</h2>
            <h1>Harian</h1>
            <div className="popularcard-split-4">
                <CardData
                    image={man}
                    heading="Muhammad Haidar Izzuddin"
                    subtitle="Menteri Analisis Data Digital"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/haidarizz/"
                />
                <CardData
                    image={man}
                    heading="Habib Luthfi Ash-Shiddiqie"
                    subtitle="Wakil Menteri Analisis Data Digital"
                    text="Teknik Mesin 2020"
                    url="https://www.instagram.com/ashshiddiqie_01/"
                />
                <CardData
                    image={woman}
                    heading="Agnes Suarna"
                    subtitle="Sekretaris"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/agnessuarna_/"
                />
                <CardData
                    image={woman}
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
                    image={man}
                    heading="Raden Muhammad Banendra Bagaskara"
                    subtitle="Dirjen Internal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/muhammadbanendra/"
                />
                <CardData
                    image={woman}
                    heading="Rizky Intan Nurlita"
                    subtitle="Staf Internal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/intanurlitaa/"
                />
                <CardData
                    image={woman}
                    heading="Faizah Bestiyana Darmawati"
                    subtitle="Staf Internal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/faizahbestyanaa/"
                />
                <CardData
                    image={man}
                    heading="In'am Nurul Fuady"
                    subtitle="Staf Internal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/inamnurul/"
                />
                <CardData
                    image={woman}
                    heading="Shabira Salwa Hanan"
                    subtitle="Staf Internal"
                    text="Teknik Biomedis 2021"
                    url="https://www.instagram.com/shabiraas/"
                />
            </div>
            <h2>Kedirjenan</h2>
            <h1>Media dan Penulisan</h1>
            <div className="popularcard-split-5">
            <CardData
                    image={woman}
                    heading="Salma Fathina Azzahwa"
                    subtitle="Dirjen Media dan Penulisan"
                    text="Teknik Biomedis 2020"
                    url="https://www.instagram.com/salmaazzahwa/"
                />
                <CardData
                    image={man}
                    heading="Muhammad Iqbal Masykuri"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/kaniqbal_/"
                />
                <CardData
                    image={man}
                    heading="Roy Rinatza Zain"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknik Sipil 2021"
                    url="https://www.instagram.com/royrzain/"
                />
                <CardData
                    image={man}
                    heading="Leonard Mars Kurniaputra"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/leleonnn/"
                />
                <CardData
                    image={man}
                    heading="Abdjad Aiman Sabilla"
                    subtitle="Staf Media dan Penulisan"
                    text="Teknik Mesin 2021"
                    url="https://www.instagram.com/abdjadabil/"
                />
            </div>
            <h2>Kedirjenan</h2>
            <h1>Teknikal</h1>
            <div className="popularcard-split-6">
            <CardData
                    image={man}
                    heading="Karunia Perjuangan Mustadl'Afin"
                    subtitle="Dirjen Teknikal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/karuniaperjuangan/"
                />
                <CardData
                    image={man}
                    heading="Ahmad Yazid Naufan"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/yazidnaufan/"
                />
                <CardData
                    image={man}
                    heading="Khalid Rizki Ananta"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2020"
                    url="https://www.instagram.com/khalid.rizki22/"
                />
                <CardData
                    image={man}
                    heading="Qornain Aji"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/qornainaji/"
                />
                <CardData
                    image={woman}
                    heading="Annisa Uswa Sufia"
                    subtitle="Staf Teknikal"
                    text="Teknologi Informasi 2021"
                    url="https://www.instagram.com/uswaow/"
                />
                <CardData
                    image={man}
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