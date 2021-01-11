import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: white;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const CurrImage = styled.img`
  width: 210px;
`;

export const CurrName = styled.text`
  color: #000;
  font-size: 18px;
  text-align: center;
`;

export const CurrPrice = styled.text`
  font-size: 24px;
  font-weight: 500;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
