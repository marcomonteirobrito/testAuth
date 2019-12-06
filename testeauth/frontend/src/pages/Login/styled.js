import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 35px;
    color: #7159c1;
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
    text-align: center;
    border-bottom-style: solid;
    border-bottom-color: #7159c1;
    border-bottom-width: 4px;
    border-radius: 4px;

`;


export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    flex-direction: column;

    input {
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    h2 {
        font-size: 25px;
        color: #7159c1;
        text-align: center;
    }
`;

export const SubmitButton = styled.button`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-top: 15px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    color: #fff;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

`;
