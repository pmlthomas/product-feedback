export interface reply {
    id: string;
    replyText: string;
    isLastOne: boolean;
    author: {
        name: string;
        username: string;
    };
    repliedTo: {
        username: string;
    };
    replyReplies: [
        {
            id: string;
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
    ];
}
