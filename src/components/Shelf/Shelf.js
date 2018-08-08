import React, { Component } from 'react';
import logo from './logo.png';
import './shelf.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shelf extends Component {
  constructor() {
    super()
    this.state = {
      showAdd: false,
      data:[]
    }

    this.checkBins = this.checkBins.bind(this);
  }

  componentDidMount() {
    this.checkBins()
  }

  checkBins() {
    axios.get(`/shelf/${this.props.match.params.id}`)
    
    .then( res => {
      console.log(res.data)
      this.setState({
        data: res.data
      })
      //sort this out using the res.data array!
      if(!res.data[0]) {
        this.setState({
          showAdd: true,
        })
      } else {
        console.log(res.data)
      }
    })
  }


  render() {
    console.log(this.props)
    console.log(this.state.data)
    if(!this.state.showAdd) {

      return (
        <div>
          <div className="bin-nav-bar">
            <div className="logo-container">
              <Link to={"/"}><img className="bin-logo" src={logo} alt="Logo"/></Link>
            </div>
            <h1 onClick={this.props.history.goBack}>Shelf { this.props.match.params.id } </h1>
          </div>
  
        <div className="bin-buttons">
        
      {/* do a load of ternary statements! */}
            <Link to={`/shelf/${this.props.match.params.id}/bin/1`}><h2>Bin 1</h2></Link>
            <Link to={`/shelf/${this.props.match.params.id}/bin/2`}><h2>Bin 2</h2></Link>
            <Link to={`/shelf/${this.props.match.params.id}/bin/3`}><h2>Bin 3</h2></Link>
            <Link to={`/shelf/${this.props.match.params.id}/bin/4`}><h2>Bin 4</h2></Link>
            <Link to={`/shelf/${this.props.match.params.id}/add/5`}><h2>Bin 5</h2></Link>
        </div>
        </div>
        )
    } else {
      return (
        <div>
        <div className="bin-nav-bar">
            <div className="logo-container">
              <Link to={"/"}><img className="bin-logo" src={logo} alt="Logo"/></Link>
            </div>
            <h1 onClick={this.props.history.goBack}>Shelf { this.props.match.params.id } </h1>
          </div>
  
        <div className="add-buttons">
        <Link to={`/shelf/${this.props.match.params.id}/add/1`}><h3 className="add"> + Add Inventory</h3></Link>
        <Link to={`/shelf/${this.props.match.params.id}/add/3`}><h3 className="add"> + Add Inventory</h3></Link>
        <Link to={`/shelf/${this.props.match.params.id}/add/3`}><h3 className="add"> + Add Inventory</h3></Link>
        <Link to={`/shelf/${this.props.match.params.id}/add/4`}><h3 className="add"> + Add Inventory</h3></Link>
        <Link to={`/shelf/${this.props.match.params.id}/add/5`}><h3 className="add"> + Add Inventory</h3></Link>
        </div>
        </div>
      )
    }
   



      
    
  }
}

export default Shelf;