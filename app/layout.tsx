import './global.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import HotToaster from '~/components/hot-toaster';
import { PreloadResources } from './preload';
import { fontVariable } from './fonts';

const config = {
    title: 'Ayunda Maharani ♥ Rizky Prasetya Wedding',
    description: 'Sabtu, 20 Juli 2024',
};

export const metadata: Metadata = {
    title: config.title,
    description: config.description,
    openGraph: {
        title: config.title,
        description: config.description,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/POLAROID.png?alt=media&token=acb41b3d-8ba0-4254-ba9b-b15e890b91a8',
            // 'https://github.com/bepyan/charlan-byul/assets/65283190/a80e24cb-4501-4106-9019-5e37effc6fea',
        ],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    manifest: '/manifest.json',
    themeColor: '#FFFFFF',
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id-ID" className={fontVariable}>
            <PreloadResources />
            <body className="font-serif">
                {children}
                <HotToaster />
                <GoogleAnalytics />
            </body>
        </html>
    );
}

function GoogleAnalytics() {
    const ga_id = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
            />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${ga_id}');
        `}
            </Script>
        </>
    );
}
