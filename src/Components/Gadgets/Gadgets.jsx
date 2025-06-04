import { useEffect, useState } from "react";
import FilterItems from "../FilterItems/FilterItems";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    useEffect(()=>{
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data));
    },[]);

    const handleSort = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }

        // Filter gadgets based on selected category
    const filteredGadgets = selectedCategory === 'All'
        ? gadgets.slice(0, 9)
        : gadgets.filter(gadget => gadget.category === selectedCategory);

    return (
        <div className="container pt-8 pb-10 md:pt-[245px] md:pb-14 lg:pt-[490px] lg:pb-[100px]">
            <h2 className="text-[#0B0B0B] text-[25px] md:text-[40px] font-Sora font-bold text-center pb-3 md:pb-6 lg:pb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-5">
                <div>
                    <FilterItems handleSort={handleSort} selectedCategory={selectedCategory}></FilterItems>
                </div>
                <div className="w-full md:w-[calc(100%-250px)] grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        filteredGadgets.length > 0 ? (
                            filteredGadgets.map(gadget => (
                                <Gadget key={gadget.product_id} gadget={gadget} />
                            ))
                        ) : (
                            <p className="text-[#9538E2] font-bold font-Sora text-4xl">Product Not Found</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;