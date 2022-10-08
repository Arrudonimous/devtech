import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 30px auto;
  margin-top: 0px;
`

export const MarkContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 94px; 

  .card1{
    background: linear-gradient(180deg, #0C78D7 0%, #439DEC 53.65%, #0C78D7 100%);
    color: #fff;

    @media(max-width: 925px){
      margin-top: 54px;
    }

  }

  .card2{
    background: linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 53.65%, #FFFFFF 100%);
    span{
      color: #000;
    }
    small{
      color: #333;
    }
    @media(max-width: 925px){
      margin-top: 20px;
    }
  }

  
  .iconC1{
    background-color: rgba(253, 253, 253, 0.35);
  }
  
  .iconC2{
    background-color: rgba(186, 186, 186, 0.35);
  }

  @media(max-width: 925px){
    flex-direction: column;
    display: flex;
    padding: 38px 32px;
  }

`
export const MarkContent = styled.div`
  width: 440px;

  h1{
    display: block;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 24px;

    @media(max-width: 925px){
      font-size: 28px;
      display: flex;
    }
  }

  span{
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #353535;
    line-height: 24px;
    margin-bottom: 38px;

    @media(max-width: 925px){
      margin-bottom: 32px;
    }

  }

  @media(max-width: 925px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`
export const MarkCard = styled.div`
  width: 272px;
  height: 304.45px;   
  padding: 30px 26px;
  border-radius: 15px;
  

  & + &{
    margin-left: 8px;
  }



  span{
    font-weight: bold;
    display: block;
    margin-top: 20px;
    margin-bottom: 19px;
  }

`
export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  padding: 21px;

  .icon1{
    width: 37px;
    height: 37px;
    opacity: 1;
    color: #fff;
  }

  .icon2{
    width: 37px;
    height: 37px;
    opacity: 1;
    color: #fff;
  }
`