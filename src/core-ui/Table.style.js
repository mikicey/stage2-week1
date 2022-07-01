import styled from "styled-components";

export const StyledTable = styled.table`


width: 100%;
margin-top: 48px;
border-collapse: separate;

   thead tr{
        background-color:#303030;
        
        th{
        padding: 8px;
         }
   }

   .table-body-rows{
    background-color:#232323;
    text-align: center;
    
     
    td{
        padding: 8px;
    }

   }

   .table-body-rows:nth-child(even){
    background-color:#303030;
   }


`