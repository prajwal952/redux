import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {

    const [product, setproduct] = useState([]);

    const {id}=useParams()



    useEffect(()=>{
        getProduct();
    },[])
    
    const getProduct= async ()=>{
        const data= await fetch(`https://fakestoreapi.com/products/${id}`);
        const res= await data.json();
        setproduct(res)
        console.log(res)
    }

  return (

    <>
       {
    Object.keys(product).length >0 ? (

     <div className="container">
        <div className="row">
            <div className="col-md-6 mt-2 p-2 border border-raidus=2">
                <img className="img-fluid" src={product.image} alt="" />
            </div>

            <div className="col-md-6 mt-2 p-2 border">
                <h3 className='mt-2'>{product.title}</h3>
                <p>{product.description}</p>
                <button className='btn btn-success'>Buy Now</button>
           </div>
        </div>
        
        
       
    </div>

    ) :( <div>Loading...!</div> )
 
   
}
    </>
  )
}

export default Product