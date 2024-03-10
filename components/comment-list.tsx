'use client';
import { DownIcon, LoadingLoopIcon } from './cores/icons';
import { useEffect, useState } from 'react';
import { useCommentStore } from '~/libs/comment-store';
import { formatDate } from '~/libs/date';
import CommentDeleteDialog from './comment-delete-dialog';
import Intersect from './cores/intersect';

const SLICE_SIZE = 6;

export default function CommentList() {
    const [sliceIndex, setSliceIndex] = useState(1);

    const [loadingList, setLoadingList] = useState(false);
    const commentList = useCommentStore((state) => state.list);
    const commentAPI = useCommentStore((state) => state.api);

    useEffect(() => {
        setLoadingList(true);
        commentAPI.request().then(() => {
            setLoadingList(false);
        });
    }, [commentAPI]);

    return (
        <div>
            {loadingList && (
                <div className="pt-8 flex justify-center">
                    <LoadingLoopIcon className="w-5 h-5 text-gy-6" />
                </div>
            )}
            {!loadingList && (
                <Intersect className="pl-8 pr-6 text-sm">
                    {commentList
                        .slice(0, sliceIndex * SLICE_SIZE)
                        .map((comment, i) => (
                            <div
                                key={comment.id}
                                data-animate-stage={(i % SLICE_SIZE) + 1}
                                className="py-4 border-b"
                            >
                                <div className="text-sm text-gy-6 flex">
                                    <span>{comment.name}</span>
                                    <span className="ml-auto font-light text-[12px]">
                                        {/* {formatDate(new Date(comment.createTime), 'yy.MM.dd')} */}
                                    </span>
                                    <CommentDeleteDialog
                                        targetComment={comment}
                                    />
                                </div>
                                <div className="mt-1 whitespace-pre-line">
                                    {comment.message}
                                </div>
                            </div>
                        ))}
                    <div className="mt-4 flex items-center justify-center">
                        {commentList.length > sliceIndex * SLICE_SIZE && (
                            <button
                                className="p-2 rounded-full transition-colors active:bg-gray-100"
                                onClick={() => setSliceIndex(sliceIndex + 1)}
                            >
                                <DownIcon className="text-gy-8" />
                            </button>
                        )}
                    </div>
                </Intersect>
            )}
        </div>
    );
}
