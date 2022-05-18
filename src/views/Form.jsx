import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, {title, price, description})
        .then(response => navigate(`/products`))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={price}
                        onChange={e=>setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={description}
                        onChange={e=>setDescription(e.target.value)} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Form