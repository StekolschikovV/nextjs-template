import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/Burgers.module.css';
import {IBurger} from "type";
import {getBurgers} from "lib/burgers";

export const getStaticProps = async (): Promise<{ props: { burgers: IBurger[] } }> => {
    const burgers = await getBurgers()
    return {
        props: {burgers}
    }
}

const Burgers: React.FC<{ burgers: IBurger[] }> = ({burgers = []}) => {
    return (
        <div>
            <h1>Наши Бургеры</h1>
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
