import Layout from 'components/Layout';
import 'styles/globals.css';
import {useRouter} from "next/router";
import {appWithTranslation} from 'next-i18next';
import {RootStoreProvider} from "pages/providers/RootStoreProvider";

// @ts-ignore
function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <RootStoreProvider hydrationData={pageProps.hydrationData}>
            <Layout>
                locale: {router.locale}
                <Component {...pageProps} />
            </Layout>
        </RootStoreProvider>

    )
}

export default appWithTranslation(MyApp);
