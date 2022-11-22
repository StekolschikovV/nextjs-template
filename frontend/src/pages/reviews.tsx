import Head from 'next/head';
import {hi} from "lib/hi";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {useRandomColor} from "hooks/random-color";
import {useGetComment} from "hooks/get-comments";

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", ['common'])),
        },
    };
}

const ReviewsPage = () => {
    // before !!!
    // const {data, error} = useSWR<IComment[], string>(JSONPLACEHOLDER_URL, (url) =>
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then(res => res.slice(0, 20))
    // )
    // !!! after
    const {commentData, commentError} = useGetComment()

    const {resultRandomColor} = useRandomColor(commentData)

    if (commentError) return <div>ошибка загрузки</div>
    if (!commentData) return <div>загрузка...</div>
    return (
        <>
            <Head>
                <title>Отзывы наших клиентов</title>
                <meta name="title" content="Все отзывы"/>
            </Head>
            <div>
                <h1>Отзывы клиентов</h1>
                <div className='reviews'>
                    {resultRandomColor && !!resultRandomColor.length && resultRandomColor.map((res: any) => {
                        return (<div key={res.id} dangerouslySetInnerHTML={{__html: res.body}}/>)
                    })}
                </div>
                <button onClick={() => {
                    hi.say()
                }}>Say HI
                </button>
            </div>
        </>
    );
}


export default ReviewsPage;
