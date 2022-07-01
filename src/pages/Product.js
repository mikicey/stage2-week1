import { useState } from 'react'
import { StyledTable } from '../core-ui/Table.style'
import ProductRow from '../components/ProductRow'

const Product = () => {
    const[products,setProducts] = useState([
        {
            id:1000,
            photo:"Mouse.jpg",
            name:"Mouse",
            desc:"Lorem ipsum mouse...",
            price:500.000,
            qty:60,
        },
        {
            id:1001,
            photo:"House.jpg",
            name:"Mouse",
            desc:"Lorem ipsum house...",
            price:525.000,
            qty:0,
        },
        {
            id:1002,
            photo:"Cat.jpg",
            name:"Mouse",
            desc:"Lorem ipsum cat...",
            price:100.000,
            qty:60,
        },
        {
            id:1003,
            photo:"Snake.jpg",
            name:"Mouse",
            desc:"Lorem ipsum snake...",
            price:200.000,
            qty:70,
        },
        {
            id:1004,
            photo:"Life.jpg",
            name:"Mouse",
            desc:"Lorem ipsum life...",
            price:300.000,
            qty:600,
        },
        {
            id:1005,
            photo:"Jump.jpg",
            name:"Mouse",
            desc:"Lorem ipsum jump...",
            price:555.000,
            qty:900,
        }
    ])
    const[isEditing,setIsEditing] = useState(false);

    function deleteRow(id){
        setProducts(prev => {
             const newList = prev.filter(item => item.id !== id);
             return newList;
        })
    };
  
    function editRow(id){
          setIsEditing(!isEditing);
    };

  return (
    <>
        <section className='list-product-section'>
              
              <b>List Product</b>

              <StyledTable>
              <thead>
                   <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                   </tr>
              </thead>

              <tbody>
                   {
                    products.map((product,index) => {
                        return <ProductRow key={product.id} product={{...product,index}} setEdit={editRow} deleteRow={deleteRow} />
                    })
                   }
             </tbody>
                   
              </StyledTable>
              

        </section>
    </>
  )
}

export default Product