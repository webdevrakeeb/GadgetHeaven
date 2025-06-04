import { NavLink, useLocation } from 'react-router-dom';
import whiteLogo from '../../assets/images/GadgetHeavenWhite.png';
import blackLogo from '../../assets/images/black-icon.png';
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { HiMiniXMark } from "react-icons/hi2";
import { getCartList, getWishList } from '../../Utilies/SaveToLS';

const NavBar = () => {
    const [openSiteBar, setOpenSiteBar] = useState(false);
    const [totalCartItem, setTotalCartItem] = useState(0);
    const [totalwishItem, setTotalWishItem] = useState(0);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(()=>{
        const stroedCartList = getCartList();
        setTotalCartItem(stroedCartList);
    },[])
    useEffect(()=>{
        const stroedWishList = getWishList();
        setTotalWishItem(stroedWishList);
    },[])
    
    return (
        <div className='pt-2 md:pt-7 relative'>
            <div className={`container flex items-center justify-between pt-7 pb-6 md:pb-12 lg:px-[130px] rounded-[32px_32px_0_0] ${
                isHome ? 'bg-[#9538E2]' : 'bg-transparent'
            }`}>
                <div>
                    <a href="">
                        {
                            isHome ? <img src={whiteLogo} alt="" /> : <img src={blackLogo} alt="" />
                        }
                        
                    </a>
                </div>
                <div className='md:flex items-center md:gap-6 lg:gap-12 hidden'>
                    <NavLink to='/' className={({isActive}) => `font-Sora font-medium hover:underline ${
                        isHome ? `text-white ${isActive ? 'underline' : ''}` 
                        : `text-black ${isActive ? 'underline' : ''}`
                    }`}>Home</NavLink>
                    <NavLink to='statistics' className={({isActive}) => `font-Sora font-medium hover:underline ${
                        isHome ? `text-white ${isActive ? 'underline' : ''}` 
                        : `text-black ${isActive ? 'underline' : ''}`
                    }`}>Statistics</NavLink>
                    <NavLink to='dashboard' className={({isActive}) => `font-Sora font-medium hover:underline ${
                        isHome ? `text-white ${isActive ? 'underline' : ''}` 
                        : `text-black ${isActive ? 'underline' : ''}`
                    }`}>Dashboard</NavLink>
                    
                </div>
                <div>
                    <ul className='flex items-center gap-x-2 md:gap-x-4'>
                        <li className='relative w-10 h-10 rounded-full bg-white p-[10px] cursor-pointer'>
                            <img src="https://i.ibb.co/5h4qFswW/cart-icon.png" alt="" />
                            <span className='absolute top-[-10px] right-[-10px] w-[25px] h-[25px] rounded-[50%] flex items-center justify-center text-white bg-gray-600 text-xs'>
                                {totalCartItem.length}
                            </span>
                        </li>
                        <li className='relative w-10 h-10 rounded-full bg-white p-[10px] cursor-pointer'>
                            <img src="https://i.ibb.co/jk99g6Bp/wish-List-icon.png" alt="" />
                            <span className='absolute top-[-10px] right-[-10px] w-[25px] h-[25px] rounded-[50%] flex items-center justify-center text-white bg-gray-600 text-xs'>
                                {totalwishItem.length}
                            </span>
                        </li>
                        <li className='md:hidden'
                            onClick={()=>setOpenSiteBar(!openSiteBar)}
                        >
                            {
                                openSiteBar == false ?
                                <RiMenu3Fill className={`${isHome ? 'text-white' : 'text-brand'}  text-[40px] cursor-pointer`}/> : 
                                <HiMiniXMark className={`${isHome ? 'text-white' : 'text-brand'}  text-[40px] cursor-pointer`}/>
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
            <aside className={`absolute w-80 bg-[rgb(149,56,226)] h-[100vh] top-0 z-10 transition-all duration-300 ${
                openSiteBar === false ? '-left-80' : 'left-0'
            }`}>
                <div className="aside-logo pt-8 py-5 px-5">
                    <a href="#">
                        <img src={whiteLogo} alt="" />
                    </a>
                </div>
                <div className="aside-navigation px-5">
                    <div className='flex flex-col gap-y-3'>
                        <NavLink to='/' className={({isActive}) => `font-Sora font-medium hover:underline ${
                            isActive ? 'text-green-500' : 'text-white'
                        }`}>Home</NavLink>
                        <NavLink to='statistics' className={({isActive}) => `font-Sora font-medium hover:underline ${
                            isActive ? 'text-green-500' : 'text-white'
                        }`}>Statistics</NavLink>
                        <NavLink to='dashboard' className={({isActive}) => `font-Sora font-medium hover:underline ${
                            isActive ? 'text-green-500' : 'text-white'
                        }`}>Dashboard</NavLink>
                    </div>
                </div>

            </aside>
        </div>
    );
};
export default NavBar;