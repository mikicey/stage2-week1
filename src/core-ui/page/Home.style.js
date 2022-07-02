import styled from "styled-components";

 const StyledHome = styled.section`

  padding-right: 84px;
  padding-left: 84px;
 
 .title{
    font-family: AvenirBold;
    color: #F74D4D;
    font-size: 24px;
    text-align: center;
    width: 1005;
 }
 
 .products{
    margin:0 auto;
    margin-top: 32px;
    display: grid;
    grid-gap: 24px;
    width: 100%;

    justify-content: center;

    
    grid-template-columns: repeat(auto-fit,minmax(240px,20%));
    
    
     }
 
 `

 export default StyledHome;