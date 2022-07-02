import { useState,useEffect} from "react";
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";


import Navbar from "./components/Navbar";

import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";
import Category from "./pages/Category";
import EditCategory from "./pages/EditCategory";




import Complain from "./pages/Complain";
import  Auth  from "./pages/Auth";
import Profile from "./pages/Profile";

import Home from "./pages/Home"
import Detail from "./pages/Detail"


function App() {
  const[user,setUser] = useState("");

  const[isLogin,setisLogin] = useState(false);
  const[isAdmin,setisAdmin] = useState(false);
  

  useEffect(()=>{

    if(user.isAdmin){
      isAdmin(true)
    } 

    if(user){
      setisLogin(true)
    } else {
      setisLogin(false);
      setisAdmin(false);
    }
  
   
  },[user]);

  
  
  
  return (
    <div className="App">
    <BrowserRouter>
       { isLogin && <Navbar  setUser={setUser} isAdmin={isAdmin}/> }
                                     
        <Routes>
            <Route path="/" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <Home/>  }/>
            <Route path="/detail/:id" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <Detail/>  }/>

            <Route path="/auth" element={isLogin ? <Navigate to="/product"/>: <Auth setUser={setUser}/>}/>

            <Route path="/product" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <Product/> }/>
            <Route path="/editproduct/:id" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <EditProduct/> }/>
            <Route path="/category" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <Category/> }/> 
            <Route path="/editcategory/:id" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <EditCategory/> }/>
            
            

            <Route path="/myprofile" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <Profile/>} />


            <Route path="/complain" element={!isLogin? <Navigate to="/auth"/> : <Complain/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
