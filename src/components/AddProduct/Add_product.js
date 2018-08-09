import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './add_product.css';
import axios from 'axios';


class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
          name: '',
          price: '',
          image: ''
        }
    }

    handleAddName = val => {
      this.setState({
        name: val
      })
    }
    handleAddPrice = val => {
      this.setState({
        price: val
      })
    }
    handleAddImage = val => {
      this.setState({
        image: val
      })
    }

    handleAddBin = () => {
      let { name, price, image } = this.state
      axios.post(`/shelf/${this.props.match.params.id}/add/${this.props.match.params.addproduct}`, {name, price, image})
      .then( res => {
          console.log(res.data)
      })
    }

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
            <input className="input-box" type="text"
            onChange={e => this.handleAddName(e.target.value)}/>
            <p className="product-text">Price</p>
            <input className="input-box" type="text"
            onChange={e => this.handleAddPrice(e.target.value)}
            placeholder=" $ 0.00"/>
            <p className="product-text">Image URL</p>
            <input className="input-box" type="text"
            onChange={e => this.handleAddImage(e.target.value)}/>
        </div>

        <div className="add-button">
          <Link to={`/shelf/${this.props.match.params.id}`}><button onClick={() => this.handleAddBin()}> + Add Inventory </button></Link>
        </div>

      </div>
    );
  }
}

export default AddProduct;