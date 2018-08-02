import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './add_product.css';


class AddProduct extends Component {
    // constructor() {
    //     super()
    // }
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="add-nav-bar">
          <div className="logo-container">
            <Link to={"/"}><img className="bin-logo" src={logo} alt="Logo"/></Link>
          </div>
          <h2 onClick={this.props.history.goBack} className="shelf-header-add">Shelf { this.props.match.params.id } </h2>
          <h2 className="add-header">Add to Bin { this.props.match.params.addproduct } </h2>
        </div>

         <div className="add-product-info">
            <p className="product-text">Name</p>
            <input className="input-box" type="text"/>
            <p className="product-text">Price</p>
            <input className="input-box" type="text"
            placeholder=" $ 0.00"/>
            <p className="product-text">Image URL</p>
            <input className="input-box" type="text"/>
        </div>

        <div className="add-button">
          <button> + Add Inventory </button>
        </div>

      </div>
    );
  }
}

export default AddProduct;