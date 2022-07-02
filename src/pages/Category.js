import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledTable } from '../core-ui/Table.style';
import CategoryRow from '../components/CategoryRow';
import Modal from "../components/Modal";
import {overlay} from "../constants/index"

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
  const[isModal,setIsModal] = useState(false);
  const[idToDelete, setIdToDelete] = useState("");

  const navigate = useNavigate();

  function deleteRow(id){
    setCategories(prev => {
         const newList = prev.filter(item => item.id !== id);
         return newList;
    })
};



  return (
     <>
        <section className='list-category-section' style={{padding:"80px 84px"}}>
        {isModal? <Modal id={idToDelete} deleteRow={deleteRow} setIsModal={setIsModal}/> : ""}
        {isModal? <div style={overlay}></div> : ""}
        
              <b style={{fontSize:"24px"}}>List Category</b>

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
                        return <CategoryRow key={category.id} category={{...category,index}} navigate={navigate} setIsModal={setIsModal} setId={setIdToDelete} />
                    })
                   }
             </tbody>
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Category;