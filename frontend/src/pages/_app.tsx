import Layout from 'components/Layout';
import 'styles/globals.css';
import {useRouter} from "next/router";
import {appWithTranslation} from 'next-i18next';


// @ts-ignore
function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <Layout>
            locale: {router.locale}
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(MyApp);
