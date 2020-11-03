import { ProductConsumer } from "./../../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styles/ButtonContainer";

export default function Details() {
    return (
        <ProductConsumer>
           {value => {
                const {id, title, company, img, info, price, inCart} = value.details;
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Model: {title}</h2>
                                <h4 className="text-uppercase text-muted mt-3 mb-2">
                                    Made by <span>{company}</span>
                                </h4>
                                <h4 className="text-danger">
                                    <strong>Price: <span>R$</span>{price}</strong>
                                </h4>
                                <p className="font-weight-bold mt-3 mb-8">
                                    Product informations:
                                </p>
                                <p className="text-muted lead text-uppercase text-justify">{info}</p>
                                <div>
                                <Link to="/">
                                    <ButtonContainer>
                                        Back
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer 
                                cart 
                                disabled={inCart ? true : false} 
                                onClick={()=> {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {inCart ? "In cart" : "Add to cart"}
                                </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                );
           }}
        </ProductConsumer>
    )
}
