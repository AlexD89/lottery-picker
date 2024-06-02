import React from "react";
import LottoNumbersListRow from "./LottoNumbersListRow";

const LottoNumbersList = ({lottoNumbers}) => {
  return (
    <div>
      {
        lottoNumbers.map(element => {
          return <LottoNumbersListRow
            key={`${element.numbers.toString()}-${element.megaball.toString()}`}
            lottoNumbers={element}
          />
        })
      }
    </div>
  )
}

export default LottoNumbersList;