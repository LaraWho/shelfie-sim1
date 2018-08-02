import React, { Component } from 'react';
import logo from './logo.png'
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="home-nav-bar">
          <img className="logo" src={logo} alt="Logo"/>
          <h1 className="home-header">SHELFIE</h1>
        </div>

        <div className="shelf-buttons">
          <Link to={"/shelf/A"}><h2>Shelf A</h2></Link>
          <Link to={"/shelf/B"}><h2>Shelf B</h2></Link>
          <Link to={"/shelf/C"}><h2>Shelf C</h2></Link>
          <Link to={"/shelf/D"}><h2>Shelf D</h2></Link>
        </div>

      </div>
    );
  }
}

export default Home;