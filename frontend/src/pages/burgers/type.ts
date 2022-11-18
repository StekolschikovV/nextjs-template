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
