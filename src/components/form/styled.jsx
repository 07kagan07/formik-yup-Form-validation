import { Field, Form,ErrorMessage } from "formik";
import styled,{keyframes} from 'styled-components';

export const FormContainer = styled.div`
    max-width: 500px;
    margin: 50px auto;
    border: 1px solid #ccc;
    padding: 40px 20px;
    border-radius: 5px;
    `

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    `

export const StepWrap= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    `;

export const FieldWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `;

export const StyledField = styled(Field)`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    `

export const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-top: 20px;
    `

export const Button = styled.button`
    border-radius: 5px;
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    font-weight: 700;
    padding: 10px 0;
    width: 100%;
    cursor: pointer;

    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
    `
const fadeIn = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
    `;


export const Error = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
    padding: 5px 0;
    animation: error 0.5s ease-in-out;
    animation: ${fadeIn} 1s ease-in-out infinite;
    `

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding-bottom: 40px;
    `
export const Step = styled.button`
    width:51px;
    height:51px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: ${props=>props.success==="true"?"#01c241":"#fff"};
    color: ${props=>props.success==="true"?"#fff":"#333"};
    transition: all 0.3s ease-in-out;
    `;
