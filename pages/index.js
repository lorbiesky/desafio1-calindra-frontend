import React, { useState, useEffect } from "react";

import { useProducts } from "../hooks/products";
import ItemList from "../components/ItemsList";
import * as S from "../styles/home";

function Home() {
  const [search, setSearch] = useState("");
  const [currItems, setItems] = useState();
  const { response, setResponse, getBySearch } = useProducts();

  const handleSearch = (params) => {
    getBySearch(params);
  };

  useEffect(() => {
    if (response) {
      setItems(response);
      setResponse();
    }
  }, [response]);

  return (
    <S.Container>
      <S.MainLogoImage src="/assets/MainLogo.png" />
      <S.SearchContainer>
        <S.SearchBox
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={(item) => (item.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Pesquisar")}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearch(search);
            }
          }}
        />

        <S.SearchButton>
          <S.ButtonText onClick={() => handleSearch(search)}>
            Pesquisar
          </S.ButtonText>
        </S.SearchButton>
      </S.SearchContainer>

      <S.ItemsContainer>
        {currItems &&
          currItems.map((item, index) => {
            return (
              <ItemList
                key={index}
                img={item.urlImage}
                name={item.name}
                price={item.price}
              />
            );
          })}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default Home;
