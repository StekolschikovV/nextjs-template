import {RootStore, RootStoreHydration} from "stores/RootStore";
import {localStore} from "lib/localStore";
import {makeAutoObservable} from "mobx";

export class AccountStore {

    root: RootStore;
    name: string = ""
    address: string = ""

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this)
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
