import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }

  body{
    background: #fff;
    color: #000;
    font-size: 16px;
  }

  button{
    cursor: pointer;
  }

`;
