import styled from "styled-components";
import background from "../images/background.svg";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    margin-top: 150px;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 768px){
      margin-top: 50px;
    }
  }

  h2 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 70%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgb(35 55 80 / 30%) 0px 6px 12px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100px;
  margin: 20px;

  p{
    color: #2e3c57
    font-weight: bold;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  width: 30%;
  input {
    width: 80%;
    border-radius: 5px;
    border: 1px solid rgb(221, 221, 221);
    box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
    padding: 12px;
    appearance: none;
    outline: 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const SelectDiv = styled.div`
  width: 30%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  select {
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgb(221, 221, 221);
    box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
    padding: 12px;
    appearance: none;
    outline: 0;
    cursor: pointer;
  }
  &::after {
    content: "\\25BC";
    position: absolute;
    top: 15px;
    right: 0px;
    padding: 0 1em;
    cursor: pointer;
    pointer-events: none;
    transition: 0.25s all ease;
  }
  &:hover::after {
    color: rgb(221, 221, 221);
  }
`;

export const SwapDiv = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
    color: #51abcb;
    transition: 0.2s;

    &:hover {
      background-color: rgb(221, 221, 221);
    }
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const ResultContainer = styled.div`
  display: ${({isActive}) => ( isActive? "flex":"none")};
  flex-direction: column;
  p{
    color: #5c667b;
  }

  h6{
    font-size: 12px;
    color: #5c667b;
  }
  h2{
    margin-bottom: 24px;
    font-size: 48px;
    color: #2e3c57;

    @media screen and (max-width: 768px){
      font-size: 34px;
    }
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  button{
    padding: 10px 20px;
    font-weight: bold;
    font-size: 20px;
    background-color: #51abcb;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
      background-color: #3ba1c5;
    }
  }
`

export const ImageBackground = styled.div`
  z-index: -10;
  height: 65%;
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  position: absolute;
  filter: brightness(150%);
`;
