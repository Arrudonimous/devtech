import styled from 'styled-components';

export const BudgetContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 0;
  align-items: center;
  flex-direction: column;

  h1{
    font-size: 32px;
    margin-bottom: 6px;

    @media(max-width: 925px){
      margin-bottom: 22px;
    }
  }

  span{
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 64px;

    @media(max-width: 925px){
      margin-bottom: 30px;
    }
  }

  @media(max-width: 925px){
    padding: 47px 66px;
  }
`;

export const BudgetForm = styled.div`
  padding: 50px 74px;
  background-color: #F6F7F9;
  width: 560px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;

  @media(max-width: 925px){
    width: 100%;
    padding: 0;
    background-color: #fff;
  }

`;

export const Input = styled.input`
  padding: 9px 13px;
  width: 100%;
  height: 42px;
  border: 1px solid #BBBBBB;
  outline: 0;
  border-radius: 8px;
  font-family: Inter, sans-serif;
  margin-bottom: 26px;



  &::placeholder{
    color: #ccc;
  }

  @media(max-width: 925px){
    width: 100%;
  }

`;
