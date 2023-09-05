import BankAccordion from '~/components/bank-accordion';
import CommentFormDialog from '~/components/comment-form-dialog';
import CommentList from '~/components/comment-list';
import ContactDialog from '~/components/contact-dialog';
import { DividerIcon, LinkIcon, PearlIcon } from '~/components/icons';
import InstaGallery from '~/components/insta-gallery';
import NaverMap from '~/components/naver-map';
import VideoPlayer from '~/components/video-player';

export default function Home() {
  return (
    <main className='container'>
      {/* 동영상 */}
      <section className='my-20'>
        <VideoPlayer />
      </section>
      {/* */}
      <section className='bg-white mt-20'>
        <h2 className='font-serif_en text-center text-xl'>wedding invitation</h2>
        <div className='flex justify-center my-4'>
          <PearlIcon />
        </div>
        <div className='text-center'>
          <div className='flex justify-center items-center gap-1'>
            <span>김경찬</span>
            <DividerIcon />
            <span>김샛별</span>
          </div>
          <div className='mt-4 text-sm text-gy-6 leading-7'>
            2023년 11월 4일 토요일 낮 12:30
            <br />
            라비돌웨딩강남 2F 오뗄홀
          </div>
        </div>
        <div className='mt-10'>
          <img
            className='w-full h-full aspect-4/3'
            src='https://github.com/bepyan/charlan-byul/assets/65283190/bc216e75-9b2f-42e5-90aa-af2473195c24'
            alt=''
          />
        </div>
      </section>
      {/* */}
      <section className='text-sm mt-10'>
        <p className='text-center leading-7'>
          모든 겸손과 온유로 하고 오래 참음으로
          <br />
          사랑 가운데서 서로 용납하고 평안의 매는 줄로
          <br />
          성령이 하나 되게 하신 것을 힘써 지키라
          <br />
          에베소서 4:2-3
        </p>
        <div className='flex justify-center my-10'>
          <PearlIcon />
        </div>
        <p className='text-center leading-7'>
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
        <div className='mt-10 flex items-center justify-center gap-3'>
          <div>
            <div>김인환</div>
            <div>김옥현</div>
          </div>
          <span>의</span>
          <span>차남</span>
          <strong>경찬</strong>
        </div>
        <div className='mt-10 flex items-center justify-center gap-3'>
          <div>
            <div>김경복</div>
            <div>김유정</div>
          </div>
          <span>의</span>
          <span>장녀</span>
          <strong>샛별</strong>
        </div>
        <div className='mt-10 text-center'>
          <ContactDialog
            groomList={[
              { designation: '신랑', name: '김경찬', phone: '010-5483-4475' },
              { designation: '신랑 父', name: '김인환', phone: '010-3766-4475' },
              { designation: '신랑 母', name: '김옥현', phone: '010-5390-8473' },
            ]}
            priestList={[
              { designation: '신부', name: '김샛별', phone: '010-8411-8385' },
              { designation: '신부 父', name: '김경복', phone: '010-5112-5683' },
              { designation: '신부 母', name: '김유정', phone: '010-2995-5683' },
            ]}
          />
        </div>
      </section>
      {/* 달력 */}
      <section className='mt-20'>
        <div className='relative select-none pointer-events-none'>
          <img
            className='w-full h-full aspect-4/5'
            src='https://github.com/bepyan/charlan-byul/assets/65283190/21aed765-49f8-40ab-ae4b-6446c915f774'
            alt='달력'
          />
        </div>
      </section>
      {/* 갤러리 */}
      <section className='mt-1'>
        <div className='my-10 select-none pointer-events-none'>
          <img
            src='https://github.com/bepyan/charlan-byul/assets/65283190/cb2af3b3-aea8-4a8a-91fd-3de68e037bcb'
            alt='갤러리'
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
            'https://t1.daumcdn.net/brunch/service/user/d4v5/image/BzqvC-vHXRVk1vZS_4I6OYnwi-E.jpeg',
            'https://t1.daumcdn.net/brunch/service/user/d4v5/image/blk6wPCPC7Sygu2C0sdIGB7FD4Y.jpeg',
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
      <section className='my-20'>
        <h2 className='text-center'>오시는 길</h2>
        <NaverMap className='my-10 h-60 w-full' />
        <div className='mx-8 mt-4'>
          <div className='relative'>
            <p className=''>
              서울 강남구 논현로79길 72
              <br />
              라비돌웨딩강남 2F 오뗄홀
            </p>
          </div>
          <p className='mt-2 text-xs text-gy-8'>02-538-3300</p>
        </div>
        <div className='mt-10 mx-8 space-y-3'>
          <div className='flex'>
            <span className='w-14'>지하철</span>
            <DividerIcon className='text-gy-8 mt-[2.5px] mr-2' />
            <span className='text-sm text-gy-6 mt-[1px]'>[2호선 강남역] 2번 출구 도보 3분</span>
          </div>
          <div className='flex'>
            <span className='w-14'>버스</span>
            <DividerIcon className='text-gy-8 mt-[2.5px] mr-2' />
            <div className='text-sm text-gy-6 mt-[1px]'>
              <p>간선: 112.224. 4455. 667</p>
              <p>간선: 112.224. 4455. 667</p>
            </div>
          </div>
          <div className='flex'>
            <span className='w-14'>주차</span>
            <DividerIcon className='text-gy-8 mt-[2.5px] mr-2' />
            <span className='text-sm text-gy-6 mt-[1px]'>건물 내 주차장 500대 가능</span>
          </div>
        </div>
      </section>
      {/* 계좌번호 */}
      <section className='my-20'>
        <h2 className='text-center'>마음 전하실 곳</h2>
        <div className='mt-8 mx-8'>
          <BankAccordion
            title='신랑측 계좌번호'
            bankList={[
              { holder: '김경찬', bank: '우리', number: '1002-563-763111' },
              { holder: '김인환', bank: '국민', number: '034-21-0812-232' },
              { holder: '김옥현', bank: '국민', number: '404601-01-077682' },
            ]}
          />
          <BankAccordion
            className='mt-2'
            title='신부측 계좌번호'
            bankList={[
              { holder: '김샛별', bank: '국민', number: '605102-04-117338' },
              { holder: '김경복', bank: '국민', number: '043-24-0643-400' },
              { holder: '김유정', bank: '농협', number: '356-0942-7634-43' },
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className='text-center'>축하 메시지</h2>
        <div className='flex justify-center my-6'>
          <CommentFormDialog />
        </div>
        <CommentList />
      </section>
      <footer className='relative mt-20 pb-10 px-8'>
        {/* <div className='flex items-center gap-1 text-xs'>
          <LinkIcon className='text-gy-8' />
          청첩장 링크 복사하기
        </div> */}
        <p className='mt-8 text-xs text-gy-6'>
          © 2023{' '}
          <a href='https://bepyan.me/' target='_blank' className='font-bold'>
            bepyan
          </a>
          . All rights reserved.
        </p>
      </footer>
    </main>
  );
}

[
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/bsjinj6er61Gi8AhyvU9KI7UgCo.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/2xcl5lJcnipI2gUZMtv3r8IoULA.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/qOLwQwGXfHZA8pq2Fp6mZdRcyrg.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/7GoGgCha7mLw5dIyToa17XKm1LY.JPG',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/gy3Uf-0Z7KuPtFHR6QqcO1Srlyg.jpg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/oxeT5DLWo_pOpS0lL0KZlUaHzZQ.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/DjaDny2JZhLIuoa6-k8Mt5Af9ng.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/CPzjfHa3iL1SBDSnU3TWx2csotM.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/BzqvC-vHXRVk1vZS_4I6OYnwi-E.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/blk6wPCPC7Sygu2C0sdIGB7FD4Y.jpeg',
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
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/o6wwaaNlcBXNIuS2eaJojLOwEi4.jpeg',
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/_3Sv7kwk5kNGbOd1Z_xz975esNk.gif',
  'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
];
