import {action, computed, makeObservable, observable, runInAction} from 'mobx'
import {enableStaticRendering} from 'mobx-react-lite'
import {IStore} from "type";

enableStaticRendering(typeof window === 'undefined')

export class Store implements IStore {
    lastUpdate = 0
    light = false
    private timer: number | undefined;

    constructor() {
        makeObservable(this, {
            lastUpdate: observable,
            light: observable,
            start: action,
            hydrate: action,
            timeString: computed,
        })
    }

    get timeString() {
        const pad = (n: number) => (n < 10 ? `0${n}` : n)
        const format = (t: Date) =>
            `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
                t.getUTCSeconds()
            )}`
        return format(new Date(this.lastUpdate))
    }

    start = () => {
        // @ts-ignore
        this.timer = setInterval(() => {
            runInAction(() => {
                this.lastUpdate = Date.now()
                this.light = true
            })
        }, 1000)
    }

    stop = () => clearInterval(this.timer)

    hydrate = (data: any) => {
        if (!data) return

        this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
        this.light = !!data.light
    }
}
