import BankAccordion from '~/components/bank-accordion';
import CommentFormDialog from '~/components/comment-form-dialog';
import CommentList from '~/components/comment-list';
import ContactDialog from '~/components/contact-dialog';
import Intersect from '~/components/cores/intersect';
import { DividerIcon, PearlIcon } from '~/components/cores/icons';
import InstaGallery from '~/components/insta-gallery';
import MapInfo from '~/components/map-info';
import NaverMap from '~/components/map-naver';
import Share from '~/components/share';
import VideoPlayer from '~/components/video-player';

export default function Home() {
    return (
        <main className="container">
            {/* 동영상 */}
            <section className="my-20">
                <VideoPlayer />
            </section>
            {/* */}
            <section className="bg-white mt-20">
                <Intersect>
                    <h2 className="font-serif_en text-center text-xl">
                        wedding invitation
                    </h2>
                    <div className="flex justify-center my-4">
                        <PearlIcon />
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center items-center gap-1">
                            <span>Rizky Prasetya</span>
                            <DividerIcon />
                            <span>Ayunda Maharani</span>
                        </div>
                        <div className="mt-4 text-sm text-gy-6 leading-7">
                            Sabtu, 20 Juli 2024
                            <br />
                            Jl. Tj. Raya II, Saigon, Kec. Pontianak Tim., Kota
                            Pontianak, Kalimantan Barat 78242
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
                        모든 겸손과 온유로 하고 오래 참음으로
                        <br />
                        사랑 가운데서 서로 용납하고 평안의 매는 줄로
                        <br />
                        성령이 하나 되게 하신 것을 힘써 지키라
                        <br />
                        에베소서 4:2-3
                    </p>
                    <div className="flex justify-center my-10">
                        <PearlIcon />
                    </div>
                    <p className="text-center leading-7">
                        하나님의 섬세하신 계획 아래
                        <br />
                        사랑과 순종함으로 만나
                        <br />
                        이제 연합하여 새로운 가정을 이루려 합니다.
                        <br />
                        서로를 사랑함으로 하나님을 기쁘시게 하고
                        <br />
                        이웃을 섬기는 선한 가정을 이룰 수 있게
                        <br />
                        오셔서 축복해 주시면 감사하겠습니다.
                    </p>
                </Intersect>
                <Intersect>
                    <div className="mt-14 flex items-center justify-center gap-3">
                        <div>
                            <div>김인환</div>
                            <div>김옥현</div>
                        </div>
                        <span>의</span>
                        <span>차남</span>
                        <strong>경찬</strong>
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-3">
                        <div>
                            <div>김경복</div>
                            <div>김유정</div>
                        </div>
                        <span>의</span>
                        <span>장녀</span>
                        <strong>샛별</strong>
                    </div>
                    <div className="mt-14 text-center">
                        <ContactDialog
                            groomList={[
                                {
                                    designation: '신랑',
                                    name: 'Rizky Prasetya',
                                    phone: '010-5483-4475',
                                },
                                {
                                    designation: '신랑 父',
                                    name: '김인환',
                                    phone: '010-3766-4475',
                                },
                                {
                                    designation: '신랑 母',
                                    name: '김옥현',
                                    phone: '010-5390-8473',
                                },
                            ]}
                            priestList={[
                                {
                                    designation: '신부',
                                    name: 'Ayunda Maharani',
                                    phone: '010-8411-8385',
                                },
                                {
                                    designation: '신부 父',
                                    name: '김경복',
                                    phone: '010-5112-5683',
                                },
                                {
                                    designation: '신부 母',
                                    name: '김유정',
                                    phone: '010-2995-5683',
                                },
                            ]}
                        />
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
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/bsjinj6er61Gi8AhyvU9KI7UgCo.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/2xcl5lJcnipI2gUZMtv3r8IoULA.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/qOLwQwGXfHZA8pq2Fp6mZdRcyrg.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/7GoGgCha7mLw5dIyToa17XKm1LY.JPG',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/gy3Uf-0Z7KuPtFHR6QqcO1Srlyg.jpg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/oxeT5DLWo_pOpS0lL0KZlUaHzZQ.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/DjaDny2JZhLIuoa6-k8Mt5Af9ng.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/CPzjfHa3iL1SBDSnU3TWx2csotM.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/blk6wPCPC7Sygu2C0sdIGB7FD4Y.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/BzqvC-vHXRVk1vZS_4I6OYnwi-E.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/V3fwqXuhDYyeyurrZ8OpF6j6ebg.jpg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/gwWkHxzvdFJ4BXoGuuOsZXfWueE.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/gCOr-6VDhSBRnQwmAd0qBRKhaUM.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/UKSINyu3UWRjawDBwKQkECBkRZY.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ffCK-t-JGSeatpdY2L8MDzjsJzk.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/Xj6R_nRDTqe71_NFRH2K0U-b_dE.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/FesKqvkbdlfulwwj37JoZJQp-Rg.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/gf8lpnunOb0xf-0Sz2fAVmC9hGs.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/lJ8td5kywwANbwtTXj0_zq_AJ-M.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/VbWn2SRy2PQQrTgftzMAMP-Cwd8.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/NKh-6xR3iE293SCyEzaNhp9DHpI.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/8MVO5kXGjNCFrCYsSujHHLEaQKY.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/xgeio_Ltr7-bGzpbMuO1Wfplz1o.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/sItEmSPyBKqVe5gMKQWhOZ0K2n4.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZDbJZw_i3aoq1HE1kHWz8aI3ihU.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/6lW7BNmwEL07ag60YmpgCj_8NXc.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/v4NK9IKMz2A6ZtWpPwIn5smY3Z8.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/6opwqHGH4MlWcbDNdgJLohQDCxE.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/2lj6Nl17e9MrnWLbjbeGm39RBKw.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/GaZS1lCWbuSo4spa-ZxNu0-X_TM.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/8TJZ_OlCsXE9F-pbqH7fYxVAGDY.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/9nEaGz0XNtPQDM85W_BT30leMjA.jpeg',
                        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/0VExM2xYwz1YaJrllX9AgRR2cXY.jpeg',
                    ]}
                />
            </section>
            {/* 오시는 길 */}
            <section className="my-20">
                <Intersect>
                    <h2 className="text-center">오시는 길</h2>
                    <div className="mt-5 mb-10 h-60 w-full">
                        <iframe
                            width="600"
                            height="450"
                            loading="lazy"
                            src="https://www.google.com/maps/dir//Jl.+Tj.+Raya+II,+Saigon,+Kec.+Pontianak+Tim.,+Kota+Pontianak,+Kalimantan+Barat+78242/@-0.0412479,109.2794526,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e1d59ff92f8a3c5:0xe25825f339c3d5d!2m2!1d109.3618546!2d-0.0412479?entry=ttu"
                        ></iframe>
                    </div>
                </Intersect>
                <Intersect>
                    <div className="ml-8 mr-6 mt-4">
                        <MapInfo />
                    </div>
                    <div className="mt-10 mx-8 space-y-4">
                        <div className="flex">
                            <span className="flex-shrink-0 w-14">지하철</span>
                            <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                            <div className="text-xs text-gy-6 mt-[1px] space-y-0.5">
                                <p>[2호선 강남역] 1번 출구 도보 10분</p>
                                <div className="flex gap-0.5">
                                    *
                                    <span>
                                        셔틀버스 강남역 1번 출구 수시 운행
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="flex-shrink-0 w-14">버스</span>
                            <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                            <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                <p>
                                    간선: 140, 146, 341, 360, 400, 402, 420,
                                    440, 441, 452, 470, 541, 542, 740, 741
                                </p>
                                <p>
                                    광역 : 9404, 9408, M4403, M4434, M5438,
                                    M6427, M6439, M7412
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="flex-shrink-0 w-14">주차</span>
                            <DividerIcon className="flex-shrink-0 text-gy-8 mt-[2.5px] mr-2" />
                            <div className="text-xs text-gy-6 mt-[1px] space-y-1.5">
                                <p>
                                    건물 내 주차장 600대 가능
                                    <br />
                                    (무료주차 1시간 30분)
                                </p>
                                <div className="flex gap-0.5">
                                    *
                                    <span>
                                        주차장 이용이 혼잡하오니 불편하시더라도
                                        대중교통 이용을 권장 드립니다.
                                    </span>
                                </div>
                                <div className="flex gap-0.5">
                                    *
                                    <span>
                                        만차 시 제2주차장으로 안내해 드릴 수
                                        있으니 여유롭게 도착하셔서 안내
                                        받으시기를 바랍니다.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Intersect>
            </section>
            {/* 계좌번호 */}
            <section className="my-20">
                <Intersect>
                    <h2 className="text-center">
                        Jika berkenan, berikan kado untuk kami
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
                    <h2 className="text-center">Bagikan momen indah kami</h2>
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
