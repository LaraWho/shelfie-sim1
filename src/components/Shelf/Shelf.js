import React, { Component } from 'react';
import logo from './logo.png';
import './shelf.css';
import { Link } from 'react-router-dom';

class Shelf extends Component {
    constructor() {
        super()

        this.state = {
          showAdd: false
        }
    }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="bin-nav-bar">
          <div className="logo-container">
            <Link to={"/"}><img className="bin-logo" src={logo} alt="Logo"/></Link>
          </div>
          <h1 onClick={this.props.history.goBack}>Shelf { this.props.match.params.id } </h1>
        </div>

      <div className="bin-buttons">
          <Link to={`/shelf/${this.props.match.params.id}/bin/1`}><h2>Bin 1</h2></Link>
          <Link to={`/shelf/${this.props.match.params.id}/bin/2`}><h2>Bin 2</h2></Link>
          <Link to={`/shelf/${this.props.match.params.id}/bin/3`}><h2>Bin 3</h2></Link>
          <Link to={`/shelf/${this.props.match.params.id}/bin/4`}><h2>Bin 4</h2></Link>
          <Link to={`/shelf/${this.props.match.params.id}/add/5`}><h2 className="add"> + Add Inventory</h2></Link>
        </div>

      </div>
    );
  }
}

export default Shelf;