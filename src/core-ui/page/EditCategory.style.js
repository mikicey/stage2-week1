import styled from "styled-components";

 const StyledEditCategory = styled.section`
  b{
   font-size: 24px;
  }

  form{
    margin-top:48px;

    .form-control{
            overflow-x: hidden;
            position: relative;
            margin-bottom: 32px;
            border: 1px solid #D2D2D240;
            border-radius: 5px;
            
            input{
               
                padding: 12px;
                width: 100%;
                background-color:#BCBCBC;
                color: #555555;
                font-size:18px;
            }}

    button{
        margin-top: 70px;
        width: 100%;
        background: #56C05A;
        font-size: 18px;
        padding: 12px;
        &:hover{
            scale: 1;
        }
    }
  }
`;

export default StyledEditCategory;