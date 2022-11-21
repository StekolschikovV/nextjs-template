import Link from 'next/link';
import {SiBurgerking} from 'react-icons/si';

const Header = () => {
    return (
        <header>
            <div>
                <SiBurgerking/>
            </div>
            <nav>
                <Link href="/">Домой</Link>
                <Link href="/about">О Нас</Link>
                <Link href="/reviews">Отзывы</Link>
                <Link href="/burgers">Бургеры</Link>
            </nav>
            <div>
                <Link href="/" locale="en">
                    EN
                </Link>
                |||
                <Link href="/" locale="ru">
                    RU
                </Link>
                ||| {process.env.someKey}
            </div>
        </header>

    );
}

export default Header;
