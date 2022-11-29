import {IComment} from "type";

export function useRandomColor(items: IComment[] | undefined) {
    const resultRandomColor = items?.map(item => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        item.body = `<div style="background-color: #${randomColor}">${item.body}</div>`
        return item
    })
    return {
        resultRandomColor
    };
}
