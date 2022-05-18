import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import DisplayList from '../components/DisplayList'

//grab info from backend
//useEffect, useState, axios

const Main = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(true)

    //grabbing all products for DisplayTable
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`) //getting from backend, product.routes
        .then(response =>{
            setProducts(response.data)
        })
        .catch(err => console.log(err))
    }, [refresh])

    const reload = () => {
        setRefresh(!refresh)
    }

    return (
        <div>
            <CreateForm reloadList = {reload}/>
            <hr />
            <DisplayList products={products} reloadList = {reload} />
        </div>
    )
}

export default Main