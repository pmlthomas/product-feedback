export interface reply {
    replyText: string;
    author: {
        name: string;
        username: string;
    };
    repliedTo: {
        username: string;
    };
}
