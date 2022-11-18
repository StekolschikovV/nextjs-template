import Footer from './Footer';
import Header from './Header';

type Props = {
    children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="content">
      <Header />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;
