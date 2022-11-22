import {RootStore, RootStoreHydration} from "pages/stores/RootStore";
import {action, makeObservable, observable} from "mobx";
import {localStore} from "lib/localStore";

export class AccountStore {

    root: RootStore;
    name: string = ""
    address: string = ""

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            setName: action,
            setAddress: action,
            name: observable,
            address: observable,
        });
    }

    setName = (name: string) => {
        this.name = name;
        localStore.set('accountName', name)
    }

    setAddress = (address: string) => {
        this.address = address;
        localStore.set('accountAddress', address)
    }


    hydrateFromLocalStore = () => {
        this.address = localStore.get('accountAddress')
        this.name = localStore.get('accountName')
    }


    hydrate(data: RootStoreHydration) {

        console.log("hydrate", data);
    }
}
