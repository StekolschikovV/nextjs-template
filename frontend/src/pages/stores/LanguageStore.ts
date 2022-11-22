import {RootStore} from "pages/stores/RootStore";
import {action, makeObservable, observable} from "mobx";

export class LanguageStore {

    root: RootStore;
    language: "ru" | "en" = "ru";

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            setLanguage: action,
            language: observable,
        });
    }

    setLanguage = (lang: "ru" | "en") => {
        this.language = lang;
    }

}
