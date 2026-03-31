import { createContext, useEffect, useState } from 'react'

export let CartData = createContext();

export default function CartContext({ children }) {

    let [cartItems, setCartItems] = useState(() => {

        let storedData = localStorage.getItem('cartItems')
        return storedData ? JSON.parse(storedData) : []

    });
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    //! addToCart
    function addToCart(product) {

        setCartItems((prev) => {
            let productExists = prev.find((items) => items.id === product.id);

            if (productExists) {
                return (prev.map((item) =>
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 } :
                        item
                ))
            } else {
                return [...prev, { ...product, quantity: 1 }]
            }
        })
    }

    function decrementQty(id) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ?
                    {
                        ...item,
                        quantity: item.quantity - 1
                    } :
                    item

            ).filter(
                (item) => item.quantity > 0
            ))
    }


    function incrementQty(id) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ?
                    {
                        ...item,
                        quantity: item.quantity + 1
                    } :
                    item
            ).filter((item) => item.quantity < 20)
        )
    }

    function removeItem(id) {
        setCartItems((prev) =>
            prev.filter((item) =>
                item.id != id)
        )
        localStorage.clear()
    }

    function totalSubPrice() {
        return Number(
            cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            ).toFixed(2)
        );
    }

    function calcDiscount() {
        return Number(
            cartItems.reduce((total, item) => {
                const discount = (item.price * item.discountPercentage) / 100;
                return total + discount * item.quantity;
            }, 0).toFixed(2)
        );
    }

    function calcTax() {
        return Number(
            ((totalSubPrice() - calcDiscount()) * 0.05).toFixed(2)
        );
    }

    function totalPrice() {
        return Number(
            (totalSubPrice() + calcTax() + delivery()).toFixed(2)
        );
    }

    function orgCost(product) {
        return Number(
            (
                product.price /
                (1 - product.discountPercentage / 100)
            ).toFixed(2)
        );
    }

    function delivery() {
        return 4.99;
    }

    return (
        <CartData.Provider value={{
            cartItems,
            addToCart, incrementQty, decrementQty, removeItem,
            totalPrice, calcTax, calcDiscount,
            orgCost, delivery
        }}>
            {children}
        </CartData.Provider>
    )
}
