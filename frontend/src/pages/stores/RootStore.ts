import {AccountStore} from "pages/stores/AccountStore";

export type RootStoreHydration = {
    accountStore?: any;
};

export class RootStore {
    accountStore: AccountStore;

    constructor() {
        this.accountStore = new AccountStore(this);
    }

    hydrateFromLocalStore = () => {
        this.accountStore.hydrateFromLocalStore()
    }

    hydrate(data: RootStoreHydration) {
        console.log("hydrate", data)
        // if (data.stopwatchStore) {
        //     this.counterStore.hydrate(data.stopwatchStore);
        // }
    }
}
