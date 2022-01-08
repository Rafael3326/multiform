import styled from "styled-components";




export const Container = styled.div`
padding: 25px 0;
border-bottom:  1px solid #16195c;
    
    h1{
        margin: 0;
        padding: 0;
        font-size: 28px;
    }

    p{
        font-size: 14px;
        color:#b8b8d4;
        
    }

    @media ( max-width:1000px){
        padding: 15px 0; 
        margin-top: 40px;
        margin-bottom: 20px;
    h1{
        margin-left: 30px;
        padding: 0;
        font-size: 22px;
    }

    p{
        font-size: 13px;
        color:#b8b8d4;
        margin-left: 30px;
        
    }

    }
`;