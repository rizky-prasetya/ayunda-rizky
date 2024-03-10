/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.tsx', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            sans: ['var(--font-sans)', 'Noto Sans', 'sans-serif'],
            serif: ['var(--font-serif)', 'Nanum Myeongjo', 'serif'],
            serif_en: [
                'var(--font-serif-en)',
                'Cormorant SC',
                'Nanum Myeongjo',
                'serif',
            ],
        },
        extend: {
            fontSize: {
                xs: '13px',
            },
            container: {
                center: true,
                screens: {
                    sm: '600px',
                },
            },
            aspectRatio: {
                '4/5': '4 / 5',
                '4/3': '4 / 3',
            },
            colors: {
                gy: {
                    6: '#666',
                    8: '#888',
                    9: '#999',
                },
            },
            boxShadow: {
                popover:
                    'rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
