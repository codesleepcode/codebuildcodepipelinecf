import React from 'react'
import AddProduct from './AddProduct'
import SearchProduct from './SearchProduct'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom'



function Nav() {


    return (
        <Router>
            <nav>
                <h1>Welcome to Product Inventory</h1>
                <ul className="nav-links">
                    <Link to='/Addproduct'>
                        <li>Add product</li>
                    </Link>
                    <Link to='/Searchproduct'>
                        <li>Search product</li>
                    </Link>
                </ul>
            </nav>
            <Route path="/Addproduct" component={AddProduct} />
            <Route path="/Searchproduct" component={SearchProduct} />
        </Router>

    )


}

export default Nav;
