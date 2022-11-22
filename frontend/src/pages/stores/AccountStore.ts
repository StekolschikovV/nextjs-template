import {RootStore} from "pages/stores/RootStore";
import {action, makeObservable, observable} from "mobx";

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
    }

    setAddress = (address: string) => {
        this.address = address;
    }

}
