export interface comment {
    id: string;
    isLastOne: boolean;
    commentText: string;
    _count: {
        replies: number;
    };
    author: {
        name: string;
        username: string;
        email: string;
        profileImg: string;
    };
    replies: [
        {
            replyText: string;
            author: {
                name: string;
                username: string;
                profileImg: string;
            };
            repliedTo: {
                username: string;
            };
        }
    ];
}
