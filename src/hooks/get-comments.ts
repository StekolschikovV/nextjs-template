import {IComment} from "type";
import useSWR from "swr";
import {JSONPLACEHOLDER_URL} from "const";

export function useGetComment() {
    const {data, error} = useSWR<IComment[], string>(JSONPLACEHOLDER_URL, (url) =>
        fetch(url)
            .then((res) => res.json())
            .then(res => res.slice(0, 20))
    )
    return {
        commentData: data,
        commentError: error
    };
}
