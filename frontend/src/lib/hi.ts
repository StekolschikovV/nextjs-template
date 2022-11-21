class Hi {

    counter = 0

    constructor() {
    }

    say = () => {
        console.log("hi", this.counter);
        this.counter++;
    }
}

export const hi = new Hi();
