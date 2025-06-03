import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='container bg-[#9538E2] rounded-[0_0_32px_32px] md:pb-[200px] lg:pb-[270px] relative'> 
                <h1 className='font-Sora text-2xl md:text-[35px] lg:text-[56px] font-bold text-center lg:max-w-[1120px] mx-auto leading-[128.571%] text-white pb-3 md:pb-4 lg:pb-6'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='lg:max-w-[796px] font-Sora font-medium text-center mx-auto text-white pb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='w-[168px] h-[56px] flex items-center justify-center bg-white shadow-[0px_4px_50px_0px_rgba(11,11,11,0.15)] rounded-[32px] mx-auto text-[#9538E2] text-xl font-Sora font-bold'>
                    Shop Now
                </button>
                {/* Banner Image Container */}
                <div className='md:absolute mt-5 md:mt-0 md:bottom-[-220px] lg:bottom-[-367px] md:left-[50%] md:translate-x-[-50%] p-3 md:p-6 border-[3px] border-white rounded-xl md:rounded-[32px] md:max-w-[700px] lg:max-w-[1110px] w-full mx-auto bg-[rgba(255,255,255,0.30)]'>
                    <img src="https://i.ibb.co/YBpkks9T/banner-image.png" alt="Banner Images" />
                </div>
            </div>
        </div>
    );
};

export default Banner;