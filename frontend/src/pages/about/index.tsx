import Head from 'next/head';
import {hi} from "lib/hi";
import style from "pages/about/index.module.scss"
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", ['common'])),
        },
    };
}

const AboutPage = () => {
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
