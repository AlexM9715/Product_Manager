import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Details = () => {

    const {id} = useParams()
    const [product, setProduct] = useState()
    const navigate = useNavigate()
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`) //this id is from localhost:3000
        .then(respone => setProduct(respone.data))
        .catch(err => console.log(err))
    }, [])
    
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response => navigate(`/products`))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Details</h1>
            {
                product&&
                <div>
                    <h3>Title: {product.title}</h3>
                    <h3>Price: ${product.price}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            }
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Details