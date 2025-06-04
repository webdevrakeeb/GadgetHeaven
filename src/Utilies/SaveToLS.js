import { toast } from "react-toastify";

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
        toast.warn('Already Exists On Your Cart.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        cartList.push(id);
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem('cart', cartListStr);
        toast.success('Successfully Added On Cart.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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
        toast.warn('Already Exists On Your Wish List.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        stroedWishList.push(id);
        const stroedWishStr = JSON.stringify(stroedWishList);
        localStorage.setItem('wish-list', stroedWishStr);
        toast.success('Successfully Added On Wish List.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

// Remove Item From Cart
const removeItemFromLS = id => {
    const cart = getCartList();
    const remainig = cart.filter(idx => idx !== id);
    localStorage.setItem('cart', JSON.stringify(remainig));
    toast.success('Item removed from cart.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

// Remove Wish Item
const removeWishItemLS = id => {
    const wish = getWishList();
    const remainigWish = wish.filter(idx => idx !== id);
    localStorage.setItem('wish-list', JSON.stringify(remainigWish));
    toast.success('Item removed from Wishlist.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

const clearLocalStorage = () => {
    localStorage.removeItem('cart');
}


export {addToCartList, getCartList, addToWishList, getWishList, removeItemFromLS, clearLocalStorage, removeWishItemLS}