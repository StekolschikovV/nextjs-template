class Hi {

    counter = 0

    constructor() {
        console.log("hi", this.counter);
    }

    say = () => {
        console.log("hi", this.counter);
        this.counter++;
    }
}

export const hi = new Hi();
