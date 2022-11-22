import Footer from './Footer';
import Header from 'components/Header/index';

type Props = {
    children?: React.ReactNode;
};


const Layout = ({children}: Props) => {
    return (
        <div className="content">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
