import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uuid from 'react-uuid';


const CreateInvoice = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [stock, setStock] = useState();
    const [itemId, setItemId] = useState(uuid())
    //Invoice ID
    const [invoiceID, setInvoiceID] = useState(itemId)


    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const items = { name, quantity, stock, itemId };
        const invoices = { invoiceID }


        fetch("http://localhost:8000/items", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(items)
        }).then((res) => {

        }).catch((err) => {
            console.log(err.message)
        })


        fetch("http://localhost:8000/invoices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(invoices)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2 className='text-center'>Create invoice</h2>
                                <h6 className='text-center'>Add item</h6>
                            </div>
                            <div className="card-body">

                                <div className="row">



                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => setName(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input value={quantity} onChange={e => setQuantity(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Stock</label>
                                            <input value={stock} onChange={e => setStock(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group m-3 text-center">
                                            <button className="btn btn-success m-3" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateInvoice