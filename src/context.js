import React, { useState, useEffect } from 'react';
import {lojaProdutos, detalhesProduto} from './data';

const ProductContext = React.createContext();

export default function ProductProvider(props) {

    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState(detalhesProduto);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detalhesProduto);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setProd();
    }, [])

    useEffect(() => {
        const addTotals = () => {
            let subtotal = 0;
            cart.map(item => subtotal += item.total);
            const tempTax = subtotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = tax + subtotal;
            setCartSubtotal(subtotal);
            setCartTax(tax);
            setCartTotal(total);
        }
        
        addTotals();
    }, [cart])

    const setProd = () => {
        let tempProducts = [];
        lojaProdutos.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
       setProducts(tempProducts);
    }

    const handleDetails = id => {
        const product = getItem(id);
        setDetails(product);
    }

    const getItem = id => {
        const product = products.find(item => item.id === id)
        return product;
    }

    const addToCart = id => { 
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
 
        setCart(previewCart => [...previewCart, product]);

        setProducts( products.map((item) => {
            return (item.id === id ? product : item)
        }));
    }

    const openModal = id => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    }

    const closeModal = id => {
        setModalOpen(false);
    }

    const increment = id => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.count * product.price;

        setCart([...tempCart]);
    }

    const decrement = id => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count -= 1;
        if(product.count === 0) {
            removeItem(id);
        } else {
            product.total = product.count * product.price;
            setCart([...tempCart]);
        }
    }

    const removeItem = id => {
        let tempProducts = [...products];
        let tempCart = [...cart];
        tempCart = tempCart.filter( item => item.id !== id );
        const index = tempProducts.indexOf(getItem(id));
        
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        
        setProducts([...tempProducts]);
        setCart([...tempCart]);
    }

    const clearCart = () => {
        setCart([]);
        setProd();
    }

    return (
        <ProductContext.Provider value={{
            products, 
            details,
            cart,
            modalProduct,
            modalOpen,
            cartSubtotal,
            cartTax,
            cartTotal,
            handleDetails,
            addToCart,
            openModal,
            closeModal,
            increment,
            decrement,
            removeItem,
            clearCart
        }}> 
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};