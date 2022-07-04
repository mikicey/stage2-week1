import { useState,useContext, useEffect } from 'react';
import { AppContext } from '../App';

import StyledProfile from '../core-ui/page/Profile.style';
import TransactionCard from "../components/TransactionCard";
import img from "../assets/profile.jpg";

const Profile = () => {
  const{user} = useContext(AppContext);

  const[transactions,setTransactions] = useState([
       {
        id:1,
        title:"Cake",
        day:"Saturday",
        date:"14 Juli 2021",
        price:"500.000",
        total: "500.000"
       },
       {
        id:2,
        title:"Cake",
        day:"Saturday",
        date:"14 Juli 2021",
        price:"500.000",
        total: "500.000"
       },
       {
        id:3,
        title:"Cake",
        day:"Saturday",
        date:"14 Juli 2021",
        price:"500.000",
        total: "500.000"
       },
       {
        id:4,
        title:"Cake",
        day:"Saturday",
        date:"14 Juli 2021",
        price:"500.000",
        total: "500.000"
       }
       ,  {
        id:5,
        title:"Cake",
        day:"Saturday",
        date:"14 Juli 2021",
        price:"500.000",
        total: "500.000"
       }
       
  ]);

  const[profile,setProfile] = useState({
     user_id: user.id,
     profile_img : "",
     gender : "",
     phone : "",
     address : ""
  });

  useEffect(()=>{
     const profiles = JSON.parse(localStorage.getItem("profiles"));

     const myProfileArr = profiles.filter(profile => profile.user_id === user.id);
     const myProfile = myProfileArr ? myProfileArr[0] : null;

     if(myProfile){
          setProfile(prev => {
               return {
                    ...prev, 
                    gender:myProfile.gender,
                    phone:myProfile.phone,
                    address:myProfile.address
               }
          })
     }
  },[])

  return (
    <StyledProfile>
           <div className='left'>
                <span className='title'>
                    My Profile
                </span>

                <div className='profile-details'>
                    <img className="profile-img" src={img}/>
                    <div className='profile-description'>
                         <b>Name</b>
                         <p>{user.username}</p>

                         <b>Email</b>
                         <p>{user.email}</p>

                         <b>Phone</b>
                         <p>{profile.phone? profile.phone : "-"}</p>

                         <b>Gender</b>
                         <p>{profile.gender? profile.gender : "-"}</p>
                         
                         <b>Address</b>
                         <p>{profile.address? profile.address : "-"}
                         </p>
                         
                    </div>
                </div>

           </div>


           <div className='right'>
                <span className='title'>
                   My Transaction
                </span>

                <div className='transaction-container'>
                      <div className='transaction-list'>
                          { transactions.map(transaction => <TransactionCard key={transaction.id} transaction={transaction} />) }
                      </div>
                </div>
           </div>

    </StyledProfile>
  )
}

export default Profile