/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { getProducts } from '../../api/product';


export class LimitProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        getProducts()
            .then(resp => {
                this.setState({
                    products: resp.data
                })
            })
    }


    render() {
        return (
            <>
                <div className="container-fluid pt-5" >
                    <div className="row px-xl-5 pb-3">
                        {
                            this.state.products.map((product) => {

                                return <div className="col-lg-4 col-md-6 pb-1" key={product.productID}>
                                    <div className="cat-item d-flex flex-column border mb-4" style={{ "padding": "30px" }}>
                                        <p className="text-right">{product.productStock}</p>
                                        <a href={'product/detail/' + product.productID} className="cat-img position-relative overflow-hidden mb-3" key={product.productID}>
                                            <img className="img-fluid" src={product.productImage} alt="" />
                                        </a>
                                        <h5 className="font-weight-semi-bold m-0">{product.productName}</h5>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}