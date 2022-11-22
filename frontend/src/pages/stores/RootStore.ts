import {CounterStore} from "./CounterStore";
import {sizeSwitcherStoreFactory} from "./SizeSwitcherStore";
import {LanguageStore} from "pages/stores/LanguageStore";
import {AccountStore} from "pages/stores/AccountStore";

export type RootStoreHydration = {
    accountStore?: any;
};

export class RootStore {
    counterStore: CounterStore;
    languageStore: LanguageStore;
    accountStore: AccountStore;
    sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

    constructor() {
        this.accountStore = new AccountStore(this);
        this.languageStore = new LanguageStore(this);
        this.counterStore = new CounterStore(this);
        this.sizeSwitcherStore = sizeSwitcherStoreFactory(this);
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
