import {IBurger} from "type";
import {BACKEND_URL} from "const";

export async function getBurgersId(): Promise<number[]> {
    const data = await fetch(`${BACKEND_URL}/api/burgers`)
        .then(data => data.json())
        .catch(() => {
            console.error('Error getBurgersId fetching')
            return []
        });
    return data?.data?.map((data: { id: number }) => {
        return data.id
    })
}

export async function getBurgers(): Promise<IBurger[]> {
    const data = await fetch(`${BACKEND_URL}/api/burgers?populate=*`)
        .then(data => data.json())
        .catch(() => {
            console.error('Error getBurgers fetching')
            return []
        });
    const burgers = data?.data?.map((burger: IBurger) => {
        return {
            id: burger.id,
            attributes: {
                name: burger.attributes.name,
                desc: burger.attributes.desc,
                image: {
                    data: {
                        attributes: {
                            url: `${BACKEND_URL}${burger.attributes.image.data.attributes.url}`
                        }
                    }
                }
            }
        }
    })
    return burgers;
}

export async function getBurgersById(id: string): Promise<IBurger> {
    const data = await fetch(`${BACKEND_URL}/api/burgers/${id}?populate=*`)
        .then(data => data.json())
        .catch(() => {
            console.error('Error getBurgersById fetching')
            return []
        });
    const burger: IBurger = data.data
    burger.attributes.image.data.attributes.url = `${BACKEND_URL}${burger.attributes.image.data.attributes.url}`
    return burger
}
