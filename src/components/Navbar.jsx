import { useNavigate } from 'react-router-dom';
import { StyledHeader } from '../core-ui/Header.style';
import logo from "../assets/dumbmerch-logo.svg"

// <p onClick={navigate("/complain")}>Complain</p>
// <p onClick={navigate("/category")}>Category</p>
// <p onClick={navigate("/product")}>Product </p> 

const Navbar = ({isAdmin,setisLogin}) => {

  let navigate = useNavigate();
 

  return (
    <StyledHeader>
        <nav className='container nav'>
            <img src={logo} style={{width:"70px"}}/>
            
            <div className='right'>
                <p className='active'>Complain</p>
                {isAdmin ? <p>Product</p> : <> <p>Profile</p> <p>Category</p> </>}
                
                
                <p onClick={()=>{setisLogin(false)}}>Logout</p>
            </div>
            
        </nav>
    </StyledHeader>
  )
}

export default Navbar