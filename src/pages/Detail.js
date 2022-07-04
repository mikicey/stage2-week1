import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";

import StyledDetail from "../core-ui/page/Detail.style";
import img from "../assets/cake.jpg";

const Detail = () => {
  // pakai ini untuk cari data di db
  let {id} = useParams();

  const[product,setProduct] = useState({
    product_name: "",
    product_qty:"",
    product_desc:"",
    price:""
  })

  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    const singleProduct = products.find(prod => prod.product_id == id);
    setProduct(singleProduct)
  },[])


  return (
    <StyledDetail>
          <img src={img} alt="cake"/>
          <div className="right-section">
                <span>{product.product_name}</span>
                <p>Stock: {product.product_qty}</p>
                <ul>
                   <li>White Cake</li>
                   <li>Size:L</li>
                   <li>Tahan 1 hari saja</li>
                </ul>
                <p>
                   {product.product_desc}
                </p>

                <p className="price">Rp. {product.price}</p>

                <button>Buy</button>
          </div>
    </StyledDetail>

  )
}

export default Detail