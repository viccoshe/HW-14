import { create } from './create.js';
import { widget } from './cart.js';

class Header {
    constructor(){
        this.header = null;
    }

    init() {
        this.header = create('header', [
            ['class', 'header']
        ]);
        this.h2 = create('h2', [], 'Clothing');
        this.logo = create('div', [
            ['class', 'logo']
        ]);
        this.logo.innerHTML =` 
        <a href="/"><img src="./img/clothingcom-logo.png" alt="logo"></a>
        `

       
        this.header.append(this.logo, this.h2, widget);

        return this.header;
    }
}

export default new Header().init();