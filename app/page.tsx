import BankAccordion from '~/components/bank-accordion';
import CommentFormDialog from '~/components/comment-form-dialog';
import CommentList from '~/components/comment-list';
import Intersect from '~/components/cores/intersect';
import { DividerIcon, PearlIcon } from '~/components/cores/icons';
import InstaGallery from '~/components/insta-gallery';
import MapInfo from '~/components/map-info';
import Share from '~/components/share';
import VideoPlayer from '~/components/video-player';

export default function Home() {
    return (
        <main className="container">
            {/* 동영상 */}
            {/* <section className="my-20">
                <Intersect>
                    <div className="flex justify-center my-4">
                        <PearlIcon />
                    </div>
                </Intersect>
            </section> */}
            <section className="my-20">
                <VideoPlayer />
            </section>
            {/* */}
            <section className="bg-white mt-20">
                <Intersect>
                    <h2 className="font-serif_en text-center font-bold text-xl">
                        WEDDING INVITATION
                    </h2>
                    <div className="flex justify-center my-4">
                        <PearlIcon />
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center items-center gap-1">
                            <span className="font-serif_en font-bold text-xl">
                                Rizky Prasetya
                            </span>
                            <DividerIcon />
                            <span className="font-serif_en font-bold text-xl">
                                Ayunda Maharani
                            </span>
                        </div>
                        <div className="mt-4 text-xs text-gy-6 leading-7">
                            Sabtu, 20 Juli 2024 Pukul 08:00 - 17:00 WIB
                            <br />
                            Gedung Putih Jami'ah
                        </div>
                    </div>
                </Intersect>
                <div className="mt-10">
                    <img
                        className="w-full h-full aspect-4/3 pointer-events-none"
                        src="https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg"
                        alt=""
                    />
                </div>
            </section>
            {/* */}
            <section className="text-sm mt-10">
                <Intersect>
                    <p className="text-center leading-7">
                        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                        <br />
                        menciptakan pasangan-pasangan untukmu dari jenismu
                        <br />
                        sendiri, agar kamu cenderung dan merasa tenteram
                        <br />
                        kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                        <br />
                        sayang. Sungguh, pada yang demikian itu benar-benar
                        <br />
                        terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
                        <br />
                        berpikir.
                        <br />
                        <br />
                        <a
                            href="https://quran.com/ar-rum/21"
                            target="_blank"
                            className="font-bold text-base font-serif_en"
                        >
                            QS. Ar-Rum 30:21
                        </a>
                    </p>
                    <div className="flex justify-center my-10">
                        <PearlIcon />
                    </div>
                    <p className="text-center leading-7">
                        <h2 className="font-serif_en text-center text-xl">
                            Assalamualaikum Wr. Wb
                        </h2>
                        <br />
                        Dengan memohon Rahmat dan Ridho Illahi,
                        <br />
                        teriring niat menjalankan Sunnah Rasulullah ﷺ
                        <br />
                        untuk membentuk rumah tangga yang Sakinah, Mawaddah
                        <br />
                        wa Rahmah, kami mohon do'a agar senantiasa diberikan
                        <br />
                        kelancaran dan keberkahan
                    </p>
                </Intersect>
                <Intersect>
                    <div className="ml-8 mr-6 mt-4 flex items-center justify-center">
                        <div className="mt-10 mx-8 space-y-5 text-base">
                            <div className="flex">
                                <span className="flex-shrink-0 w-14 font-serif_en font-bold mr-4">
                                    Rizky Prasetya
                                </span>
                                <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                <span className="flex-shrink-0 w-16 text-xs text-gy-6">
                                    Putra dari
                                </span>
                                <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                    <div className="flex gap-0.5">
                                        <span>Bapak Suparno</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <span>Ibu Jumiati (Alm)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="flex-shrink-0 w-14 font-serif_en font-bold mr-4">
                                    Ayunda Maharani
                                </span>
                                <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                <span className="flex-shrink-0 w-16 text-xs text-gy-6">
                                    Putri dari
                                </span>
                                <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                    <div className="flex gap-0.5">
                                        <span>Bapak Iskandar</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <span>Ibu Lisna</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8 mr-6 mt-4">
                        <div className="mt-10 mx-8 space-y-4 text-base">
                            <div className="flex">
                                <span className="flex-shrink-0 w-14 font-serif_en font-bold">
                                    Akad
                                </span>
                                <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                    <div className="flex gap-0.5">
                                        <span>Pukul 08:00 - 11:00 WIB</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <span>Sabtu, 20 Juli 2024</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <span>
                                            Gedung Putih Jami'ah (Jl. Tj. Raya
                                            II, Saigon, Kec. Pontianak Timur,
                                            Kota Pontianak Kalimantan Barat
                                            78242)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="flex-shrink-0 w-14 font-serif_en font-bold">
                                    Resepsi
                                </span>
                                <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                    <div className="flex gap-0.5">
                                        <span>Pukul 13:00 - 17:00 WIB</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <span>Sabtu, 20 Juli 2024</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <span>
                                            Gedung Putih Jami'ah (Jl. Tj. Raya
                                            II, Saigon, Kec. Pontianak Timur,
                                            Kota Pontianak Kalimantan Barat
                                            78242)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Intersect>
            </section>
            {/* 달력 */}
            <section className="mt-20">
                <div className="relative select-none pointer-events-none">
                    <img
                        className="w-full h-full aspect-4/5"
                        src="https://t1.daumcdn.net/brunch/service/user/d4v5/image/o6wwaaNlcBXNIuS2eaJojLOwEi4.jpeg"
                        alt="달력"
                    />
                </div>
            </section>
            {/* 갤러리 */}
            <section>
                <div className="my-16 select-none pointer-events-none">
                    <img
                        src="https://t1.daumcdn.net/brunch/service/user/d4v5/image/_3Sv7kwk5kNGbOd1Z_xz975esNk.gif"
                        alt="갤러리"
                    />
                </div>
                <InstaGallery
                    images={[
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0777.JPG?alt=media&token=e8800223-5987-4c05-be5b-dd04bcb32258',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0785.JPG?alt=media&token=51bbe318-0d0f-448e-9901-2ad328752ddf',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0786.JPG?alt=media&token=1f13ebe9-c909-4941-968f-a5451b1f80c1',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0787.JPG?alt=media&token=09e2e086-b0a3-448a-8656-68fe4395bede',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0788.JPG?alt=media&token=b30a6028-aa94-46f0-82fc-a4c0a34c5e10',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0789.JPG?alt=media&token=a943a03f-b979-422b-9de7-fa6e38c518f2',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0790.JPG?alt=media&token=de461183-44f6-43dd-8ad3-6553f633e8df',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0791.JPG?alt=media&token=96cd95c8-ed00-426c-8a19-a05c823e1b41',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0792.JPG?alt=media&token=57ac9f96-8c62-4117-b976-a84b5d1b0850',
                        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/IMG_E0793.JPG?alt=media&token=5fce0654-9efc-4324-9736-0c181586f9d9',
                    ]}
                />
            </section>
            {/* 오시는 길 */}
            <section className="my-20">
                <Intersect>
                    <h2 className="text-center font-serif_en font-bold text-xl">
                        Alamat Resepsi
                    </h2>
                    <div className="mt-5 mb-20 h-60 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3635806414426!2d109.36187540802483!3d-0.041171488746064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59ff92f8a3c5%3A0xe25825f339c3d5d!2sGedung%20Putih%20Jami&#39;ah!5e0!3m2!1sen!2sid!4v1710081384753!5m2!1sen!2sid"
                            width="100%"
                            height="280"
                            loading="lazy"
                        ></iframe>
                    </div>
                </Intersect>
                <Intersect>
                    <div className="ml-8 mr-6 mt-4">
                        <MapInfo />
                    </div>
                </Intersect>
            </section>
            {/* 계좌번호 */}
            <section className="my-20">
                <Intersect>
                    <h2 className="text-center font-serif_en font-bold text-xl">
                        Beri Kado
                    </h2>
                    <div className="mt-8 mx-8">
                        <BankAccordion
                            title="Nomor rekening mempelai pria"
                            bankList={[
                                {
                                    holder: 'Rizky Prasetya',
                                    bank: 'BCA',
                                    number: '1002-563-763111',
                                },
                                {
                                    holder: 'Rizky Prasetya',
                                    bank: 'BSI',
                                    number: '034-21-0812-232',
                                },
                            ]}
                        />
                        <BankAccordion
                            className="mt-2"
                            title="Nomor rekening mempelai wanita"
                            bankList={[
                                {
                                    holder: 'Ayunda Maharani',
                                    bank: 'BCA',
                                    number: '605102-04-117338',
                                },
                                {
                                    holder: 'Ayunda Maharani',
                                    bank: 'BSI',
                                    number: '605102-04-117338',
                                },
                            ]}
                        />
                    </div>
                </Intersect>
            </section>
            <section className="my-10">
                <Intersect>
                    <h2 className="text-center font-serif_en font-bold text-xl">
                        Ucapkan Sesuatu
                    </h2>
                    <div className="flex justify-center my-6">
                        <CommentFormDialog />
                    </div>
                    <CommentList />
                </Intersect>
            </section>
            <footer className="relative mt-20 pb-10 px-8">
                <div className="flex items-center justify-center">
                    <Share />
                </div>
                <p className="mt-20 text-xs text-gy-6">
                    © 2024{' '}
                    <a
                        href="https://bepyan.me/"
                        target="_blank"
                        className="font-bold"
                    >
                        bepyan
                    </a>
                    . All rights reserved.
                </p>
            </footer>
        </main>
    );
}
