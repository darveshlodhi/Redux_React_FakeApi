import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct } from '../redux/actions/productAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';


const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const { id, title, image, price, category } = product;
    const { productId } = useParams();
    console.log("product Id ", productId);
    const dispatch = useDispatch();
    //console.log(productId);
    const rendersingle = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/' + productId)
            .catch((err) => {
                console.log("single Error ", err);
            });
        //console.log(res.data);
        dispatch(selectedProduct(res.data));



    };
    useEffect(() => {
        if (productId && productId !== " ")
            rendersingle();

    }, [productId])

    return (
        <div >
            <div class="card text-center">
                <div class="card-header">
                    <img className="card-img-top1" src={image}  alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{category}</p>
                    <a href="#" class="btn btn-primary" > ${price}</a>
                </div>
                <div class="card-footer text-muted">
                    {id} hours later updated
                </div>
            </div>
            <br/>

           
        </div>
        
    );
}

export default ProductDetail
