import React from 'react'

const LottoNumber = ({number, megaball = false}) => {
  return (
    <div className={`lotto_number ${megaball ? 'megaball' : ''}`}>
      {number}
    </div>
  )
}

export default LottoNumber;