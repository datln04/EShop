import { Component } from "react";
import { LimitProduct } from "../ProductComponent/LimitProduct";
import { Product } from "../ProductComponent/Product";


export class Home extends Component {
    render() {
        return (
            <>
                <LimitProduct />
                <Product />
            </>
        )
    }
}