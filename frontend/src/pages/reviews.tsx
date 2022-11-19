import Head from 'next/head';
import useSWR from 'swr'
import {IComment} from "../type";
import {JSONPLACEHOLDER_URL} from "../const";

const ReviewsPage = () => {
    const {data, error} = useSWR<IComment[], string>(JSONPLACEHOLDER_URL, (url) =>
        fetch(url)
            .then((res) => res.json())
            .then(res => res.slice(0, 20))
    )
    if (error) return <div>ошибка загрузки</div>
    if (!data) return <div>загрузка...</div>
    return (
        <>
            <Head>
                <title>Отзывы наших клиентов</title>
                <meta name="title" content="Все отзывы"/>
            </Head>
            <div>
                <h1>Отзывы клиентов</h1>
                <div className='reviews'>
                    {!!data.length && data.map((res: any) => {
                        return (
                            <div key={res.id} className='review'>
                                {res.id}){' '}
                                {`${res.body.slice(0, 90)}...`}
                            </div>)
                    })}
                </div>
            </div>
        </>
    );
}


export default ReviewsPage;
