import {ProductsProvider} from './Products'
import { CartProvider } from './Cart'

const Providers = ({children}) => {
    return (
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
    )
}

export default Providers