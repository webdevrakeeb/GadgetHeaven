import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartList, getWishList } from "../../Utilies/SaveToLS";
import Cart from "../Cart/Cart";
import sortIcon from '../../assets/images/sort-icon.png';
import Wishlist from "../Wishlist/Wishlist";


const Dashboard = ({handleAddToCart}) => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [listTabButton, setListTabButton] = useState('cart');
    const allListedItems = useLoaderData();
    // Cart Items
    useEffect(()=> {
        const stroedCartList = getCartList();
        const cartItemList = allListedItems.filter(item => stroedCartList.includes(item.product_id));
        setCartList(cartItemList)
    },[]);

    useEffect(()=>{
        const storedWishList = getWishList();
        const wishItemList = allListedItems.filter(item => storedWishList.includes(item.product_id));
        setWishList(wishItemList);
    },[])


    return (
        <>
            <div className="bg-brand py-8">
                <h2 className="text-white text-[32px] font-Sora font-bold text-center pb-4">Dashboard</h2>
                <p className="lg:max-w-[796px] font-Sora text-center mx-auto text-white pb-5 lg:pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <ul className="flex items-center justify-center gap-x-6">
                    <button 
                        onClick={()=>setListTabButton('cart')}
                        className={`py-[13px] px-[64px] font-Sora border border-[#FFF] rounded-[32px] ${
                        listTabButton === 'cart' ? 'font-bold bg-white text-brand' : 'font-normal bg-transparent text-white'
                    }`}>Cart</button>
                    <button 
                        onClick={()=>setListTabButton('wishlist')}
                        className={`py-[13px] px-[64px] font-Sora border border-[#FFF] rounded-[32px] text-white ${
                        listTabButton === 'wishlist' ? 'font-bold bg-white text-brand' : 'font-normal bg-transparent text-white'
                    }`}>Wishlist</button>
                </ul>
            </div>
            <div className="container">
                <div className="lg:pt-[59px] lg:pb-8 xl:px-[130px]">
                    {
                        listTabButton === 'cart' ?  
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#0B0B0B] text-2xl font-Sora font-bold">Cart</h2>
                            <ul className="flex items-center gap-x-4">
                                <li className="text-[#0B0B0B] text-2xl font-Sora font-bold mr-2">Total cost: 999.99</li>
                                <li className="flex items-center gap-x-[10px] text-brand text-lg font-Sora font-semibold py-[13px] px-[22px] shadow-[0px_4px_50px_0px_rgba(11,11,11,0.15)] border-[1.5px] border-[#000] rounded-[32px] cursor-pointer">Sort by Price <img src={sortIcon}/></li>
                                <li className="py-[14.5px] px-[22px] shadow-[0px_4px_50px_0px_rgba(11,11,11,0.15)] rounded-[32px] bg-[url('https://i.ibb.co/pGDk2Lb/purchase-btn.png')] bg-no-repeat bg-cover bg-center text-white text-lg font-Sora font-medium cursor-pointer">Purchase</li>
                            </ul>
                        </div>  : <h2 className="text-[#0B0B0B] text-2xl font-Sora font-bold">Wishlist</h2>
                    }
                </div>
                
                <div className="xl:px-[130px] flex flex-col gap-y-6 pb-[100px]">
                    {
                        listTabButton === 'wishlist' ? 
                        wishList.map(product => <Wishlist product={product} handleAddToCart={handleAddToCart}></Wishlist>) :
                        cartList.map(product => <Cart product={product}></Cart>) 
                    }
                </div>
                
            </div>
        </>
    );
};

export default Dashboard;