import Link from 'next/link';
import {SiBurgerking} from 'react-icons/si';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Header = () => {
    const {t} = useTranslation();
    const router = useRouter()
    return (
        <header>
            <div>
                <SiBurgerking/>
            </div>
            <nav>
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about-us')}</Link>
                <Link href="/reviews">{t('reviews')}</Link>
                <Link href="/burgers">{t('burgers')}</Link>
            </nav>
            <div>
                <Link href={router.asPath} locale="en">
                    EN
                </Link>
                |||
                <Link href={router.asPath} locale="ru">
                    RU
                </Link>
                ||| {process.env.someKey}
            </div>
        </header>

    );
}

export default Header;
