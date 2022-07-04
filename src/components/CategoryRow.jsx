const CategoryRow = ({category,navigate,setIsModal,setId}) => {
    const id = category.category_id;
  
    return (
      <tr className='table-body-rows'>
                          <td>{category.index + 1}</td>
                          <td>{category.category_name}</td>
                          <td className='btn-group'>
                          <button className='edit-btn' onClick={()=>{navigate(`/editcategory/${id}`)}}>Edit</button> 
                            <button className='delete-btn' onClick={()=>{setIsModal(true);setId(id)}} >Delete</button>
                          </td>
      </tr>
    ) 
  }
  
  export default CategoryRow