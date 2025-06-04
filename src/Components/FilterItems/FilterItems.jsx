

const FilterItems = ({handleSort, selectedCategory}) => {
    return (
        <div className="w-full md:w-[250px] bg-white border border-[rgba(9,8,15,0.10)] rounded-2xl p-6">
            <ul className="flex flex-row flex-wrap gap-x-3 md:flex-col gap-y-6">
                <li>
                    <button 
                        onClick={()=>handleSort('All')}
                        className={`py-[14px] w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'All' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>All Product</button>
                </li>
                <li>
                    <button 
                        onClick={() => handleSort('Laptops')}
                        className={`py-[14px]  w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'Laptops' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>Laptops</button>
                </li>
                <li>
                    <button
                        onClick={() => handleSort('Smartphones')}
                        className={`py-[14px]  w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'Smartphones' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>Phones</button>
                </li>
                <li>
                    <button
                        onClick={() => handleSort('Accessories')}
                        className={`py-[14px]  w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'Accessories' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>Accessories</button>
                </li>
                <li>
                    <button
                        onClick={() => handleSort('Smartwatches')}
                        className={`py-[14px]  w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'Smartwatches' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>Smart Watches</button>
                </li>
                <li>
                    <button
                        onClick={() => handleSort('MacBook')}
                        className={`py-[14px]  w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'MacBook' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>MacBook</button>
                </li>
                <li>
                    <button
                        onClick={() => handleSort('Iphone')}
                        className={`py-[14px]  w-full px-7 block rounded-[32px] font-Sora text-lg font-medium ${
                            selectedCategory === 'Iphone' ? 'bg-[#9538E2] text-white' : 'bg-[rgba(9,8,15,0.05)] text-muted'
                        }`}>Iphone</button>
                </li>
            </ul>
        </div>
    );
};

export default FilterItems;