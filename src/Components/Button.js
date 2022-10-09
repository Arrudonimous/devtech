import styled from 'styled-components';

export default styled.button`
  padding: 12px 32px;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #248DE9;
  border-radius: 8px;
  text-decoration: none;
  border:none;
  color: #fff;
  transition: transform 0.2s ease-in;

  &:hover{
    background-color: #5babf0;
    cursor: pointer;
    transform: scale(1.03)
  }

  &:active{
    background-color: #1579d1;
  }
`;
