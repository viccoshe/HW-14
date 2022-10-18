import { create } from "./create.js";

class Main {
    constructor() {
        this.main = create('main', [
            ['class', 'main']
        ]);
/*         this.productContainer = create('div', [
            ['class', 'products-container']
        ], 'Main');
        this.main.append(this.productContainer); */
    }

    router() {
        let hash = location.hash.slice(1);

        if (hash.indexOf('/') === -1) {
            if ( !hash) hash = 'home';

            import(`./${hash}.js`)
                .then(module => {
                    this.main.innerHTML = '';
                    this.main.append(module.default);
                })
                .catch(error => {
                this.main.innerHTML = '<h1>ERROR 404</h1>';
                });
        }else{
            let index = hash.indexOf('/');
            let id = hash.slice(index + 1);
            import('./product.js')
            .then(module => {
                this.main.innerHTML = '';
                let product = new module.default(id);
                this.main.append(product.init());
            })
            .catch(error => {
                this.main.innerHTML =  '<h1>ERROR 404</h1>';
            });
        } 
    }

    init() {
        window.addEventListener('hashchange', (e) => {
            this.router();
        });
    
        window.addEventListener('load', () => {
            const a = document.querySelectorAll('a[href="/"]');
            a.forEach(elem => {
                elem.addEventListener('click', e => {
                    console.log(elem);
                    e.preventDefault();
                    location.hash = '';
                });
            });
            this.router();
        });
        return this.main;
    }
}


export default new Main().init();


/* init() {
    this.main = create('main', [
        ['class', 'main']
    ]);
    this.productContainer = create('div', [
        ['class', 'products-container']
    ]);
 
    this.prodItem = create('div', [
        ['class', 'prod-item']
    ]);

    this.prodTitle = create('div', [
        ['class', 'prod-title']
    ]);

    this.prodPrice = create('div', [
        ['class', 'prod-price']
    ]);
    
    this.addBtn = create('button', [
        ['class', 'prod-item'],
        ['type', 'submit'], 
    ], 'Add'); 

    this.main.append(this.productContainer);
   this.productContainer.append(this.prodItem, this.prodTitle, this.prodPrice, this.addBtn);

    return this.main; */