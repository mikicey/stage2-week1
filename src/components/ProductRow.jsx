import image from "../assets/profile.jpg";

const ProductRow = ({product,navigate,setIsModal,setId}) => {
  const id = product.product_id;

  return (
    <tr className='table-body-rows'>
                        <td>{product.index + 1}</td>
                        <td>{image}</td>
                        <td>{product.product_name}</td>
                        <td>{product.product_desc}</td>
                        <td>{product.price}</td>
                        <td>{product.product_qty}</td>
                        <td className='btn-group'>
                            <button className='edit-btn' onClick={()=>{navigate(`/editproduct/${id}`)}}>Edit</button> 
                            <button className='delete-btn' onClick={()=>{setIsModal(true);setId(id)}} >Delete</button>
                        </td>
    </tr>
  ) 
}

export default ProductRow