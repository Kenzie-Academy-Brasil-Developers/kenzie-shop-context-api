import {createContext, useEffect, useState, useContext} from 'react'
import api from '../../services/api'

const ProcuctContext = createContext([])

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        const loadProducts = () => {
            api.get('/products/')
            .then(res => setProducts(res.data))
        }

        loadProducts()
    }, [])

    return (
        <ProcuctContext.Provider value={{products}}>
            {children}
        </ProcuctContext.Provider>
    )
}

export const useProducts = () => useContext(ProcuctContext)