import { useState,useEffect,useContext } from 'react';
import {useNavigate} from "react-router-dom";

import { AppContext } from '../App';

import { StyledTable } from '../core-ui/Table.style'
import ProductRow from '../components/ProductRow'
import Modal from "../components/Modal";
import {overlay} from "../constants/index"

const Product = () => {
    const{user} = useContext(AppContext);

    const[products,setProducts] = useState([])
    const[isModal,setIsModal] = useState(false);
    const[idToDelete, setIdToDelete] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        getProducts();
    },[])

    function getProducts(){
        const productsArray = JSON.parse(localStorage.getItem("products"));
        setProducts(productsArray);
    
      };


    function deleteRow(id){
        // setProducts(prev => {
        //      const newList = prev.filter(item => item.id !== id);
        //      return newList;
        // })

        const productsArray = JSON.parse(localStorage.getItem("products"));
        const newProducts = productsArray.filter(prod => prod.product_id !== id);
    
        localStorage.setItem("products", JSON.stringify(newProducts));
        getProducts();
    };


   if(products.length === 0){
    return (<div>Fetching Data</div>)
   }


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
                        return <ProductRow key={product.product_id} product={{...product,index}} navigate={navigate} setIsModal={setIsModal} setId={setIdToDelete} />
                    })
                   }
             </tbody>
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Product