import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './product_info.css';

class ProductInfo extends Component {
    constructor() {
        super()

        this.state = {
          userInput: '',
          showSave: false,
          showEdit: true,
          canEdit: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleSave = this.toggleSave.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
    }

    handleEditChange() {
      this.setState({
        canEdit: !this.state.canEdit
      })
    }

    toggleSave() {
      this.setState({
        showSave: !this.state.showSave
      })
    }

    toggleEdit() {
      this.setState({
        showSave: !this.state.showSave
      })
    }

    handleInput(e) {
      this.setState({userInput: "$ " + e.target.value})
    }

  render() {
    console.log(this.props)
    console.log(this.state.canEdit)
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
          <img className="image" src="https://picsum.photos/230/230/?random" alt="Random"/>
        </div>

        <div className="product-info">
            <p className="product-text">Name</p>
            <input className={this.state.canEdit ? "input-box" : "cannot-edit"} type="text"/>
            <p className="product-text">Price</p>
            <input className={this.state.canEdit ? "input-box" : "cannot-edit"} type="text"
            placeholder=" $ 0.00"
            onChange={this.handleInput}/>
        </div>

        <div className="edit-buttons">

        {this.state.showSave ?
        <div className="save-button"
        onClick={() => this.toggleSave()}>
          <button>SAVE</button>
        </div>
        :
        <div className="edit-button"
        onClick={() => this.toggleEdit()}>
          <button onClick={() => this.handleEditChange()}>EDIT</button>
      </div>
      }
      <div className="delete-button">
          <button>DELETE</button>
      </div>

      </div>

    </div>
    );
  }
}

export default ProductInfo;