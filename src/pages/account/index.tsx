import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from 'next/head';
import {useRootStore} from "providers/RootStoreProvider";
import {useEffect, useRef} from "react";
import {observer} from "mobx-react-lite";
import {Form} from "react-bootstrap";

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", ['common'])),
        },
    };
}

const AccountPage = observer(() => {

    const store = useRootStore();
    const nameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (nameRef.current) nameRef.current.value = store.accountStore.name;
        if (addressRef.current) addressRef.current.value = store.accountStore.address;
    }, [])

    return <>
        <Head>
            <title>Account page</title>
        </Head>
        <div>

            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter user name..."
                        ref={nameRef}
                        onChange={(event) => store.accountStore.setName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter user address..."
                        ref={addressRef}
                        onChange={(event) => store.accountStore.setAddress(event.target.value)}
                    />
                </Form.Group>
            </Form>
        </div>


    </>
})

export default AccountPage;

