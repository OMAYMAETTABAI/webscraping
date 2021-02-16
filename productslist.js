import React, { Component } from "react";
import ProductService from '../../api/productservice';
import './productslist.css'

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
    this.refreshProducts = this.refreshProducts.bind(this);
  }

  componentDidMount() {
    this.refreshProducts();
  }

  refreshProducts() {
    ProductService.getProducts()
      .then(
        response => {
          console.log(response);
          this.setState({ products: response.data })
        }
      )
      .catch(err =>
        console.log("we can't get products "+err)
      )
  }
  render() {
    return (
      <div className="row">
        {this.state.products.map((product, index) => {
          return <div key={index} className="m-2">
            <div className="card" style={{width:"13rem"}}>
              <img className="card-img-top" src={product.image}></img>
              <div className="card-body">
                <h5 className="card-title">{product.price ? product.price :0} DH</h5>
                <p className="card-text">{product.desc}</p>  
                <a href="#" className="btn btn-primary">more info</a>
              </div>
            </div>
          </div>
        })}
      </div>
    );
  }
}