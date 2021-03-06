import { Link } from "react-router-dom";
import { DivWrapper } from "./../styles/ProductContainer";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";

export default function Product({product}) {
    const {id, title, img, price, inCart} = product;

    return (
        <DivWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>
                    { (value) => (
                        <div className="img-container p-5" onClick={()=> value.handleDetails(id)}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top" /> 
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false}
                            onClick={() => {
                                value.addToCart(id); 
                                value.openModal(id);
                            }}>
                                {inCart ? (
                                    <p className="text-capitalize mb-8" disabled>    
                                        In Cart
                                    </p>
                                ):(
                                    <i className="fas fa-cart-plus"/> 
                                )}
                            </button>
                        </div>
                    )}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="text-dark align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">R$</span>
                        {price}
                    </h5>
                </div>
            </div>
        </DivWrapper>
    )
}

Product.protoTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}