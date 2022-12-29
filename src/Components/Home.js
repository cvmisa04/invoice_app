import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const [invoice, setInvoice] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:8000/invoices").then((res) => {
            return res.json();
        }).then((resp) => {
            setInvoice(resp);


        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const getInvoiceID = (id) => {
        navigate('/items/' + id)
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2 className='text-center'>Invoices</h2>
                </div>
                <div className='card-body'>
                    <div>
                        <Link to="invoice/create" className='btn btn-success me-auto mb-2 mb-lg-0'>Add New (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>#InvoiceId</td>

                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            {invoice && invoice.length > 0 ? invoice.map(inv => (
                                <tr key={inv.id}>
                                    <td>{inv.invoiceID}</td>
                                    <td className='m-4'><a onClick={() => { getInvoiceID(inv.invoiceID) }} className='btn btn-primary'>Show items</a>

                                    </td>
                                </tr>
                            )) : <h1 className='text-center'>No invoices yet.</h1>}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Home