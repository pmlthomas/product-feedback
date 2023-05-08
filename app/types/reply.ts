export interface reply {
    replyText: string;
    isLastOne: boolean;
    author: {
        name: string;
        username: string;
    };
    repliedTo: {
        username: string;
    };
}
