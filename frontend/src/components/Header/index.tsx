import Link from 'next/link';
import {SiBurgerking} from 'react-icons/si';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useRootStore} from "pages/providers/RootStoreProvider";
import styles from "./index.module.scss"
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const Index = observer(() => {
    const {t} = useTranslation();
    const router = useRouter()
    const store = useRootStore();
    useEffect(() => {
        store.hydrateFromLocalStore()
    }, [])
    return (
        <header>

            <div>
                <SiBurgerking/>
            </div>
            <nav>
                <Link href="/">{t('nav.home')}</Link>
                <Link href="/about">{t('nav.about-us')}</Link>
                <Link href="/reviews">{t('nav.reviews')}</Link>
                <Link href="/burgers">{t('nav.burgers')}</Link>
                <Link href="/account">{t('nav.account')}</Link>
            </nav>
            <div>

                <Link href={router.asPath} locale="en">
                    EN
                </Link>
                |||
                <Link href={router.asPath} locale="ru">
                    RU
                </Link>
                {process.env.someKey}
            </div>

            <div className={styles.accountContainer}>
                <div className={styles.accountName}>Name: {store.accountStore.name}</div>
                <div className={styles.accountAddress}>Address: {store.accountStore.address}</div>
            </div>
        </header>

    );
})

export default Index;
