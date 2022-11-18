import {IBurger} from "../pages/burgers/type";

export async function getBurgersId(): Promise<number[]> {
    const data = await fetch('http://localhost:1337/api/burgers')
        .then(data => data.json())
        .catch(() => []);
    return data.data
}

export async function getBurgers(): Promise<IBurger[]> {
    const data = await fetch('http://localhost:1337/api/burgers?populate=*')
        .then(data => data.json())
        .catch(() => []);
    const burgers = data.data.map((burger: IBurger) => {
        return {
            id: burger.id,
            attributes: {
                name: burger.attributes.name,
                desc: burger.attributes.desc,
                image: {
                    data: {
                        attributes: {
                            url: `http://localhost:1337${burger.attributes.image.data.attributes.url}`
                        }
                    }
                }
            }
        }
    })
    return burgers;
}

export async function getBurgersById(id: string): Promise<IBurger> {
    const data = await fetch(`http://localhost:1337/api/burgers/${id}?populate=*`)
        .then(data => data.json())
        .catch(() => []);
    const burger: IBurger = data.data

    burger.attributes.image.data.attributes.url = `http://localhost:1337${burger.attributes.image.data.attributes.url}`
    return burger
}
