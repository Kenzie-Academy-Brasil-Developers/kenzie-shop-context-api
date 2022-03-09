import Button from '../../components/Button'
import {Container, List, Aside, EmptyCart} from './style'
import {FiTrash} from 'react-icons/fi'
import ButtonIcon from '../../components/ButtonIcon'
import emptyCart from '../../assets/emptyCart.svg'
import {useCart} from '../../providers/Cart'


const Cart = () => {
    const {cart, handleRemoveCart} = useCart()
    const length = cart.length
    const totalCart = cart.reduce((acc, {price}) => acc + price, 0)

    return (
        
        <>
            {length ? (
                 <Container>
                 <List>
                     {cart.map((product) => 
                         <li key={product.id}>
                             <img src={product.image} alt={product.title} />
                             <h3>{product.title}</h3>
                             <span>R$: {product.price.toFixed(2).replace('.', ',')}</span>
                             <ButtonIcon icon={FiTrash} onClick={() => handleRemoveCart(product)}/>
                         </li>
                     )}
                 </List>
 
                 <Aside>
                     <h3>Resumo do Pedido</h3>
                     <div>
                         <span>Quantidade: {length} itens</span>
                         <span>Total: R$ {totalCart.toFixed(2).replace('.', ',')}</span>
                     </div>
                     <Button>Finalizar pedido</Button>
                 </Aside>
             </Container>       
            ) : (
                <EmptyCart>
                    <img src={emptyCart} alt='Carrinho vazio'/>
                    <h2>Seu carrinho esta vazio...</h2>
               </EmptyCart>
            )}
        </>
        
    )
}

export default Cart