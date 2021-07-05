
import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from 'reactstrap'
import React from 'react'
import { Link } from 'react-router-dom'


function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}


function SearchProduct() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [click, setClick] = useToggle()
  let val = search
  const getProductdata = async () => {
    try {
      const response = await axios.get('https://8i6toiaqa8.execute-api.us-east-1.amazonaws.com/prod/')
      setProducts(response.data)
    }
    catch (err) { console.log(err) }
  }
  useEffect(() => { getProductdata() }, [])


  return (
    <div className="container">
      <h2 className="header">Product Inventory</h2>
      <h4 data-testid="Tosearch" className="title">Product Name</h4>
      <input className="txtbox"
        type="text"
        onChange={(e) => { setSearch(e.target.value) }}
        placeholder="Search" />
      <button onClick={setClick} className="but">Submit</button>
      <div className="row">
        <div className=" .col-xs-4 text-center" >
          <Table dark responsive striped bordered hover>
            <thead>
              <tr className="d-flex">
                <th className="col-2">Id</th>
                <th className="col-2">Product</th>
                <th className="col-2">Quantity Available</th>
                <th className="col-2">Location</th>
                <th className="col-4">Images</th>
              </tr>
            </thead>

            <tbody>
              {click ? products.filter(product => {
                if (search == "") { return product } else if (search == product.Id) {
                  return product
                }
              }).map(product => <tr className="d-flex">
                <td className="col-2">{product.Id}</td>
                <td className="col-2">{product.Product}</td>
                <td className="col-2">{product.Quantity}</td>
                <td className="col-2">{product.Location}</td>
                <td className="col-4"><a href={product.Image} >{product.Image}</a></td>
              </tr>) : <td colSpan="4">Waiting for User...</td>}

            </tbody>
          </Table>
        </div>
      </div>
    </div >



  );


}

export default SearchProduct;
