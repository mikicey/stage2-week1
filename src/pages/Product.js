import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { StyledTable } from '../core-ui/Table.style'
import ProductRow from '../components/ProductRow'
import Modal from "../components/Modal";
import {overlay} from "../constants/index"

const Product = () => {
    const[products,setProducts] = useState([
        {
            id:1000,
            photo:"Mouse.jpg",
            name:"Mouse",
            desc:"Lorem ipsum mouse...",
            price:500.000,
            qty:60,
        },
        {
            id:1001,
            photo:"House.jpg",
            name:"Mouse",
            desc:"Lorem ipsum house...",
            price:525.000,
            qty:0,
        },
        {
            id:1002,
            photo:"Cat.jpg",
            name:"Mouse",
            desc:"Lorem ipsum cat...",
            price:100.000,
            qty:60,
        },
        {
            id:1003,
            photo:"Snake.jpg",
            name:"Mouse",
            desc:"Lorem ipsum snake...",
            price:200.000,
            qty:70,
        },
        {
            id:1004,
            photo:"Life.jpg",
            name:"Mouse",
            desc:"Lorem ipsum life...",
            price:300.000,
            qty:600,
        },
        {
            id:1005,
            photo:"Jump.jpg",
            name:"Mouse",
            desc:"Lorem ipsum jump...",
            price:555.000,
            qty:900,
        }
    ])
    const[isModal,setIsModal] = useState(false);
    const[idToDelete, setIdToDelete] = useState("");

    const navigate = useNavigate();


    function deleteRow(id){
        setProducts(prev => {
             const newList = prev.filter(item => item.id !== id);
             return newList;
        })
    };


  return (
    <>
        <section className='list-product-section' style={{padding:"80px 84px"}}>
              {isModal? <Modal id={idToDelete} deleteRow={deleteRow} setIsModal={setIsModal}/> : ""}
              {isModal? <div style={overlay}></div> : ""}
              
              <b style={{fontSize:"24px"}}>List Product</b>

              <StyledTable>
              <thead>
                   <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                   </tr>
              </thead>

              <tbody>
                   {
                    products.map((product,index) => {
                        return <ProductRow key={product.id} product={{...product,index}} navigate={navigate} setIsModal={setIsModal} setId={setIdToDelete} />
                    })
                   }
             </tbody>
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Product