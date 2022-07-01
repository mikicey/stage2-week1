import styled from "styled-components";

export const StyledHeader = styled.header`

.container.nav{
         max-width: 1600px;
         height: 80px;

         margin: 0 auto;
         padding: 0 48px;

         display: flex;
         align-items: center;
         justify-content: space-between;

         color:white;

         .right{
            display: flex;
            align-items: center;
         }

         p{
             margin-left: 24px;
             cursor: pointer;
             transition: 150ms ease;
         }

         .active {
            color: #F74D4D;
;
         }
}

`