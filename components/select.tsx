'use client';
import React, { useState } from 'react';
import { cn } from '~/libs/utils';

export default function SelectGroup({
    selectList,
    className,
}: {
    selectList: { text: string; value: string; disabled?: boolean }[];
    className?: string;
}) {
    const [selectedOption, setSelectedOption] = useState<string>('');

    return (
        <div className="relative z-20 bg-transparent">
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className={cn(
                    'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-gray-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
            >
                {selectList.map(({ text, value, disabled }, i) => (
                    <option
                        key={i}
                        value={value}
                        className={
                            disabled ? 'text-muted-foreground' : 'text-body'
                        }
                        disabled={disabled}
                    >
                        {text}
                    </option>
                ))}
            </select>
        </div>
    );
}
