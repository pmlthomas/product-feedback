export interface feedback {
    id: string;
    title: string;
    description: string;
    roadmapState: string;
    createdAt: string;
    categoryId: string;
    authorId: string;
    category: {
        name: string;
    };
    categoryName: string;
    isVoted: boolean;
    totalRating: number;
    commentsLength: number;
    ratings: [
        {
            authorId: string;
        }
    ];
    comments: [
        {
            _count: {
                replies: number;
            };
        }
    ];
    _count: {
        comments: number;
        ratings: number;
    };
}
