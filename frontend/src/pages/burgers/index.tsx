import Link from 'next/link';
import Image from 'next/image';
import styles from 'pages/burgers/index.module.css';
import {IBurger} from "type";
import {getBurgers} from "lib/burgers";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

// // @ts-ignore
// export async function getStaticProps({locale}) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ['common'])),
//             // Will be passed to the page component as props
//         },
//     };
// }


// @ts-ignore
export const getStaticProps = async (context: { locale }): Promise<{ props: any }> => {
    const burgers = await getBurgers()
    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'])),
            burgers
        },

    }
}

const Burgers: React.FC<{ burgers: IBurger[] }> = ({burgers = []}) => {
    const {t} = useTranslation("common");

    return (
        <div>
            <h1>Наши Бургеры {t("home")}</h1>
            {burgers?.map(burger => (
                <Link href={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
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
                        <h3>{burger.attributes.name}</h3>
                        <p>{burger.attributes.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Burgers;
