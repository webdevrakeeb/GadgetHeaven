// Add to Cart
const getCartList = () => {
    const cartListStr = localStorage.getItem('cart');
    if(cartListStr) {
        const storedList = JSON.parse(cartListStr);
        return storedList;
    } else {
        return [];
    }
}
const addToCartList = (id) => {
    const cartList = getCartList();
    if (cartList.includes(id)) {
        alert('Already Exists On Your Cart.');
    } else {
        cartList.push(id);
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem('cart', cartListStr);
        alert('Successfully Added On Cart.');
    }
}

// Add To Wish List
const getWishList = () => {
    const stroedWishStr = localStorage.getItem('wish-list');
    if (stroedWishStr) {
        const wishList = JSON.parse(stroedWishStr);
        return wishList;
    } else {
        return [];
    }
}

const addToWishList = (id) => {
    const stroedWishList = getWishList();
    if (stroedWishList.includes(id)) {
        alert('Already Exists On Your Wish List.');
    } else {
        stroedWishList.push(id);
        const stroedWishStr = JSON.stringify(stroedWishList);
        localStorage.setItem('wish-list', stroedWishStr);
        alert('Successfully Added On Wish List.');
    }
}


export {addToCartList, getCartList, addToWishList, getWishList}