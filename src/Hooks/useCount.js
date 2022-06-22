import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const useCount = () => {
    const cart = useSelector(state => state.catalog.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItem] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.cost;
        })

        setTotalPrice(price);
        setTotalItem(items)
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItem]);

    return {cart, totalPrice, totalItems}
}

export default useCount;