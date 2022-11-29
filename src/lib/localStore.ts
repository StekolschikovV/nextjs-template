class LocalStore {

    get = (key: string): string => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key) || ''
        }
        return ''
    }

    set = (key: string, value: any): void => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, value)
        }
    }

    getAll = (): {} => {
        if (typeof window !== 'undefined') {
            return JSON.parse(JSON.stringify(localStorage));
        }
        return {}
    }


}

export const localStore = new LocalStore()
