'use client';
import { copy } from '~/libs/copy';
import {
    KakaoIcon,
    LinkIcon,
    ShareIcon,
    TelegramIcon,
    ThreeDotsIcon,
    WhatsappIcon,
} from './cores/icons';
import {
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
} from './cores/popover';
import { MouseEvent, useState } from 'react';
import Script from 'next/script';

const URL =
    process.env.NODE_ENV === 'production'
        ? // ? 'https://charlan-byul.vercel.app/'
          'http://localhost:3000/'
        : 'http://localhost:3000/';

export default function Share() {
    const [open, setOpen] = useState(false);

    const onCopy = () => {
        copy(URL);
        setOpen(false);
    };

    const whatsappShare = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => {
        e.preventDefault();
        window.open(
            'https://api.whatsapp.com/send/?text=I+am+enquiring+about+the+apartment+listing&type=custom_url&app_absent=0',
        );
    };

    const telegramShare = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => {
        e.preventDefault();
        window.open(
            'https://api.whatsapp.com/send/?text=I+am+enquiring+about+the+apartment+listing&type=custom_url&app_absent=0',
        );
    };

    const otherShare = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => {
        e.preventDefault();
        window.navigator.share({
            title: '2022.10.01. 이재영♥조소영 결혼합니다',
            text: '2022년 10월 1일\n이재영 ♥ 조소영 결혼합니다.\n\n서로를 보듬어주고 지켜주며 다져온 인연을\n이제는 부부로서 이어가고자 합니다.\n눈부시게 푸르른 가을 하늘 아래\n새로이 함께하는 저희 두 사람의 모습을\n축복의 박수로 격려 부탁드립니다.\n\n2022년 10월 1일\n서초 더화이트베일 V홀',
            url: 'https://rosy.day',
        });
    };

    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className="text-gy-8 transition-colors active:text-gy-9">
                    <ShareIcon className="h-6 w-6" />
                </PopoverTrigger>
                <PopoverContent sideOffset={5} className="p-2">
                    <button
                        className="w-full flex items-center gap-2 text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none"
                        onClick={onCopy}
                    >
                        <div className="h-4 w-4 flex items-center justify-center">
                            <LinkIcon className="text-gy-8" />
                        </div>
                        Salin tautan
                    </button>
                    <button
                        onClick={whatsappShare}
                        className="w-full flex gap-2 items-center text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none"
                    >
                        <WhatsappIcon className="w-4 h-4" />
                        <span>Whatsapp</span>
                    </button>
                    <button
                        onClick={telegramShare}
                        className="w-full flex gap-2 items-center text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none"
                    >
                        <TelegramIcon className="w-4 h-4" />
                        <span>Telegram</span>
                    </button>
                    <button
                        onClick={otherShare}
                        className="w-full flex gap-2 items-center text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none"
                    >
                        <ThreeDotsIcon className="w-4 h-4" />
                        <span>Lainnya</span>
                    </button>
                    <PopoverArrow className="fill-white" />
                </PopoverContent>
            </Popover>
        </div>
    );
}
