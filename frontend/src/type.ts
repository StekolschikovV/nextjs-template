export interface IBurger {
    attributes: {
        image: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
        name: string
        desc: string
    }
    id: number
}

export type TypeReviewsPage = {
    reviews: {
        id: string
        body: string
    }[]
};

export interface IComment {
    body: string
    email: string
    id: number
    name: string
    postId: number
}
