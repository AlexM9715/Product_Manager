import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {products.map((product, i) => (
                    <li key={i}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard