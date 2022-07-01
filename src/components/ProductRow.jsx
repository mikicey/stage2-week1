
const ProductRow = ({product,setEdit,deleteRow}) => {
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
                            <button className='edit-btn'>Edit</button> 
                            <button className='delete-btn' >Delete</button>
                        </td>
    </tr>
  ) // onClick={setEdit(id)}
  //onClick={deleteRow(id)} 
}

export default ProductRow