import { create } from "./create.js";

class About {
    constructor(){
        this.about = create('div', [
            ['class', 'about']
        ], 'AboutPage');
    }

    init() {
        return this.about;
    } 
}

export default new About().init();