import Layout from 'components/Layout';
import 'styles/globals.css';
import {useRouter} from "next/router";
import {appWithTranslation} from 'next-i18next';
import {StoreProvider} from '../components/StoreProvider'

// @ts-ignore
function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <StoreProvider {...pageProps}>
            <Layout>
                locale: {router.locale}
                <Component {...pageProps} />
            </Layout>
        </StoreProvider>
    )
}

export default appWithTranslation(MyApp);
