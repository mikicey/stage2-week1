import React from 'react'
import StyledTransactionCard from '../core-ui/TransactionCard.style'
import logo from "../assets/dumbmerch-logo.svg"
import image from "../assets/cake.jpg"


const TransactionCard = ({transaction}) => {
  return (
      <StyledTransactionCard>
           <img className='transaction-img' src={image} alt=''/>
           <div className='transaction-description'>
                <b>{transaction.title}</b>
                <span className='time'><b>{transaction.day}</b>, {transaction.date}</span>
                <p>Price: Rp.{transaction.price}</p>
                <b className='total'>Sub Total:{transaction.total}</b>
           </div>
           <img src={logo} />
      </StyledTransactionCard>
  )
}

export default TransactionCard