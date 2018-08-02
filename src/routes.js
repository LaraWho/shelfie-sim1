import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import AddProduct from './components/AddProduct/Add_product';
import ProductInfo from './components/ProductInfo/Product_info';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shelf/:id" component={ Shelf } />
        <Route exact path="/shelf/:id/add/:addproduct" component={ AddProduct } />
        <Route path="/shelf/:id/bin/:number" component={ ProductInfo } />
    </Switch>
)