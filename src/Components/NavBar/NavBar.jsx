import { NavLink } from 'react-router-dom';
import whiteLogo from '../../assets/images/GadgetHeavenWhite.png';
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { HiMiniXMark } from "react-icons/hi2";

const NavBar = () => {
    const [openSiteBar, setOpenSiteBar] = useState(false);
    return (
        <div className='pt-2 md:pt-7 relative'>
            <div className="container flex items-center justify-between pt-7 pb-6 md:pb-12 lg:px-[130px] bg-[#9538E2] rounded-[32px_32px_0_0]">
                <div>
                    <a href="">
                        <img src={whiteLogo} alt="" />
                    </a>
                </div>
                <div className='md:flex items-center md:gap-6 lg:gap-12 hidden'>
                    <NavLink to='/' className={({isActive}) => `text-white font-Sora font-medium hover:underline ${
                        isActive ? 'underline' : ''
                    }`}>Home</NavLink>
                    <NavLink to='statistics' className={({isActive}) => `text-white font-Sora font-medium hover:underline ${
                        isActive ? 'underline' : ''
                    }`}>Statistics</NavLink>
                    <NavLink to='dashboard' className={({isActive}) => `text-white font-Sora font-medium hover:underline ${
                        isActive ? 'underline' : ''
                    }`}>Dashboard</NavLink>
                </div>
                <div>
                    <ul className='flex items-center gap-x-2 md:gap-x-4'>
                        <li className='w-10 h-10 rounded-full bg-white p-[10px] cursor-pointer'>
                            <img src="https://i.ibb.co/5h4qFswW/cart-icon.png" alt="" />
                        </li>
                        <li className='w-10 h-10 rounded-full bg-white p-[10px] cursor-pointer'>
                            <img src="https://i.ibb.co/jk99g6Bp/wish-List-icon.png" alt="" />
                        </li>
                        <li className='md:hidden'
                            onClick={()=>setOpenSiteBar(!openSiteBar)}
                        >
                            {
                                openSiteBar == false ?
                                <RiMenu3Fill className='text-white text-[40px] cursor-pointer'/> : 
                                <HiMiniXMark className='text-white text-[40px] cursor-pointer'/>
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