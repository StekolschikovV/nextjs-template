import Head from 'next/head';
import {hi} from "lib/hi";
import style from "pages/about/index.module.scss"
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

// @ts-ignore
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    };
}

const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>Жирные Бургеры | О Нас</title>
                <meta name="title" content="Все о жирных бургерах"/>
            </Head>

            <div className={style.about}>
                <h1>О нас</h1>
                <p>Жирные бургеры - это старые добрые бургеры по классической рецептуре, нужных размеров и за приемлемую
                    цену.</p>
                <p>Готовят их на американский, мексиканский и итальянский манер, не жалея ни соуса, ни начинки.</p>
                <p>Для тех, кто изрядно проголодался, есть необъятный «Самый жирный бургер» с пятью говяжьими котлетами,
                    кукурузными чипсами и сыром.</p>
                <button onClick={() => {
                    hi.say()
                }}>Say HI!
                </button>
            </div>
        </>
    );
}

export default AboutPage;
