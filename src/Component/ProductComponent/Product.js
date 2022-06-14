/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react"
import { getProducts } from '../../api/product';

// import product1 from './../../assets/img/product-1.jpg';
// import product2 from './../../assets/img/product-2.jpg';
// import product3 from './../../assets/img/product-3.jpg';
// import product4 from './../../assets/img/product-4.jpg';
// import product5 from './../../assets/img/product-5.jpg';
// import product6 from './../../assets/img/product-6.jpg';
// import product7 from './../../assets/img/product-7.jpg';
// import product8 from './../../assets/img/product-8.jpg';

/*
import vendor1 from './../../assets/img/vendor-1.jpg';
import vendor2 from './../../assets/img/vendor-2.jpg';
import vendor3 from './../../assets/img/vendor-3.jpg';
import vendor4 from './../../assets/img/vendor-4.jpg';
import vendor5 from './../../assets/img/vendor-5.jpg';
import vendor6 from './../../assets/img/vendor-6.jpg';
import vendor7 from './../../assets/img/vendor-7.jpg';
import vendor8 from './../../assets/img/vendor-8.jpg';*/

export class Product extends Component {

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
                <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
                    </div>
                    <div className="row px-xl-5 pb-3">
                        {
                            this.state.products.map(product => {
                                return <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={product.productID}>
                                    <div className="card product-item border-0 mb-4">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                            <img className="img-fluid w-100" src={product.productImage} alt="" />
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>${product.productPrice}</h6><h6 className="text-muted ml-2"><del>$999.999</del></h6>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href={'product/detail/' + product.productID} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                        </div>
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