import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function TotalCart({value}) {

    const {cartTax, cartSubtotal, cartTotal, clearCart } = value;

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                        onClick={()=> clearCart()}>
                            Clear Cart
                        </button>
                        </Link>
                        <h5>
                            <span className="text-blue">
                                Subtotal: <strong>R$ {cartSubtotal} </strong>
                            </span>  
                        </h5>
                        <h5>
                            <span className="text-blue">
                                Tax: <strong>R$ {cartTax} </strong>
                            </span>
                        </h5>
                        <hr/>
                        <h5>
                            <span className="text-blue">
                                Total: <strong>R$ {cartTotal} </strong>
                            </span>  
                        </h5>    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
