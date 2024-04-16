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
        <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex flex-col items-center px-4">
                <span className="text-4xl leading-7 lg:text-5xl">{format(days)}</span>
                <span className="text-gray-400 mt-2">Hari</span>
            </div>
            <span className="w-[1px] h-24 bg-gray-400"></span>
            <div className="flex flex-col items-center px-4">
                <span className="text-4xl leading-7 lg:text-5xl">{format(hours)}</span>
                <span className="text-gray-400 mt-2">Jam</span>
            </div>
            <span className="w-[1px] h-24 bg-gray-400"></span>
            <div className="flex flex-col items-center px-4">
                <span className="text-4xl leading-7 lg:text-5xl">{format(minutes)}</span>
                <span className="text-gray-400 mt-2">Menit</span>
            </div>
            <span className="w-[1px] h-24 bg-gray-400"></span>
            <div className="flex flex-col items-center px-4">
                <span className="text-4xl leading-7 lg:text-5xl">{format(seconds)}</span>
                <span className="text-gray-400 mt-2">Detik</span>
            </div>
        </div>
    );
}
