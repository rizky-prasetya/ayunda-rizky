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
                                Ayunda Maharani
                            </span>
                            <DividerIcon />
                            <span className="font-serif_en font-bold text-xl">
                                Rizky Prasetya
                            </span>
                        </div>
                        <div className="mt-4 text-xs text-gy-6 leading-7">
                            Sabtu, 20 Juli 2024 Pukul 08:00 - 17:00 WIB
                            <br />
                            Gedung Putih Jami&apos;ah
                        </div>
                    </div>
                </Intersect>
                <div className="mt-10">
                    <img
                        className="w-full h-full aspect-4/3 pointer-events-none"
                        src="https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/POLAROID.png?alt=media&token=acb41b3d-8ba0-4254-ba9b-b15e890b91a8"
                        alt=""
                    />
                </div>
            </section>
            {/* */}
            <section className="text-sm mt-10">
                <Intersect>
                    <p className="text-center leading-7">
                        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                        <br />
                        menciptakan pasangan-pasangan untukmu dari (jenis)
                        <br />
                        dirimu sendiri agar kamu merasa tenteram kepadanya. Dia
                        <br />
                        menjadikan di antaramu rasa cinta dan kasih sayang.
                        <br />
                        Sesungguhnya pada yang demikian itu benar-benar terdapat
                        <br />
                        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                        <br />
                        <br />
                        <a
                            href="https://quran.nu.or.id/ar-rum/21"
                            target="_blank"
                            className="font-bold text-base font-serif_en"
                        >
                            QS. Ar-Rum 30:21
                        </a>
                    </p>
                    <div className="flex justify-center my-10">
                        <PearlIcon />
                    </div>
                    <div className="text-center leading-7">
                        <h2 className="font-serif_en font-bold text-center text-xl">
                            Assalamualaikum Wr. Wb
                        </h2>
                        <br />
                        Dengan memohon Rahmat dan Ridho Illahi,
                        <br />
                        teriring niat menjalankan Sunnah Rasulullah ﷺ
                        <br />
                        untuk membentuk rumah tangga yang Sakinah, Mawaddah
                        <br />
                        wa Rahmah, kami mohon do&apos;a agar senantiasa
                        diberikan
                        <br />
                        kelancaran dan keberkahan
                    </div>
                </Intersect>
                <Intersect>
                    <div className="ml-8 mr-6 mt-8 flex items-center justify-center">
                        <div className="mx-8 space-y-6 text-base">
                            <div className="flex">
                                <div className="flex items-center justify-center">
                                    <span className="flex-shrink-0 w-14 font-serif_en font-bold mr-6">
                                        Ayunda Maharani
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                    <span className="flex-shrink-0 w-16 text-xs text-gy-6">
                                        Putri dari
                                    </span>
                                    <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                </div>
                                <div className="flex items-center justify-center">
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
                            <div className="flex">
                                <div className="flex items-center justify-center">
                                    <span className="flex-shrink-0 w-14 font-serif_en font-bold mr-6">
                                        Rizky Prasetya
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                    <span className="flex-shrink-0 w-16 text-xs text-gy-6">
                                        Putra dari
                                    </span>
                                    <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                        <div className="flex gap-0.5">
                                            <span>Bapak Suparno</span>
                                        </div>
                                        <div className="flex gap-0.5">
                                            <span>Ibu Jumiati (Alm)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8 mr-6 mt-8">
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
                                            Gedung Putih Jami&apos;ah (Jl. Tj.
                                            Raya II, Saigon, Kec. Pontianak
                                            Timur, Kota Pontianak Kalimantan
                                            Barat 78242)
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
                                            Gedung Putih Jami&apos;ah (Jl. Tj.
                                            Raya II, Saigon, Kec. Pontianak
                                            Timur, Kota Pontianak Kalimantan
                                            Barat 78242)
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
                        src="https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/TANGGAL.png?alt=media&token=9a53183f-9c7b-42b3-b3b6-5bfa3c750c03"
                        alt="Ayunda & Rizky"
                    />
                </div>
            </section>
            {/* 갤러리 */}
            <section>
                <div className="my-16 select-none pointer-events-none">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/WEDDING.gif?alt=media&token=8c22a751-ff24-462a-97a6-29ed629ef37a"
                        alt="Ayunda & Rizky"
                    />
                </div>
                <InstaGallery
                    images={[
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0777.JPG?alt=media&token=6c245d47-4f3e-449b-958b-00a534f2589d',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0785.JPG?alt=media&token=541145bb-3e3f-4736-b945-17765a0cb855',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0786.JPG?alt=media&token=bd9f903a-d076-4002-8e09-22919d093cbf',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0787.JPG?alt=media&token=3bcd66f7-1736-4f4c-81ea-d3f57660c249',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0788.JPG?alt=media&token=df350faa-52ce-4a96-88e1-39bb4807ab4f',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0789.JPG?alt=media&token=183bcc6d-2391-455d-bb0a-1b27f974eabb',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0790.JPG?alt=media&token=7bdc22fe-55f9-46a8-a024-b5bdbe08c3b4',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0791.JPG?alt=media&token=99a76218-e027-4f23-9df0-a2afb5f0c8d9',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0792.JPG?alt=media&token=2ed9009f-95bc-4d9d-95a8-646a06179b9f',
                        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/IMG_E0793.JPG?alt=media&token=74d9cc63-21e4-44b9-ba29-8fc92bb74404',
                    ]}
                />
            </section>
            {/* 오시는 길 */}
            <section className="my-20">
                <Intersect>
                    <h2 className="text-center font-serif_en font-bold text-xl">
                        Alamat Resepsi
                    </h2>
                    <div className="mt-8 mb-20 h-60 w-full">
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
                        <BankAccordion
                            className="mt-2"
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
                <div className="mt-20 flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between items-center text-xs text-gy-6">
                    <p>
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
                    <p className="text-[11px] md:text-xs">
                        Made with ❤️ by Ayunda & Rizky
                    </p>
                </div>
            </footer>
        </main>
    );
}
