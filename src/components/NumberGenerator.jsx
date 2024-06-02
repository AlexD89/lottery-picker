import React, { useState } from 'react';
import useGenerateNumbers from '../hooks/useGenerateNumbers';
import LottoNumbersList from './LottoNumbersList';

export const LOTTTERY_NAMES = {
    megamillions: 'Mega Millions',
    powerball: 'Powerball',
}

const NumberGenerator = () => {
    const [lotteryName, setLotteryName] = useState(LOTTTERY_NAMES.megamillions)
    const [lotteryNumbers, setLotteryNumbers] = useState(null)
    const [numberOfGames, setNumberOfGames] = useState(1)
    const { generateNumbers } = useGenerateNumbers()

    const renderDropdown = () => {
      return (
        <select onChange={(e) => setNumberOfGames(e.target.value)}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      )
    }

    const handleButtonClick = () => {
      const result = []
      for (let i = 0; i < numberOfGames; i++) {
        result.push(generateNumbers(lotteryName))
      }
      setLotteryNumbers(result)
    }

    return (
      <div className='number-generator'>
        <h1>Lottery Number Generator</h1>
        <input
          type={'radio'}
          name={'lotter_name'}
          value={LOTTTERY_NAMES.megamillions}
          checked={lotteryName === LOTTTERY_NAMES.megamillions}
          onChange={() => setLotteryName(LOTTTERY_NAMES.megamillions)}
        />
        <span>
          {LOTTTERY_NAMES.megamillions}
        </span>
        <input
          type={'radio'}
          name={'lottery_name'}
          value={LOTTTERY_NAMES.powerball}
          checked={lotteryName === LOTTTERY_NAMES.powerball}
          onChange={() => setLotteryName(LOTTTERY_NAMES.powerball)}
        />
        <span>
          {LOTTTERY_NAMES.powerball}
        </span>
        <span>
          <p>Games Number: {renderDropdown()}</p>
        </span>
        <button onClick={handleButtonClick}>Generate</button>  
        {lotteryNumbers  && <LottoNumbersList lottoNumbers={lotteryNumbers} />}
      </div>
    )
}

export default NumberGenerator