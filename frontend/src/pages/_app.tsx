import Layout from 'components/Layout';
import 'bootstrap/dist/css/bootstrap.css'
import 'styles/globals.scss';
import {useRouter} from "next/router";
import {appWithTranslation} from 'next-i18next';
import {RootStoreProvider} from "pages/providers/RootStoreProvider";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

// @ts-ignore
function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <RootStoreProvider hydrationData={pageProps.hydrationData}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RootStoreProvider>

    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", ['common'])),
            hydrationData: {
                accountStore: {
                    name: 'account'
                },
                stopwatchStore: {},
            },
        },
    };
}

export default appWithTranslation(MyApp);
