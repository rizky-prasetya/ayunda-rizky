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
        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/POLAROID.png?alt=media&token=ec371b8f-d603-47dc-9448-ff36407d0bf8',
        { as: 'image' },
    );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/263515567-2a6bfd15-e502-4d61-b94d-eec5758061a4.png?alt=media&token=29fb7196-a38c-42aa-bf70-3641072655bc',
        { as: 'image' },
    );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/TANGGAL.png?alt=media&token=bb4d3057-4669-4fbc-890e-1bd920ee70cf',
        { as: 'image' },
    );
    ReactDOM.preload(
        'https://firebasestorage.googleapis.com/v0/b/rizky-ayunda.appspot.com/o/GIFFF.gif?alt=media&token=be3320e9-656c-4858-abe8-50a6cb01241b',
        { as: 'image' },
    );

    return null;
}
