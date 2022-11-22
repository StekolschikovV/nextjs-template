import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from 'next/head';
import {useRootStore} from "pages/providers/RootStoreProvider";

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", ['common'])),
        },
    };
}

const AccountPage = () => {
    const store = useRootStore();

    return <>
        <Head>
            <title>Account page</title>
        </Head>
        <div>
            <input type="text" placeholder="name" onChange={(e) => {
                store.accountStore.setName(e.target.value)
            }}/>
            <input type="text" placeholder="address" onChange={(e) => {
                store.accountStore.setAddress(e.target.value)
            }}/>
        </div>
    </>
}

export default AccountPage;

