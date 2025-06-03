import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {productid} = useParams();
    const data = useLoaderData();
    const targetProduct = data.find(product => product.product_id === productid);
    const {product_image, product_title, price, availability, description, specification} = targetProduct;
    return (
        <>
            <div className="bg-brand pt-8">
                <div className="container">
                    <div className="pb-[235px] relative">
                        <h2 className="text-[32px] text-white font-bold font-Sora text-center pb-4">Product Details</h2>
                        <p className="lg:max-w-[796px] text-white font-Sora mx-auto text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <div className="absolute w-full px-[130px] left-0 lg:bottom-[-330px]">
                            <div className="p-8 rounded-[24px] bg-white">
                                <div className="flex flex-col lg:flex-row gap-x-8">
                                    <div className="left w-1/3 bg-[#ECECEC] py-10 rounded-2xl">
                                        <img className="h-[400px] block mx-auto" src={product_image} alt="" />
                                    </div>
                                    <div className="right w-2/3">
                                        <h2 className="text-0f text-[28px] font-semibold font-Sora mb-3">{product_title}</h2>
                                        <p className="text-muted text-xl font-Sora font-semibold">Price: ${price}</p>
                                        {
                                            availability === true ? 
                                            <span className="text-[#309C08] my-4 py-[7px] px-[14px] inline-block bg-[rgba(48,156,8,0.10)] border border-[#309C08] rounded-[32px] text-[14px] font-medium">In Stock</span> : 
                                            <span className="text-[#e2322c] my-4 py-[7px] px-[14px] inline-block border border-[#fd3737] rounded-[32px] text-[14px] font-medium">Out Of Stock</span>
                                        }
                                        <p className="text-muted text-lg font-Sora pb-4">{description}</p>
                                        <h3 className="text-0f text-lg font-Sora font-bold pb-3">Specification:</h3>
                                        <ul className="list-decimal list-inside">
                                            {
                                                specification.map((feature, idx) => 
                                                    <li
                                                        className="text-[rgba(9,8,15,0.60)] text-lg font-normal font-Sora"
                                                        key={idx}
                                                    >{feature}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="py-[232px]">
                {/* Blank Space */}
            </div>
        </>
    );
};

export default Details;