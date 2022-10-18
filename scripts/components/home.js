import { create } from "./create.js";

class Home {
    constructor(){
        this.home = create('div', [
            ['class', 'home']
        ], 'Home Page');
    }

    init() {
        console.log(this.home);
        return this.home;
    } 
}

export default new Home().init();