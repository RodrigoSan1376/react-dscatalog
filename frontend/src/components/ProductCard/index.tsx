import './styles.css';
import productImg from '../../assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

export default function ProductCard() {
    return(
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={productImg} alt="Nome do Produto" />
            </div>
            <div className='card-bottom-container'>
                <h6>Nome do Produto</h6>
                <ProductPrice />
            </div>
        </div>
    );
}