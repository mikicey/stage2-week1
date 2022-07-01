import { useState } from 'react';
import StyledProfile from '../core-ui/page/Profile.style';
import TransactionCard from "../components/TransactionCard";
import img from "../assets/profile.jpg";

const Profile = () => {
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
                         <p>Chris</p>

                         <b>Email</b>
                         <p>chris@gmail.com</p>

                         <b>Phone</b>
                         <p>082214314102</p>

                         <b>Gender</b>
                         <p>Male</p>
                         
                         <b>Address</b>
                         <p>Lorem Ipsum is simply dummy text of the printing and 
                         typesetting industry. 
                         Lorem Ipsum has been the industry's 
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