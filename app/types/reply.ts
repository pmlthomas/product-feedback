export interface reply {
    id: string;
    replyText: string;
    isLastOne: boolean;
    author: {
        name: string;
        username: string;
        profileImg: string;
    };
    repliedTo: {
        username: string;
    };
}
