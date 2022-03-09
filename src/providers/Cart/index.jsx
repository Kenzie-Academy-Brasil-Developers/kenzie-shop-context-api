import {createContext, useContext, useState} from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const handleAddCart = (item) => {
        setCart([...cart, item])
        toast.success('Adicionado ao Carrinho')
    }

    const handleRemoveCart = (item) => {
        const findIndex = cart.findIndex(product => product === item)
        cart.splice(findIndex, 1)

        const newCart = [...cart]

        setCart(newCart)
        toast.success('Removido do Carrinho')
    }

    return (
        <CartContext.Provider value={{cart, handleAddCart, handleRemoveCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)