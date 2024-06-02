import React from "react";
import LottoNumber from "./LottoNumber";

const LottoNumbersListRow = ({lottoNumbers}) => {
  return (
    <div className={'lottery-numbers-row'}>
      {
        lottoNumbers.numbers.map(number => (
          <LottoNumber
            key={number}
            number={number} />
        ))}
      <LottoNumber number={lottoNumbers.megaball} megaball={true} />
    </div>
  )
}

export default LottoNumbersListRow;