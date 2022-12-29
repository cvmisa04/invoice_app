import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';


const CreateItem = () => {
    const idParam = useParams();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [stock, setStock] = useState();
    const [itemId, setItemId] = useState(idParam.invoiceID)
    //Invoice ID



    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const items = { name, quantity, stock, itemId };



        fetch("http://localhost:8000/items", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(items)
        }).then((res) => {
            alert('Create successfully.');
            navigate('/items/' + idParam.invoiceID)
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
                                <h2>Create item </h2>
                                <h4 className='text-primary'>Invoice # {idParam.invoiceID}</h4>
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
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to={`/items/` + idParam.invoiceID} className="btn btn-danger">Back</Link>
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

export default CreateItem