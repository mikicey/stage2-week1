import {useParams} from "react-router-dom";
import { useEffect,useState,useContext } from "react";

import {AppContext} from "../App"
import StyledDetail from "../core-ui/page/Detail.style";

import {api} from "../connection"

const Detail = () => {
  let {id} = useParams();
  const {token} = useContext(AppContext);

  // States
  const[product,setProduct] = useState({
    image : "",
    title: "",
    qty:"",
    desc:"",
    price:""
  })

  // UseEffect
  useEffect(()=>{
      getProduct();
  },[])

  // Function
  const getProduct = async() => {

    try {

      const res = await api.get(`/product/${id}`, {
        headers: {'Authorization':`Bearer ${token}`}
        });

      
      // Extract data
      const payload = res.data;
      const product = payload.data.product;


   

      setProduct(product);
      

    } catch (err) {
      const payload = err.response.data;
      const message = payload.message;

      // navigate to error page
      console.log(message)
      
    };

  };

  


  return (
    <StyledDetail>
          <img src={product.image} alt="cake"/>
          <div className="right-section">
                <span>{product.title}</span>
                <p>Stock: {product.qty}</p>
                <p>
                   {product.desc}
                </p>

                <p className="price">Rp. {product.price}</p>

                <button>Buy</button>
          </div>
    </StyledDetail>

  )
}

export default Detail