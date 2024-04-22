import { cn } from '~/libs/utils';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox({ name, className, value, alt }: InputProps) {
    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                className="peer hidden"
            />

            <div
                className={cn(
                    'flex h-10 w-full items-center justify-between px-3 py-2 border-2 rounded-md cursor-pointer text-sm ring-gray-200 group peer-checked:border-gray-800 placeholder:text-muted-foreground hover:bg-gray-50 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
            >
                <h2 className="font-medium text-gray-700">{alt}</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="w-9 h-9 text-gray-800 invisible group-[.peer:checked+&]:visible"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </label>
    );
}
