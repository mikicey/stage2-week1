import React from 'react'
import image from "../assets/cake.jpg"
import  StyledProductCard  from '../core-ui/ProductCard.style'

const ProductCard = ({product,navigate}) => {
  const id = product.id;

  return (
    <StyledProductCard>
          <div onClick={()=>{navigate(`/detail/${id}`)}}>
          <img src={image} />
          <span>{product.title}</span>
          <p>Rp{product.price}.000</p>
          <p>Stock: {product.stock}</p>
          </div>
    </StyledProductCard>
  )
}

export default ProductCard