import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartList } from "../../Utilies/SaveToLS";

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const allListedItems = useLoaderData();
    useEffect(()=> {
        const stroedCartList = getCartList();
        const cartItemList = allListedItems.filter(item => stroedCartList.includes(item.product_id));
        setCartList(cartItemList)
    },[allListedItems]);


    return (
        <div className="container">
            <h1 className="text-3xl">Products On Cart : {cartList.length}</h1>
            {
                cartList.map(product => <h2 key={product.product_id}>{product.product_title}</h2>)
            }
        </div>
    );
};

export default Dashboard;