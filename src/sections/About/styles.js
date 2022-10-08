import styled from 'styled-components';


export const AboutContainer = styled.div`
  background-color: #F6F7F9;
  padding: 70px 256px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 42px;
    letter-spacing: 0.3rem;
    margin-bottom: 24px;

    @media(max-width: 925px){
      font-size: 32px;
    }
  }

  span{
    font-size: 16px;
    font-weight: 500;
    & + span{
      margin-top: 14px;

      @media(max-width: 925px){
        display: none;
      }

    }
    @media(max-width: 925px){
      font-size: 14px;
    }
  }

  @media(max-width: 925px){
    padding: 63px 42px;
  }

`