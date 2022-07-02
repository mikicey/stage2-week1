import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import StyledHome from '../core-ui/page/Home.style';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const[products,setProducts] = useState([
    {
      id:1,
      img:"",
      title:"Baju",
      price:100.000 ,
      stock: 100,
    },
    {
      id:2,
      img:"",
      title:"Baju",
      price:100.000 ,
      stock: 100,
    },
    {
      id:3,
      img:"",
      title:"Baju",
      price:100.000 ,
      stock: 100,
    },
    {
      id:4,
      img:"",
      title:"Baju",
      price:100.000 ,
      stock: 100,
    },
    {
      id:5,
      img:"",
      title:"Baju",
      price:100.000 ,
      stock: 100,
    },
    {
      id:6,
      img:"",
      title:"Baju",
      price:100.000 ,
      stock: 100,
    },

  ]);
  let navigate = useNavigate();

  return (
    <>
      <StyledHome>
             <span className='title'>Products</span>
             <div className='products'>
                 {products.map(product => <ProductCard key={product.id} product={product} navigate={navigate}/>)}
             </div>
      </StyledHome>
    </>

  )
}

export default Home