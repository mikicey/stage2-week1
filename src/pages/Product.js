import { useState,useEffect,useContext } from 'react';
import {useNavigate} from "react-router-dom";

import { AppContext } from '../App';

import { StyledTable } from '../core-ui/Table.style';
import ProductRow from '../components/ProductRow';
import Modal from "../components/Modal";
import {overlay} from "../constants/index";

import {api} from "../connection";

const Product = () => {
    const navigate = useNavigate();
    const{token} = useContext(AppContext);

    const[products,setProducts] = useState([]);
    const[isLoading,setIsLoading] = useState(false);


    const[isModal,setIsModal] = useState(false);
    const[idToDelete, setIdToDelete] = useState("");

    // Use Effect

    useEffect(()=>{
        getRows()
    },[])


    // Function
    const deleteRow = async(id) => {

      try {
        await api.delete(`/product/${id}`, {
                       headers: {'Authorization':`Bearer ${token}`}
                       }); 

         getRows();


      } catch(err) {
        const payload = err.response.data;
        const message = payload.message;

        // navigate to error page
        console.log(message)
        setIsLoading(false)
      };


    };

    const getRows = async() => {
        
      setIsLoading(true);

      try {

        const res = await api.get("/products", {
          headers: {'Authorization':`Bearer ${token}`}
          });

        // Extract data
        const payload = res.data;
        const products = payload.data.products;

        setProducts(products);
        setIsLoading(false)

      } catch (err) {
        const payload = err.response.data;
        const message = payload.message;

        // navigate to error page
        console.log(message)
        setIsLoading(false)

      };

    }


   

  return (
    <>
        <section className='list-product-section' style={{padding:"80px 84px"}}>
              {isModal? <Modal id={idToDelete} deleteRow={deleteRow} setIsModal={setIsModal}/> : ""}
              {isModal? <div style={overlay}></div> : ""}
              
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <b style={{fontSize:"24px"}}>List Product</b>
                  <button style={{backgroundColor:"#F74D4D",fontSize:"18px"}} onClick={()=>{navigate("/addproduct")}}>Add New</button>
              </div>

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

             {isLoading && <div>Loading</div>}
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Product