/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import product1 from './../../assets/img/product-1.jpg';
import product2 from './../../assets/img/product-2.jpg';
import product3 from './../../assets/img/product-3.jpg';
import product4 from './../../assets/img/product-4.jpg';
import product5 from './../../assets/img/product-5.jpg';

export class Card extends Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ "minHeight": "300px" }}>
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
                        <div className="d-inline-flex">
                            <p className="m-0"><a href="">Home</a></p>
                            <p className="m-0 px-2">-</p>
                            <p className="m-0">Shopping Cart</p>
                        </div>
                    </div>
                </div>


                <div className="container-fluid pt-5">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    <tr>
                                        <td className="align-middle"><img src={product1} alt="" style={{ "width": "50px" }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ "width": "100px" }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"><img src={product2} alt="" style={{ "width": "50px" }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ "width": "100px" }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"><img src={product3} alt="" style={{ "width": "50px" }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ "width": "100px" }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"><img src={product4} alt="" style={{ "width": "50px" }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ "width": "100px" }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"><img src={product5} alt="" style={{ "width": "50px" }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ "width": "100px" }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <form className="mb-5" action="">
                                <div className="input-group">
                                    <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Apply Coupon</button>
                                    </div>
                                </div>
                            </form>
                            <div className="card border-secondary mb-5">
                                <div className="card-header bg-secondary border-0">
                                    <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3 pt-1">
                                        <h6 className="font-weight-medium">Subtotal</h6>
                                        <h6 className="font-weight-medium">$150</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Shipping</h6>
                                        <h6 className="font-weight-medium">$10</h6>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5 className="font-weight-bold">Total</h5>
                                        <h5 className="font-weight-bold">$160</h5>
                                    </div>
                                    <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}