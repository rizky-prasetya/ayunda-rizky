'use client';

import { useCommentStore } from '~/libs/comment-store';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from './cores/dialog';
import Input from './cores/input';
import Textarea from './cores/textarea';
import { SendIcon } from './cores/icons';
import { useState } from 'react';
import { CommentPost } from '~/libs/types';
import Button from './cores/button';
import { toast } from 'react-hot-toast';
import SelectGroup from './select';

export default function CommentFormDialog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const commentAPI = useCommentStore((state) => state.api);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (loading) return;
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            password: { value: string };
            message: { value: string };
        };

        const comment: CommentPost = {
            name: !!target.name.value ? target.name.value : 'Anonim',
            password: target.password.value,
            message: target.message.value.replace(/\n\r?/g, '\n\r'),
        };

        if (!comment.message) {
            toast.error('Pesan tidak boleh kosong.');
            return;
        }

        if (!comment.message) {
            toast.error('Pesan tidak boleh kosong.');
            return;
        }

        setLoading(true);
        await toast.promise(commentAPI.post(comment), {
            loading: 'Loading...',
            success: 'Berhasil.',
            error: 'Gagal.',
        });
        setLoading(false);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="inline-flex items-center justify-center gap-1 text-xs border rounded-full px-4 py-2 transition-colors active:bg-gray-50 select-none">
                <SendIcon />
                Berikan Ucapan & Do&apos;a Restu
            </DialogTrigger>
            <DialogContent className="w-10/12 rounded-lg border">
                <DialogTitle className="p-4">
                    Berikan Ucapan & Do&apos;a Restu
                </DialogTitle>
                <div className="px-4 pb-4">
                    <form className="" onSubmit={(e) => onSubmit(e)}>
                        <div className="flex gap-3">
                            <Input
                                disabled={loading}
                                name="name"
                                placeholder="Nama pengguna"
                                className="flex-[1]"
                            />
                            <Input
                                disabled={loading}
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="flex-[2]"
                            />
                        </div>
                        <SelectGroup
                            className="mt-3"
                            selectList={[
                                {
                                    text: 'Konfirmasi Kehadiran',
                                    value: '',
                                    disabled: true,
                                },
                                {
                                    text: 'Hadir',
                                    value: 'true',
                                },
                                {
                                    text: 'Tidak Hadir',
                                    value: 'false',
                                },
                            ]}
                        />
                        <Textarea
                            disabled={loading}
                            name="message"
                            className="mt-3 resize-none"
                            placeholder="Ucapkan sesuatu ..."
                        />
                        <div className="mt-3 flex items-center gap-2">
                            <button
                                disabled={loading}
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex-1"
                            >
                                Batal
                            </button>
                            <Button
                                disabled={loading}
                                type="submit"
                                className="flex-[2]"
                            >
                                Kirim
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
