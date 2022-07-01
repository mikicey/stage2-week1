import styled from "styled-components";

 const StyledDetail = styled.section`
    
    display: flex;
    justify-content: center;

    img{
        width:436px;
        height: 555px;
        object-fit: cover;
        margin-right:54px;
    }

    .right-section{
        max-width: 544px;
        padding-top: 64px;

        span{
            margin-top: 32px;
            font-size: 48px;
            color: #F74D4D;
            font-weight: bold;
        }

        P{
            margin: 4px 0 36px 0;
        }

        ul{
            margin-bottom: 36px;
            margin-left:12px;
        }

        .price{
            text-align: end;
            font-weight: bold;
            color: #F74D4D;
            font-size: 24px;
        }

        button{
            margin-top: 8px;
            width: 100%;
            border-radius: 5px;
            background-color: #F74D4D;

            font-size: 18px;
        }

    }
 `

 export default StyledDetail;