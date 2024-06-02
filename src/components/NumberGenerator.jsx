import React, { useState } from 'react';
import useGenerateNumbers from '../hooks/useGenerateNumbers';

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

    const renderNumbersList = () => {
      if (lotteryNumbers === null) return;

      return (
        <div>
          {
            lotteryNumbers.map(element => {
              return <p>{`Numbers: ${element.numbers.toString()} Megaball: ${element.megaball}`}</p>
            })
          }
        </div>
      )
    }

    return (
      <div>
        <h1>Lottery Number Generator</h1>
        <input
          type={'radio'}
          name={'lotter_name'}
          value={LOTTTERY_NAMES.megamillions}
          checked={lotteryName === LOTTTERY_NAMES.megamillions}
          onChange={() => setLotteryName(LOTTTERY_NAMES.megamillions)}
        />
        {LOTTTERY_NAMES.megamillions}
        <input
          type={'radio'}
          name={'lottery_name'}
          value={LOTTTERY_NAMES.powerball}
          checked={lotteryName === LOTTTERY_NAMES.powerball}
          onChange={() => setLotteryName(LOTTTERY_NAMES.powerball)}
        />
        {LOTTTERY_NAMES.powerball}
        <p>Games Number: {renderDropdown()}</p>
        <button onClick={handleButtonClick}>Generate</button>
        { renderNumbersList() }
      </div>
    )
}

export default NumberGenerator