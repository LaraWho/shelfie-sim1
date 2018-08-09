import React, { Component } from 'react';
import logo from './logo.png';
import './shelf.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shelf extends Component {
  constructor() {
    super()
    this.state = {
      bin1: '',
      bin2: '',
      bin3: '',
      bin4: '',
      bin5: ''
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
      res.data.forEach((element) => {
        let bin = "bin" + element.bin_id
        this.setState({
          [bin]: element
        })
      })
    })
  }

  render() {
console.log(this.state)
      return (
        <div>
          <div className="bin-nav-bar">
            <div className="logo-container">
              <Link to={"/"}><img className="bin-logo" src={logo} alt="Logo"/></Link>
            </div>
            <h1 onClick={this.props.history.goBack}>Shelf { this.props.match.params.id } </h1>
          </div>
  
        <div className="bin-buttons">
      {this.state.bin1 ? 
      <Link to={`/shelf/${this.props.match.params.id}/bin/1`}><h2>Bin 1</h2></Link>
      :
      <Link to={`/shelf/${this.props.match.params.id}/add/1`}><h3 className="add"> + Add Inventory</h3></Link>
      }

      {this.state.bin2 ? 
      <Link to={`/shelf/${this.props.match.params.id}/bin/2`}><h2>Bin 2</h2></Link>
      :
      <Link to={`/shelf/${this.props.match.params.id}/add/2`}><h3 className="add"> + Add Inventory</h3></Link>
      }

      {this.state.bin3 ? 
      <Link to={`/shelf/${this.props.match.params.id}/bin/3`}><h2>Bin 3</h2></Link>
      :
      <Link to={`/shelf/${this.props.match.params.id}/add/3`}><h3 className="add"> + Add Inventory</h3></Link>
      }

      {this.state.bin4 ? 
      <Link to={`/shelf/${this.props.match.params.id}/bin/4`}><h2>Bin 4</h2></Link>
      :
      <Link to={`/shelf/${this.props.match.params.id}/add/4`}><h3 className="add"> + Add Inventory</h3></Link>
      }

      {this.state.bin5 ? 
      <Link to={`/shelf/${this.props.match.params.id}/bin/5`}><h2>Bin 5</h2></Link>
      :
      <Link to={`/shelf/${this.props.match.params.id}/add/5`}><h3 className="add"> + Add Inventory</h3></Link>
      }
      </div>
    </div>
     
    )
  }
}

export default Shelf;