import ButtonIcon from "../ButtonIcon"
import {FiShoppingCart} from 'react-icons/fi'
import { HeaderStyled } from "./style"
import {useHistory} from 'react-router-dom'
import {useCart} from '../../providers/Cart'

const Header = () => {

    const history = useHistory()
    const {cart} = useCart()
    const length = cart.length

    return (
        <HeaderStyled>
            <h1 onClick={() => history.push('/')}>KenzieShop</h1>
            <nav>
                 <ButtonIcon icon={FiShoppingCart} onClick={() => history.push('/cart')}>
                    {length > 0 && <p>{length}</p>}
                    <span>Carrinho</span>     
                </ButtonIcon>   
            </nav>
        </HeaderStyled>
    )
}

export default Header