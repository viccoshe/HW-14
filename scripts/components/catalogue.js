import { create } from "./create.js";
import { getApiData } from "./API/spa.js"
import { addCart } from "./cart.js";

class Catalogue{
    constructor(){
        this.catalogue = create('div', [
            ['class', 'catalogue']
        ], '<h1>Catalog page</h1>');
    }


    async initComponent() {
        let data = await getApiData();
        console.log(data);

        this.catalogue.innerHTML = '';

        const productContainer = create('div', [
            ['class', 'products-container']
        ]);

        data.forEach((element) => {
            const {id, image, title, price, rating: {rate}} = element;
            const product = create('div', [
                ['class', 'prod-item']
            ]);
            product.innerHTML = `
                <div class="img">
                    <a href="#Product/${id}"><img src="${image}" alt=""></img></a>
                </div>
                <p class="prod-title"><a href="#Product/${id}">${title}</a></p>
                <div class="prod-price">${price} $</div>
                <div class="raiting">${rate} &#9734;</div>
            `;

            let addBtn = create ('button', [
                ['class', 'add']
            ], 'Add');
            
            addBtn.addEventListener('click', function() {
                console.log(element);
                console.log(element.id);
                addCart(element);
            });
            product.append(addBtn);
            productContainer.append(product);
        });
    
        this.catalogue.append(productContainer);
    }

    init() {
        this.initComponent();
        return this.catalogue;
    } 
}

export default new Catalogue().init();



/* <main class="main">
<div class="products-container">
<div class="prod-item">
    <img src="https://via.placeholder.com/150"></img>
    <div class="prod-title"></div>
    <div class="prod-price"></div>
    <div class="prod-description"></div>
    <button class="add">Add</button>
</div>
</main> */