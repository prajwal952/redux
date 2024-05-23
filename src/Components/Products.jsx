import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
const [products, setproducts] = useState([]);

useEffect(()=>{
    getProducts();
},[])

const getProducts= async ()=>{
    const data= await fetch('https://fakestoreapi.com/products');
    const res= await data.json();
    setproducts(res)
    console.log(res)
}

  return (
    <>
    {
        products.length >0 ?(

            <div className='container text-center'>
                <h1> Products</h1>
        <div className="row">
            {
                products.map((product)=>(
                    <div className="col-md-6 border p-3 my-2" key={product.id}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color:"black" }}>
                        
                            <div className="col-md-3">
                                <img src={product.image} alt={product.description} style={{height:'150px', width:'150px'}} />   
                            </div>
                            <div className="col-md-9">
                                <h4 >{product.title}</h4>
                            <div>{product.description}</div>
                            </div>
                         </Link>

                    </div>
                ))
            }
        </div>
    </div>

        ) : ( <div>Loading....!</div>)
    }
    </>

  )
}

export default Products


{/* <div className="container text-center">
<div className='row'>
    {resData.map((ele) => (
        <div className="col-md-6 border p-3 my-2" key={ele.id}>
            <div className="col-md-3">
                <img src={ele.image} alt={ele.title}  width={75} height={75}/>
            </div>
            <div className="col-md-9">
                <h5>{ele.title}</h5>
                <p>{ele.description}</p>
                <p><b><i>Price: {ele.price}</i></b></p>
                <button className='btn btn-primary' name ={ele.title} id={ele.id} value={ele.price} onClick={handleClick} > Add to cart</button>
            </div>
        </div>
    ))}
</div> */}