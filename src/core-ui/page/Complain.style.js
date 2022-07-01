import styled from "styled-components";

export const StyledComplain = styled.section`

display: flex;
height: 100vh;


.chat-container{
    width:422px;
    height: 100%;
    overflow-y: scroll;
    /* border: 1px solid; */
}


.middle-line{
    position: absolute;
    left:460px;
    top:-68px;

    height: 110vh;
    width: 2px;
    background-color: #6A6A6A4D;

}

.chatbody{
    padding: 0 0 0 48px;
    flex:1;
    display: flex;
    flex-direction: column;

    .messages-container{
        flex:1;
        overflow-y:scroll;
        /* border: 1px solid wheat; */
    }

    form{
        width: 100%;
        border: 1px solid;
        
        input {
            outline: none;
            width:100%;
            height: 59px;
            font-size: 18px;
            background-color: #ABABAB26;
            padding: 0 32px;
            border: none;
        };
    }
}

// list




`