import Layout from 'components/Layout';
import 'styles/globals.css';
import {useRouter} from "next/router";

// @ts-ignore
function MyApp({Component, pageProps}) {
    const router = useRouter()
    console.log("router", router.locale)
    return (
        <Layout>
            locale: {router.locale}
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;
