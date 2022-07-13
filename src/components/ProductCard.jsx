import React from 'react'
import  StyledProductCard  from '../core-ui/ProductCard.style'

const ProductCard = ({product,navigate}) => {
  const id = product.id;

  return (
    <StyledProductCard>
          <div onClick={()=>{navigate(`/detail/${id}`)}}>
          <img src={product.image} />
          <span>{product.title}</span>
          <p>Rp{product.price}</p>
          <p>Stock: {product.qty}</p>
          </div>
    </StyledProductCard>
  )
}

export default ProductCard