import { useState,useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {AppContext} from "../App";

import { StyledTable } from '../core-ui/Table.style';
import CategoryRow from '../components/CategoryRow';
import Modal from "../components/Modal";
import {overlay} from "../constants/index"

 const Category = () => {
  const {user} = useContext(AppContext);

  const[categories,setCategories] = useState([]);
  const[isModal,setIsModal] = useState(false);
  const[idToDelete, setIdToDelete] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
      getCategories();
  },[]);

  function getCategories(){
    const categoriesArray = JSON.parse(localStorage.getItem("categories"));
    setCategories(categoriesArray);

  }

  function deleteRow(id){
    // setCategories(prev => {
    //      const newList = prev.filter(item => item.id !== id);
    //      return newList;
    // })

    const categoriesArray = JSON.parse(localStorage.getItem("categories"));
    const newCategories = categoriesArray.filter(cat => cat.category_id !== id);

    localStorage.setItem("categories", JSON.stringify(newCategories));
    getCategories();
};

if(categories.length === 0){
  return (<div>Fetching Data</div>)
 }



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
                        return <CategoryRow key={category.category_id} category={{...category,index}} navigate={navigate} setIsModal={setIsModal} setId={setIdToDelete} />
                    })
                   }
             </tbody>
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Category;