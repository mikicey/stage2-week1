import styled from "styled-components";

const StyledChatPerson = styled.div`
display: flex;
align-items: center;
font-size: 14px;
margin-bottom: 32px;
padding: 12px;
cursor: pointer;
transition: 150ms;

&:hover{
    background-color: #000;
}

img{
    margin-right: 24px;
    width: 50px;
    height: 50px;
    border-radius: 100vh;
    object-fit: cover;
}

div{
    span{
        font-weight: bold;
        margin-bottom:8px;
    }

    p{
        color: #ABABAB;
;
    }
}

`

export default StyledChatPerson;