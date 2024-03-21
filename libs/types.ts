declare global {
    interface Window {
        Kakao: any;
        naver: any;
    }
}

export type Comment = {
    id: string;
    name: string;
    message: string;
    attendance: boolean;
    createTime: string;
};

export type CommentPost = {
    name: string;
    password: string;
    message: string;
    attendance: boolean;
};
