// @ts-nocheck

'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
    // ReactDOM.preconnect('https://fonts.googleapis.com');
    // ReactDOM.preconnect('https://fonts.gstatic.com', { crossOrigin: '' });
    // ReactDOM.preload(
    //   'https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400;700&family=Nanum+Myeongjo:wght@400;700&family=Noto+Sans+KR:wght@200;400;500;700&display=swap',
    //   { as: 'style' },
    // );

    // ReactDOM.preload(
    //   'https://velog.velcdn.com/images/bepyan/post/4b5eac52-8d8f-465f-8087-564517fa4f35/image.mp4',
    //   { as: 'video' },
    // );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/POLAROID.png?alt=media&token=acb41b3d-8ba0-4254-ba9b-b15e890b91a8',
        { as: 'image' },
    );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/263515567-2a6bfd15-e502-4d61-b94d-eec5758061a4.png?alt=media&token=478ff7cd-6f19-48fd-a23e-fd2844a866a0',
        { as: 'image' },
    );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/TANGGAL.png?alt=media&token=9a53183f-9c7b-42b3-b3b6-5bfa3c750c03',
        { as: 'image' },
    );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/ayunda-rizky.appspot.com/o/WEDDING.gif?alt=media&token=8c22a751-ff24-462a-97a6-29ed629ef37a',
        { as: 'image' },
    );

    return null;
}
