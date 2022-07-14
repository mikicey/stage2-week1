import { useState,useEffect,createContext,useLayoutEffect} from "react";
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";


import Navbar from "./components/Navbar";

import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";

import AddCategory from "./pages/AddCategory";
import Category from "./pages/Category";
import EditCategory from "./pages/EditCategory";


import SearchUser from "./pages/SearchUser";
import Complain from "./pages/Complain";
import  Auth  from "./pages/Auth";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

import Home from "./pages/Home"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"

import {api} from "./connection";



export const AppContext = createContext(null);


function App() {
  // States
  const[user,setUser] = useState("");
  const[token,setToken] = useState(null);

  const[isLogin,setisLogin] = useState(false);
  const[isAdmin,setisAdmin] = useState(false);
  
  // useEffects
  useEffect(()=>{

    if(user.isAdmin){
      setisAdmin(true)
    } 

    if(user){
      setisLogin(true);
      setToken(user.token);
      localStorage.setItem("token",user.token)
      
    } else {
      setisLogin(false);
      setisAdmin(false);
      setToken(null);
    }

    
  
   
  },[user]);

  useLayoutEffect(()=>{
    const token = localStorage.getItem("token");
    

    if(token){

      const getUser = async() => {

        try {
        const res = await api.post("/decode",{token});
        const payload = res.data;
        const user = payload.data.user;
        

        setUser(user);
        

        } catch(err) {

         return console.log(err)

        };


      };

      
         getUser();
      

    }
    
  },[])

  return (
    <div className="App">

    <AppContext.Provider value={{user,token}}>
    <BrowserRouter>
       { isLogin && <Navbar  setUser={setUser} isAdmin={isAdmin}/> }
                                     
        <Routes>
            <Route path="/" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <Home/>  }/>
            <Route path="/detail/:id" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <Detail/>  }/>

            <Route path="/auth" element={isLogin ? <Navigate to="/product"/>: <Auth setUser={setUser}/>}/>

            <Route path="/product" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <Product/> }/>
            <Route path="/editproduct/:id" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <EditProduct/> }/>
            <Route path="/addproduct" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <AddProduct/> }/>

            <Route path="/category" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <Category/> }/> 
            <Route path="/editcategory/:id" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <EditCategory/> }/>
            <Route path="/addcategory" element={!isLogin?  <Navigate to="/auth"/> : !isAdmin? <Navigate to="/"/> : <AddCategory/> }/>
            
            

            <Route path="/myprofile" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <Profile/>} />
            <Route path="/editprofile" element={!isLogin ? <Navigate to="/auth"/> : isAdmin ? <Navigate to="/product"/> : <EditProfile/>} />


            <Route path="/complain/:id" element={!isLogin? <Navigate to="/auth"/> : <Complain/>}/>
            <Route path="/searchuser" element={!isLogin? <Navigate to="/auth"/> : <SearchUser/>}/>

            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
    
    </div>
  );
}

export default App;
