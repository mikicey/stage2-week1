import { useState } from 'react';
import { StyledTable } from '../core-ui/Table.style';
import CategoryRow from '../components/CategoryRow';

 const Category = () => {
  const[categories,setCategories] = useState([
    {
    id:1,
    name:"Mouse"
  },
  {
    id:2,
    name:"Keyboard"
  },
  {
    id:3,
    name:"Bag"
  },
  {
    id:4,
    name:"Doll"
  },
]);
  const[isDeleting,setIsDeleting] = useState(false);




  return (
     <>
        <section className='list-category-section'>
              
              <b>List Category</b>

              <StyledTable>
              <thead>
                   <tr>
                        <th>No</th>
                        <th>Category Name</th>
                        <th>Action</th>
        
                   </tr>
              </thead>

              <tbody>
                   {
                    categories.map((category,index) => {
                        return <CategoryRow key={category.id} category={{...category,index}}  />
                    })
                   }
             </tbody>
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Category;