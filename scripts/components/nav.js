import { create } from "./create.js";

class Nav {
    constructor() {
        this.nav = create('nav', [
            ['class', 'nav'],
        ]);

        this.ul = create('ul', []);
         
        this.ul.innerHTML = `
                <li><a href="/">Home</a></li>
                <li><a href="#Catalogue">Catalogue</a></li>
                <li><a href="#About">About</a></li>
        `;
    }

    init() {
        

        this.nav.append(this.ul);
        return this.nav;
    }
}

export default new Nav().init();