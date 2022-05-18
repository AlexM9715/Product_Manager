import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const DisplayList = (props) => {

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response => props.reloadList())
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {props.products.map((product, i) => (
                    <li key={i}>
                        <Link to={"/products/" + product._id}>{product.title}</Link> <br />
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayList