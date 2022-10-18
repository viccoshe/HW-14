import { create } from "./create.js";
import { getApiItem } from "./API/spa.js";
import { addCart } from "./cart.js";


class Product {
    constructor(id){
        this.id = id;
        this.productContainer = create('div', [
            ['class', 'product-container']
        ]);
    }

    async render(){
        let item = await getApiItem(this.id);

        const {title, image, description: desc, category: cat, price, rating: { rate }} = item;
        this.productContainer.innerHTML = `
            <div class="img"><img src="${image}" alt=""></div>
            <span class="category">${cat}</span>
            <h2 class="prod-title">${title}</h2>
            <div class="prod-price">${price}</div>
            <p class="prod-description">${desc}</p>
            <span class="rating">Rating: ${rate}</span>
        `;
        console.log(this.productContainer);


        let addBtn = create('button', [
            ['class', 'add-button']
        ], 'Add');
        console.log(addBtn);
        debugger
        addBtn.addEventListener('click', () => addCart(item));
        console.log(addBtn);
        this.productContainer.append(addBtn);
    }

    init() {
        this.render();
        return this.productContainer;
    }
}

export default Product;
