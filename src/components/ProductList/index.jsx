import {Container, List} from './style'
import Button from '../Button'
import {useProducts} from '../../providers/Products'
import {useCart} from '../../providers/Cart'

const ProductList = () => {
    
    const {products} = useProducts()
    const {handleAddCart} = useCart()

    return (      
            <Container>
                <List>
                    {products.map((product) => 
                        <li key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <span>R$: {product.price.toFixed(2).replace('.', ',')}</span>
                            <Button onClick={() => handleAddCart(product)}>Adicionar ao carrinho</Button>
                        </li>
                    )}
                </List>
          </Container>     
    )
}

export default ProductList