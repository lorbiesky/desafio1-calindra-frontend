import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/window_sizes";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainLogoImage = styled.img`
  width: 400px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SearchBox = styled.input`
  z-index: 2;
  width: 400px;
  height: 60px;
  border: none;
  padding: 0 20px;
  font-size: 18px;
  border-radius: 10px;
  background-color: white;

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #692222;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ButtonText = styled.text`
  color: white;
  font-size: 22px;
  font-weight: 300;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto;
  }
`;
