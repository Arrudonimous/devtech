import styled from 'styled-components';

export const Container = styled.header`
  background-color: #151F35;
  color: #fff;
  width: 100%;
  height: 670px;
  justify-content: center;
  align-items: center;
  padding: 30px 166px;

  @media(max-width: 925px){
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    padding: 43px;
  }

`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: color 0.2s ease-in;
  a{
    text-decoration: none;
    color: #fff;
    margin-left: 100px;

    & + a{
      margin-left: 35px;
    }

    &:hover{
      color: #F6F6F6;
      transform: scale(1.05);
      cursor: pointer;
    }

    @media(max-width: 925px){
      display: none;
    }
  }

`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img{
    width: 30px;
    height: 28px;
  }

  span{
    font-size: 22px;
    margin-left:  6px;
    font-weight: bold;

    @media(max-width: 925px){
      font-size: 30px;
    }
  }
`

export const Line = styled.div`
  width: 100%;
  height: 0.1px;
  opacity: 60%;
  margin-top: 18px;
  background-color: #F8F4F4;

  @media(max-width: 925px){
    display: none;
  }
`

export const HeaderContainer = styled.div`
  margin-top: 85px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  img{
    width: 40%;
    
    @media(max-width: 925px){
      width: 100%;
      margin-top: 48px;
    }
  }

  
    @media(max-width: 925px){
      margin-top: 54px;
      flex-direction: column;
    }
`

export const HeaderContent = styled.div`
  width: 40%;

  h1{
    display: block;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 34px;

    @media(max-width: 925px){
      font-size: 28px;
    }

  }

  span{
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #DEDEDE;
    line-height: 24px;
    margin-bottom: 34px;

    @media(max-width: 925px){
      display: none;
    }
  }

  @media(max-width: 925px){
    display: flex;
    width: 100%;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
  }
`


