import { Fragment } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartEmpty from "./CartEmpty";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default function Cart() {
	return (
		<section>
			<ProductConsumer>
				{value => {
					const {cart} = value;
					if(cart.length > 0) {
						return (
							<Fragment>
								<Title name="Your" title="Cart"/>
								<CartColumns/>
								<CartList value={value} />
								<CartTotal value={value} />
							</Fragment>
						);
					} else {
						return <CartEmpty/>;
					}
				}}
			</ProductConsumer>
		</section>
	)
}