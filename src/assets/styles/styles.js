import styled from 'styled-components';

export const Title = styled.h1`
    
   font-size: 30px;
    background-color: blue;
   span{
       flex-direction: row;
       float: right;
       margin-right: 10px;

       dt{
        font-size: 20px;
        }
   }

   dt{
       font-size: 20px;
   }
`;

export const Details = styled.p`
    font-size: 20px;
`;

export const Container = styled.li`
     font-family: 'Roboto', sans-serif;
`;

export const List = styled.ul`
    color: white;
    margin-top: 100px;
    margin-left: 300px;
    background-color: blue;
`;
