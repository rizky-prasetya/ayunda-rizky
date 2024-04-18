'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
    const countDownDate = +new Date('2024-07-20 08:00:00');

    const [countDown, setCountDown] = useState(
        countDownDate - +new Date()
    );

    useEffect(() => {
        const interval = setInterval(() =>
            setCountDown(countDownDate - +new Date())
        , 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    const format = (value: number) => `0${value}`.slice(-2);

    return (
        <div className="flex items-center justify-center space-x-2 md:space-x-3">
            <div className="flex flex-col items-center px-4">
                <span className="text-3xl leading-7 lg:text-4xl">{format(days)}</span>
                <span className="text-xs text-gy-6 mt-3">Hari</span>
            </div>
            <span className="w-[0.8px] h-24 bg-gray-400"></span>
            <div className="flex flex-col items-center px-4">
                <span className="text-3xl leading-7 lg:text-4xl">{format(hours)}</span>
                <span className="text-xs text-gy-6 mt-3">Jam</span>
            </div>
            <span className="w-[0.8px] h-24 bg-gray-400"></span>
            <div className="flex flex-col items-center px-4">
                <span className="text-3xl leading-7 lg:text-4xl">{format(minutes)}</span>
                <span className="text-xs text-gy-6 mt-3">Menit</span>
            </div>
            <span className="w-[0.8px] h-24 bg-gray-400"></span>
            <div className="flex flex-col items-center px-4">
                <span className="text-3xl leading-7 lg:text-4xl">{format(seconds)}</span>
                <span className="text-xs text-gy-6 mt-3">Detik</span>
            </div>
        </div>
    );
}
