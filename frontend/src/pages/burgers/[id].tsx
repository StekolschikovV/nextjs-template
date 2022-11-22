import Image from 'next/image';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPaths, GetStaticProps} from "next";
import {getBurgersById, getBurgersId} from "lib/burgers";
import {IBurger} from "type";
import styles from 'pages/burgers/index.module.css';

export const getStaticPaths: GetStaticPaths = async (context) => {
    const burgers = await getBurgersId()
    let paths: any [] = []
    burgers.map(burgerId => {
        paths.push({params: {id: `${burgerId}`}})
        if (context.locales) {
            context.locales.map(locale => {
                paths.push({params: {id: `${burgerId}`}, locale})
            })
        }
    }) || []
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    const burger = await getBurgersById(context.params.id)
    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'])),
            burger,
            locale: context.locale

        },
    }
}

const Details: React.FC<{ burger: IBurger }> = ({burger}) => {
    return (
        burger && <div className={styles.singleBurger}>
            <h1>{burger.attributes.name}</h1>
            <div className={styles.imageContainer}>
                <Image
                    src={`${burger.attributes.image.data.attributes.url}`}
                    alt={`img`}
                    width="100"
                    height="100"
                />
            </div>
            <div>
                <p>{burger.attributes.desc}</p>
            </div>
        </div>
    );
}

export default Details;
