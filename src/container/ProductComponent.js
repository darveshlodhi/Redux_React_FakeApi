import React from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';


import { Link } from 'react-router-dom';


const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);

    console.log(" data ", products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (

            <div className="productlist">

                <div className="container" key={id}>
                    <Link to={'/product/'+ id}>
                    <div className="row  justify-content-center">
                        <div className="col-4" display="flex">
                            <div className="card" >
                                <img className="card-img-top" src={image} width="200" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"> {title}</h5>
                                    <p className="card-text">{category}</p>
                                    <h5 className="card-title"> ${price}</h5>
                                    <button className="btn btn-primary">view</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    </Link>
                    <br/>
                </div>

            </div>
        )
    })






    return (
        <>
            {renderList}
        </>

    );
}

export default ProductComponent
