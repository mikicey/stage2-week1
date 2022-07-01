const CategoryRow = ({category}) => {
    const id = category.id;
  
    return (
      <tr className='table-body-rows'>
                          <td>{category.index + 1}</td>
                          <td>{category.name}</td>
                          <td className='btn-group'>
                              <button className='edit-btn' onClick={()=>{
                                console.log("clicked")
                              }}>Edit</button> 
                              <button className='delete-btn' >Delete</button>
                          </td>
      </tr>
    ) 
  }
  
  export default CategoryRow