const Cart = ({product}) => {
    const {product_image, product_title, description, price} = product;
    return (
        <div>
            <div className="p-8 bg-white rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-x-8">
                    <div className="lg:w-[200px]">
                        <img className="h-[150px] block mx-auto" src={product_image} alt="" />
                    </div>
                    <div className="lg:w-[calc(100%-200px)]">
                        <h2 className="text-0f text-2xl font-Sora font-semibold mb-[18px]">{product_title}</h2>
                        <p className="text-muted text-lg font-Sora font-normal mb-4">{description}</p>
                        <h3 className="text-[rgba(9,8,15,0.80)] text-xl font-Sora font-semibold">Price: ${price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;