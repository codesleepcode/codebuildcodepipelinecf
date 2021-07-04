import './App.css'
import React, { useImperativeHandle, useState } from 'react';
import axios from 'axios';


function AddProduct() {
    const url = "https://8i6toiaqa8.execute-api.us-east-1.amazonaws.com/prod/"
    const [data, setData] = useState({
        id: "",
        name: "",
        quantity: "",
        location: "",
        image: ""
    })
    function submit(e) {
        e.preventDefault();
        axios.post(url, { key1: parseInt(data.id), key2: data.name, key3: parseInt(data.quantity), key4: data.location, key5: data.image })
            .then(res => { console.log(res.data) })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="AddProducts">
            <h1 className="heading-addproducts">Add Products</h1>
            <form onSubmit={(e) => submit(e)}>
                <div>
                    <label className="prod-id">Product Id</label>
                    <input className="txtbox1" onChange={(e) => handle(e)} id="id" value={data.id} placeholder="id" type="number" />
                </div>
                <div>
                    <label className="prod-name">Product Name</label>
                    <input className="txtbox2" onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text" />
                </div>
                <div>
                    <label className="prod-quant">Product Quantity</label>
                    <input className="txtbox3" onChange={(e) => handle(e)} id="quantity" value={data.quantity} placeholder="quantity" type="number" />
                </div>
                <div>
                    <label className="prod-loc">Product Location</label>
                    <input className="txtbox4" onChange={(e) => handle(e)} id="location" value={data.location} placeholder="location" type="text" />
                </div>
                <label className="prod-img">Product Image</label>
                <input className="txtbox5" onChange={(e) => handle(e)} id="image" value={data.image} placeholder="image" type="text" />
                <div>
                    <button className="submitbtn">Submit</button>
                </div>
            </form>
        </div>


    )
}

export default AddProduct;