import {square} from "./4";

class Alpha {
    execSq (e) {
        return square(e);
    }
}

console.log(new Alpha().execSq(3));