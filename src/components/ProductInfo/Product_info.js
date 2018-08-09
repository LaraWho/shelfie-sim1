import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './product_info.css';
import axios from 'axios';

class ProductInfo extends Component {
    constructor() {
        super()

        this.state = {
          // userInput: '',
          showSave: false,
          showEdit: true,
          canEdit: false,
          name: '',
          price: '',
          image: ''
        }

        // this.handleInput = this.handleInput.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleSave = this.toggleSave.bind(this);
        // this.handleEditChange = this.handleEditChange.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePriceInput = this.handlePriceInput.bind(this);
        this.handleimageInput = this.handleimageInput.bind(this);
    }

    componentDidMount() {
      axios.get(`/shelf/${this.props.match.params.id}/bin/${this.props.match.params.number}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          name: res.data[0].item_name,
          price: res.data[0].item_price,
          image: res.data[0].item_image
        })
      })
    }

    deleteItem() {
    axios.delete(`/shelf/${this.props.match.params.id}/bin/${this.props.match.params.number}`)
      .then(res => {
        console.log(res.data)
      })
    }

    // handleEditChange() {
    //   this.setState({
    //     canEdit: !this.state.canEdit
    //   })
    // }

    toggleSave() {
      this.setState({
        showSave: !this.state.showSave,
        canEdit: !this.state.canEdit
      })
    }

    toggleEdit() {
      this.setState({
        showEdit: !this.state.showEdit
      })
    }

    // handleInput(e) {
    //   this.setState({
    //     userInput: "$ " + e.target.value
    //   })
    // }

    handleNameInput(val) {
      this.setState({
        name: val
      })
    }

    handlePriceInput(val) {
      this.setState({
        price: val
      })
    }

    handleimageInput(val) {
      this.setState({
        image: val
      })
    }

    handleNameChange = val => {
      this.setState({
        name: val
      })
    }

    handlePriceChange = val => {
      this.setState({
        price: val
      })
    }

    handleImageChange = val => {
      this.setState({
        image: val
      })
    }

    saveEdit = () => {
      axios.post(`/shelf/${this.props.match.params.id}/bin/${this.props.match.params.number}`, 
      {name: this.state.name, price: this.state.price})
      .then( res => {
        console.log(res.data)
        this.setState({
          showEdit: true,
          canEdit: !this.state.canEdit,
          name: res.data[0].item_name,
          price: res.data[0].item_price
        })
      })
    }

  render() {
    console.log(this.props)
    return (
      <div>

        <div className="product-nav-bar">
          <div className="logo-container">
            <Link to={"/"}><img className="bin-logo" src={logo} alt="Logo"/></Link>
          </div>
          <h2 className="shelf-header"
          onClick={this.props.history.goBack}>Shelf { this.props.match.params.id } 
          </h2>
          <h2 className="bin-header">Bin { this.props.match.params.number } </h2>
        </div>

        <div>
          <img className="image" src={this.state.image} alt={this.state.name}/>
        </div>

        <div className="product-info">
            <p className="product-text">Name</p>
            <input className={this.state.canEdit ? "input-box" : "cannot-edit"} type="text"
            onChange={e => this.handleNameInput(e.target.value)}
            value={this.state.name}/>
            <p className="product-text">Price</p>
            <input className={this.state.canEdit ? "input-box" : "cannot-edit"} type="text"
            value={"$" + this.state.price}
            placeholder=" $ 0.00"
            onChange={e => this.handlePriceInput(e.target.value)}
            />
        </div>

        <div className="edit-buttons">

        {this.state.showSave ?
        <div className="save-button"
        onClick={() => this.saveEdit()}>
          <button>SAVE</button>
        </div>
        :
        <div className="edit-button"
        onClick={() => this.toggleSave()}>
          <button>EDIT</button>
      </div>
      }
      <Link to={`/shelf/${this.props.match.params.id}`}><div className="delete-button"
      onClick={() => this.deleteItem()}>
          <button>DELETE</button>
      </div></Link>

      </div>

    </div>
    );
  }
}

export default ProductInfo;