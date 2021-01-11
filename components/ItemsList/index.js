import React from "react";
import { formatPrice } from "../../utils/format";

import * as S from "./styles";

function ItemList({ img, name, price }) {
  return (
    <S.Container>
      <S.CurrImage src={img} />
      <S.TextContainer>
        <S.CurrName>{name}</S.CurrName>

        <S.CurrPrice>{formatPrice(price)}</S.CurrPrice>
      </S.TextContainer>
    </S.Container>
  );
}

export default ItemList;
