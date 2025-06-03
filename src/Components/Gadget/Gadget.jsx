import { Link } from "react-router-dom";

const Gadget = ({gadget}) => {
    const {product_id, product_image, product_title, price} = gadget;

    return (
        <>
            <div className="p-5 bg-white rounded-2xl">
                <div className="bg-[#D9D9D9] rounded-xl py-5">
                    <img className="h-[130px] block mx-auto" src={product_image} alt="" />
                </div>
                <div className="pt-6 pb-4">
                    <h2 className="text-0f text-2xl font-Sora font-semibold pb-3">{product_title}</h2>
                    <p className="text-muted text-xl font-medium font-Sora">Price: ${price} </p>
                </div>
                <div>
                    <Link to={`product-details/${product_id}`}>
                        <button className="py-[13px] px-[22px] border border-[#9538E2] rounded-[32px] shadow-[0px_4px_50px_0px_rgba(11,11,11,0.15)] text-[#9538E2] text-lg font-Sora font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Gadget;