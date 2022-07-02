
const ProductRow = ({product,navigate,setIsModal,setId}) => {
  const id = product.id;

  return (
    <tr className='table-body-rows'>
                        <td>{product.index + 1}</td>
                        <td>{product.photo}</td>
                        <td>{product.name}</td>
                        <td>{product.desc}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td className='btn-group'>
                            <button className='edit-btn' onClick={()=>{navigate(`/editproduct/${product.id}`)}}>Edit</button> 
                            <button className='delete-btn' onClick={()=>{setIsModal(true);setId(id)}} >Delete</button>
                        </td>
    </tr>
  ) 
}

export default ProductRow