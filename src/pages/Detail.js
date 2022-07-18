import {useParams,useNavigate} from "react-router-dom";
import { useEffect,useState,useContext } from "react";

import {AppContext} from "../App"
import StyledDetail from "../core-ui/page/Detail.style";

import {api} from "../connection"


const Detail = () => {
  let {id} = useParams();
  const {token} = useContext(AppContext);
  const navigate = useNavigate();

  // States
  const[product,setProduct] = useState({
    image : "",
    title: "",
    qty:"",
    desc:"",
    price:""
  })

  const[quantity,setQuantity] = useState(1);

  // UseEffect
  useEffect(()=>{
      getProduct();
  },[]);

  useEffect(()=>{
         const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
         const myMidtransClientKey = "SB-Mid-client-GzKNSNXN6DWc-bq1";

         let scriptTag = document.createElement("script");
         scriptTag.src = midtransScriptUrl;

         scriptTag.setAttribute("data-client-key", myMidtransClientKey);

         document.body.appendChild(scriptTag);

         return () => {
          document.body.removeChild(scriptTag)
         }
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

  const buyProduct = async() => {
    try {
         const response =await api.post("/transaction",{
          idProduct : id,
          qty:quantity
         },{
          headers: {'Authorization':`Bearer ${token}`}
          });

          // token
          const snapToken = response.data.payment.token;

          window.snap.pay(snapToken , {
            onSuccess : (result) => {
              console.log(result);
              navigate("/myprofile")
            },
            onPending : (result) => {
              console.log(result);
              navigate("/myprofile")
            },

            onError : (result) => {
              console.log(result);

            },

            onClose : (result) => {
              alert("You closed without finishing the paycheck")
            }
          })



          
    } catch(err) {
 
      console.log(err)

    }
  }
  
  const decrementQty = () => {
      if(quantity === 1) {
        return ;
      }
      setQuantity(prev => prev - 1)
  };

  const incrementQty = () => {
       setQuantity(prev => prev + 1)
  };


  return (
    <StyledDetail>
          <img src={product.image} alt="cake"/>
          <div className="right-section">
                <span className="product-title">{product.title}</span>
                <p className="product-stock">Stock: {product.qty}</p>
                <p className="product-desc">
                   {product.desc}
                </p>

                <div className="product-details">
                    <div className="qty">
                         <span className="op min" onClick={decrementQty}>-</span>
                             <span className="number">{quantity}</span>
                         <span className="op plus" onClick={incrementQty}>+</span>
                    </div>
                    <div className="price">Rp. {product.price}</div>
                </div>
                

                <button onClick={buyProduct}>Buy</button>
          </div>
    </StyledDetail>

  )
}

export default Detail