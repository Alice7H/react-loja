import { Fragment } from "react";
import Title from "../Title";
import Product from "./Product";
import { ProductConsumer } from "./../../context";

export default function ProductList() {
    
    return (
        <Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="OUR" title="PRODUCTS"/>
                    <div className="row">
                       <ProductConsumer>
                           {value => {
                              return value.products.map(product => {
                                  return <Product key={product.id} product={product} />
                              });
                           }}
                       </ProductConsumer>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
