function setCartStorage(id){

}


async function getApiData() {
    let resp = await fetch('https://fakestoreapi.com/products');
    return await resp.json();
}

async function getApiItem(id) {
    let resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await resp.json();
}

export { getApiData, getApiItem };