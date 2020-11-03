import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/product/ProductList";
import Details from "./components/product/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
    return (
        <Fragment>
            <Navbar />
            <Carousel/>
            <Switch>
                <Route path='/' component={ProductList} exact />
                <Route path='/details' component={Details} />
                <Route path='/cart' component={Cart} />
                <Route component={Default} />
            </Switch>
            <Modal />
            <Footer />
        </Fragment>
    );
}

export default App;
