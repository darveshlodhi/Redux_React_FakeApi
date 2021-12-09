import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setproducts} from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state) => state);
     const dispatch = useDispatch();


    const fetchProducts = async()=>{
        const response = await axios.get(" https://fakestoreapi.com/products")
        .catch( (err)=>{
            console.log("Error", err);
        });
        dispatch(setproducts(response.data));
        
    };

    useEffect( ()=> {
        fetchProducts();
    }, []);


    console.log("products:", products);

    return (
        <div className=" ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
