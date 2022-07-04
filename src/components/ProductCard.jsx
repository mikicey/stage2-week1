import React from 'react'
import image from "../assets/cake.jpg"
import  StyledProductCard  from '../core-ui/ProductCard.style'

const ProductCard = ({product,navigate}) => {
  const id = product.product_id;

  return (
    <StyledProductCard>
          <div onClick={()=>{navigate(`/detail/${id}`)}}>
          <img src={image} />
          <span>{product.product_name}</span>
          <p>Rp{product.price}</p>
          <p>Stock: {product.product_qty}</p>
          </div>
    </StyledProductCard>
  )
}

export default ProductCard