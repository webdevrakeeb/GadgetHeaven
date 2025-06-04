import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { clearLocalStorage, getCartList, getWishList, removeItemFromLS, removeWishItemLS } from "../../Utilies/SaveToLS";
import Cart from "../Cart/Cart";
import sortIcon from '../../assets/images/sort-icon.png';
import Wishlist from "../Wishlist/Wishlist";


const Dashboard = ({handleAddToCart}) => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [listTabButton, setListTabButton] = useState('cart');
    const [totalPrice, setTotalPrice] = useState(0)
    const allListedItems = useLoaderData();
    const navigate = useNavigate();
    // Cart Items
    useEffect(()=> {
        const stroedCartList = getCartList();
        const cartItemList = allListedItems.filter(item => stroedCartList.includes(item.product_id));
        setCartList(cartItemList)
        const totalCost = cartItemList.reduce((total, sitem) => total + sitem.price, 0);
        setTotalPrice(totalCost)
    },[]);

    useEffect(()=>{
        const storedWishList = getWishList();
        const wishItemList = allListedItems.filter(item => storedWishList.includes(item.product_id));
        setWishList(wishItemList);
    },[]);


    // Handle Sorting
    const handleSorting = price => {
        if(price) {
            const sortByPrice = [...cartList].sort((a,b)=> a.price - b.price);
            setCartList(sortByPrice);
        }
    }
    // Remove Product From Local Storage
    const handleRemoveFromCart = id => {
        const remaining = cartList.filter(product => product.product_id !== id);
        setCartList(remaining)
        removeItemFromLS(id);
    }

    // Handle Remove From Wish
    const removeFromWish = id => {
        const remainingOnWish = wishList.filter(product => product.product_id !== id);
        setWishList(remainingOnWish);
        removeWishItemLS(id);
    }

    const [isOpen, setIsOpen] = useState(false);
    const completePurchase = () => {
        clearLocalStorage();
        setIsOpen(false);
        navigate('/')
    }
    return (
        <>
            <div className="bg-brand py-8">
                <h2 className="text-white text-[32px] font-Sora font-bold text-center pb-4">Dashboard</h2>
                <p className="lg:max-w-[796px] font-Sora text-center mx-auto text-white pb-5 lg:pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <ul className="flex items-center flex-col md:flex-row gap-y-5 justify-center gap-x-6">
                    <button 
                        onClick={()=>setListTabButton('cart')}
                        className={`py-[13px] px-[64px] font-Sora border border-[#FFF] rounded-[32px] ${
                        listTabButton === 'cart' ? 'font-bold bg-white text-brand' : 'font-normal bg-transparent text-white'
                    }`}>Cart</button>
                    <button 
                        onClick={()=>setListTabButton('wishlist')}
                        className={`py-[13px] px-[64px] font-Sora border border-[#FFF] rounded-[32px] ${
                        listTabButton === 'wishlist' ? 'font-bold bg-white text-brand' : 'font-normal bg-transparent text-white'
                    }`}>Wishlist</button>
                </ul>
            </div>
            <div className="container">
                <div className="pt-6 pb-6 md:pt-9 md:pb-5 lg:pt-[59px] lg:pb-8 xl:px-[130px]">
                    {
                        listTabButton === 'cart' ?  
                        <div className="flex flex-col md:flex-row gap-y-5 items-center justify-between">
                            <h2 className="text-[#0B0B0B] text-2xl font-Sora font-bold">Cart</h2>
                            <ul className="flex items-center flex-col md:flex-row gap-y-5 gap-x-4">
                                <li className="text-[#0B0B0B] text-2xl font-Sora font-bold mr-2">Total cost: ${totalPrice}</li>
                                <li 
                                    onClick={handleSorting}
                                    className="flex items-center gap-x-[10px] text-brand text-lg font-Sora font-semibold py-[13px] px-[22px] shadow-[0px_4px_50px_0px_rgba(11,11,11,0.15)] border-[1.5px] border-[#000] rounded-[32px] cursor-pointer">Sort by Price <img src={sortIcon}/></li>
                                <li 
                                    
                                    className="py-[14.5px] px-[22px] shadow-[0px_4px_50px_0px_rgba(11,11,11,0.15)] rounded-[32px] bg-[url('https://i.ibb.co/pGDk2Lb/purchase-btn.png')] bg-no-repeat bg-cover bg-center text-white text-lg font-Sora font-medium cursor-pointer">
                                    {
                                      cartList.length === 0 ? 
                                      <Link to='/'>Add Items</Link> : 
                                      <button onClick={()=>setIsOpen(true)}>Purchase</button>
                                    }
                                </li>
                            </ul>
                        </div>  : <h2 className="text-[#0B0B0B] text-2xl font-Sora font-bold">Wishlist</h2>
                    }
                </div>
                <div className="xl:px-[130px] flex flex-col gap-y-6 pb-[100px]">
                    {
                        listTabButton === 'wishlist' ? 
                        wishList.map(product => <Wishlist product={product} handleAddToCart={handleAddToCart} removeFromWish={removeFromWish}></Wishlist>) :
                        cartList.map(product => <Cart key={product.product_id} product={product} handleRemoveFromCart={handleRemoveFromCart}></Cart>) 
                    }
                </div>
            </div>
            {/* Successfull Modal */}
            <div className="flex items-center justify-center bg-gray-100">
                {/* Modal Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center relative">
                            {/* Success Icon */}
                            <div className="flex justify-center mb-4">
                            <div className="bg-green-100 text-green-600 rounded-full p-3">
                                <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                            </div>
                            </div>

                            {/* Title & Message */}
                            <h2 className="text-xl font-semibold text-gray-800">Payment successful</h2>
                            <p className="text-gray-500 mt-2">
                            
                            </p>

                            {/* Button */}
                            <button
                                onClick={completePurchase}
                                className="mt-6 capitalize px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
                                >
                                back to home
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dashboard;