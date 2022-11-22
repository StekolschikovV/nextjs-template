import Image from 'next/image';

import styles from 'pages/burgers/index.module.css';

import {IBurger} from "type";
import {getBurgersById, getBurgersId} from "lib/burgers";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";

export const getStaticPaths = async () => {
    const burgers = await getBurgersId()
    const paths = burgers?.map(burgerId => {
        return {
            params: {id: `${burgerId}`}
        }
    }) || [];
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    const burger = await getBurgersById(context.params.id)
    console.log("burger3 ", burger)

    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'])),
            burger,
        }
    }
}

const Details: React.FC<{ burger: IBurger }> = ({burger}) => {
    console.log("burger4 ", burger)

    return (
        burger && <div className={styles.singleBurger}>
            <h1>{burger.attributes.name}</h1>
            <div className={styles.imageContainer}>
                <Image
                    src={`${burger.attributes.image.data.attributes.url}`}
                    alt={`img`}
                    width="100"
                    height="100"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div>
                <p>{burger.attributes.desc}</p>
            </div>
        </div>
    );
}

export default Details;
