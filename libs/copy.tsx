import { toast } from 'react-hot-toast';

export const copy = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast(() => (
            <div className="min-w-[200px]">
                <p className="text-sm">
                    <b>Berhasil menyalin tautan</b>
                </p>
                <p className="text-xs">{text}</p>
            </div>
        ));
    } catch (e) {
        alert('Gatal menyalin tautan');
    }
};
