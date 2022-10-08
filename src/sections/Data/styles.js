import styled from 'styled-components';


export const DataBackground = styled.div`
  background-color: #F6F7F9;
  width: 100%;
`

export const DataContainer = styled.div`
  display: flex;
  padding: 94px 250px;
  justify-content: space-between;

  @media(max-width: 925px){
    flex-direction: column;
    padding: 47px 0px;
  }
`

export const DataInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1{
    font-size: 42px;
  }

  span{
    font-size: 22px;
    font-weight: 500;
    color: #353535; 
  }

  @media(max-width: 925px){
    margin-bottom: 46px;
  }
`