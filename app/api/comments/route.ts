import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { formatDate } from '~/libs/date';
import { db } from '~/libs/firebase';
import { CommentPost } from '~/libs/types';

export async function GET() {
    const { docs } = await getDocs(collection(db, 'comments'));
    const list = docs.map((doc) => {
        const data = doc.data();
        delete data['password'];
        return {
            id: doc.id,
            ...data,
        };
    });

    return NextResponse.json({ data: { list } });
}

export async function POST(req: Request) {
    const data = (await req.json()) as CommentPost;

    const docRef = await addDoc(collection(db, 'comments'), {
        ...data,
        createTime: formatDate(new Date(), 'yyyy-M-d h:m:s'),
    });
    const docSnap = await getDoc(docRef);
    const addedData = {
        ...docSnap.data(),
        id: docRef.id,
    };

    return NextResponse.json({ data: addedData });
}
