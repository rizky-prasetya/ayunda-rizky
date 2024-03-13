'use client';

import { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '~/libs/utils';
import { createPortal } from 'react-dom';
import { useInstaGalleryStore } from '~/libs/insta-gallery-store';

export default function InstaGalleryDialog({ images }: { images: string[] }) {
    const open = useInstaGalleryStore((state) => state.open);
    const sliderIndex = useInstaGalleryStore((state) => state.sliderIndex);
    const closeHandler = useInstaGalleryStore((state) => state.closeHandler);
    const setSliderIndex = useInstaGalleryStore(
        (state) => state.setSliderIndex,
    );

    const moveSlide = (targetIndex: number) => {
        if (0 > targetIndex || targetIndex >= images.length) {
            return;
        }

        setSliderIndex(targetIndex);
    };

    useEffect(() => {
        const meta = document.querySelector('meta[name="viewport"]');

        if (open) {
            meta?.setAttribute(
                'content',
                'width=device-width, initial-scale=1',
            );
        } else {
            meta?.setAttribute(
                'content',
                'width=device-width, initial-scale=1, maximum-scale=1',
            );
        }
    }, [open]);

    return createPortal(
        <RemoveScroll enabled={open} removeScrollBar allowPinchZoom>
            <div
                className={cn(
                    !open ? 'hidden' : 'animate-in fade-in-0',
                    'z-40 w-full h-full fixed inset-0 bg-white/90 backdrop-blur',
                )}
            />
            <div
                className={cn(
                    !open ? 'hidden' : 'flex flex-col',
                    'container z-50 w-full h-full fixed inset-0 overflow-y-auto',
                )}
            >
                <div className="p-2 text-right">
                    <button
                        className=" font-serif_en rounded-full transition-opacity active:opacity-60"
                        onClick={closeHandler}
                    >
                        Tutup
                    </button>
                </div>
                <div
                    className={cn(
                        'flex-1 flex items-center flex-shrink-0 select-none',
                    )}
                >
                    <img
                        src={images[sliderIndex]}
                        alt=""
                        data-animate
                        className="pointer-events-none"
                    />
                </div>
                {/* 인디케이터 */}
                <div className="mt-auto pt-2 pb-12">
                    <div className="flex justify-center py-1 text-[10px]">
                        Gambar ke {sliderIndex + 1} dari {images.length} gambar
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <button
                            disabled={sliderIndex === 0}
                            className={cn(
                                'p-1 rounded transition-opacity',
                                sliderIndex === 0
                                    ? 'disabled:opacity-40'
                                    : 'active:opacity-60',
                            )}
                            onClick={() => moveSlide(sliderIndex - 1)}
                        >
                            «
                        </button>
                        <button
                            disabled={sliderIndex === images.length - 1}
                            className={cn(
                                'p-1 rounded-full transition-opacity',
                                sliderIndex === images.length - 1
                                    ? 'disabled:opacity-40'
                                    : 'active:opacity-60',
                            )}
                            onClick={() => moveSlide(sliderIndex + 1)}
                        >
                            »
                        </button>
                    </div>
                </div>
            </div>
        </RemoveScroll>,
        document.body,
    );
}
