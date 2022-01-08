import styled from "styled-components";


export const Container =  styled.div`
 p{
     font-size: 13px;
     color: #b8b8d4;

 }

 h1{
     margin: 0;
     padding: 0;
     font-size: 26px;
 }

 hr{
     height: 1px;
     border: 0;
     background-color: #16195c;
     margin: 30px 0;
 }

 label {
     font-size: 13px;

     input {
         display: block;
         margin-top: 7px;
         box-sizing: border-box;
         width: 100%;
         padding: 20px 10px;
         border: 2px solid #25cd89;
         border-radius: 10px;
         color: white;
         outline: 0;
         font-size: 15px;
         background-color: #02044a;
     }
 }

 button {
     background-color: #25cd89;
     color: white;
     font-size: 14px;
     font-weight: bold;
     padding: 20px 40px;
     border: 0;
     border-radius: 30px;
     cursor: pointer;
     margin-top: 30px;
 }

 @media (max-width:1000px){
    label {
        input {
         display: block;
         margin-top: 7px;
         box-sizing: border-box;
         width: 80%;
         padding: 15px 8px;
         border: 2px solid #25cd89;
         border-radius: 10px;
         color: white;
         outline: 0;
         font-size: 13px;
         background-color: #02044a;

        }
    }
}
@media ( max-width:700px){
    p{
     font-size: 12px;
 }

 h1{
     font-size: 18px;
 }

 button {
     font-size: 12px;
     padding: 15px 25px;
     margin-top: 30px;
    
 }


}


`;