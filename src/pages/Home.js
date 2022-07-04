import { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import StyledHome from '../core-ui/page/Home.style';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const[products,setProducts] = useState([{
    
      "product_id": 1,
      "product_name": "Cake",
      "product_img": "",
      "product_qty": 10, 
      "price": 100000 , 
      "category_id": 1,
      "product_desc" : "This is product description"
    
  }]);

  const[search,setSearch] = useState("");

  let navigate = useNavigate();

 

   // tiap kali ganti search text
   useEffect(()=>{
       const writtenText = search;
       const productsArray = JSON.parse(localStorage.getItem("products"));

       const newArray = productsArray.filter(prod => prod.product_name.toLowerCase().trim().startsWith(writtenText) === true);
       setProducts(newArray);
   },[search])

   
   const onSearch = (e) => {
      setSearch(e.target.value);
   }
  
   

  
  

  return (
    <>
      <StyledHome>
             <div className='title'>Products</div>
             <form onSubmit={(e)=>{e.preventDefault()}}>
                  <input type="text" placeholder='Search your products' onChange={onSearch} value={search}></input>
             </form>
                 {products.length === 0 ? <div style={{}}>No results found..</div> : ""}
             <div className='products'>
                 {products.map(product => <ProductCard key={product.product_id} product={product} navigate={navigate}/>)}
             </div>
      </StyledHome>
    </>

  )
}

export default Home