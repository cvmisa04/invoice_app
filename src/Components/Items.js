import { Alert } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Items = () => {

    const [items, setItems] = useState(null)
    const idParam = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/items/").then((res) => {
            return res.json();
        }).then((resp) => {
            const filteredItems = resp.filter(key => key.itemId == idParam.invoiceID)
            setItems(filteredItems);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteItem = (id) => {
        if (window.confirm("Do you want to remove?")) {


            /* fetch("http://localhost:8000/items/"+id,{
               method:"DELETE"
             }).then((res)=>{
               alert('Delete successfully.')
               window.location.reload()
       
             }).catch((err)=>{
               console.log(err.message)
             }) */
            const newList = items.filter((item) => item.id !== id);
            setItems(newList)

        }
    }

    const total = items && items.reduce((total, currentItem) => total = parseInt(total) + parseInt(currentItem.stock), 0);
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2 className='text-center'>Items of invoice : <h4 className='text-primary'>{idParam.invoiceID}</h4></h2>
                </div>
                <div className='card-body'>
                    <div>
                        <Link to={`/items/create/` + idParam.invoiceID} className='btn btn-success me-auto mb-2 mb-lg-0'>Add New (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Quantity</td>
                                <td>Stock</td>

                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            {items && items.map(item => (
                                <tr key={item.id}>
                                    <td className='text-right'>{item.id}</td>
                                    <td className='text-left'>{item.name}</td>
                                    <td className='text-right'>{item.quantity}</td>
                                    <td className='text-right'>{item.stock}</td>

                                    <td><a onClick={() => { deleteItem(item.id) }} className='btn btn-danger text-center'>Delete</a></td>
                                </tr>
                            ))}
                        </tbody>
                        <h4 className='text-light bg-success text-center'>Total Sum:</h4>
                        <td></td>
                        <td></td>

                        <h4 className='text-light bg-success text-center'>{total && total}</h4>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Items