import styled from "styled-components";

const StyledChatMsg = styled.div`
display: flex;
align-items: center;
justify-content: ${(props)=> props.isMe ? "flex-end" : "flex-start" };
margin-bottom: 50px;
padding-right: 24px;


img{
    width: 50px;
    height: 50px;
    border-radius: 100vh;
    object-fit: cover;
    margin-right: 40px;
}

.msg-body{
    position:relative;
    background-color:${(props)=>props.isMe? "#262626" : "#575757"};
    padding: 8px 16px;
    color: white;
    border-radius: 6px;
    min-width: 200px;
    max-width: 300px;
    min-height: 40px;

   

    .triangle{
        background-color:${(props)=>props.isMe? "#262626" : "#575757"};
        position: absolute;
        left: ${(props)=>props.isMe ? "100%" : "-8px"};
        top: calc(50% - 4px);
        width: 10px;
        height: 10px;
        transform: ${(props)=>props.isMe ? "rotate(180deg)" : "rotate(0deg)"};
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
    }

    p{
        word-break: break-all;
        
    }

    .msg-time{
        position: absolute;
        bottom: 160%;
        width: 300px;
        font-size:12px;
    }

}
`

export default StyledChatMsg;