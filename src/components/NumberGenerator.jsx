import React, { useState } from 'react';
import useGenerateNumbers from '../hooks/useGenerateNumbers';
import LottoNumbersList from './LottoNumbersList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Row from './Row'
import Column from './Column';

export const LOTTTERY_NAMES = {
    megamillions: 'Mega Millions',
    powerball: 'Powerball',
}

const NumberGenerator = () => {
    const [lotteryName, setLotteryName] = useState(LOTTTERY_NAMES.megamillions)
    const [oddNumbersCount, setOddNumbersCount] = useState(2)
    const [isMegaballEven, setIsMegaballEven] = useState(false)
    const [lotteryNumbers, setLotteryNumbers] = useState(null)
    const [numberOfGames, setNumberOfGames] = useState(5)
    const [showNumberSettings, setShowNumberSettings] = useState(false)
    const { generateNumbers } = useGenerateNumbers()

    const renderNumberOfGamesSelect = () => {
      return (
        <span>
          Games Number:
          <select onChange={(e) => setNumberOfGames(e.target.value)}>
            <option value="1" selected={numberOfGames === 1}>1</option>
            <option value="5" selected={numberOfGames === 5}>5</option>
            <option value="10" selected={numberOfGames === 10}>10</option>
          </select>
        </span>
      )
    }

    const renderLotterySelect = () => {
      return (
        <span>
          <label>
            <input
              type={'radio'}
              name={'lotter_name'}
              value={LOTTTERY_NAMES.megamillions}
              checked={lotteryName === LOTTTERY_NAMES.megamillions}
              onChange={() => setLotteryName(LOTTTERY_NAMES.megamillions)}
            />
            {LOTTTERY_NAMES.megamillions}
          </label>
          <label>
            <input
              type={'radio'}
              name={'lottery_name'}
              value={LOTTTERY_NAMES.powerball}
              checked={lotteryName === LOTTTERY_NAMES.powerball}
              onChange={() => setLotteryName(LOTTTERY_NAMES.powerball)}
            />
            {LOTTTERY_NAMES.powerball}
          </label>
        </span>
      )
    }

    const renderWhiteBallRatio = () => {
      return (
        <span>
          Whiteball Ratio:&nbsp;
          <input
            type="range"
            min="0"
            max="5"
            value={oddNumbersCount}
            onChange={handleOddNumbersChange}
            className="slider"
          />
          &nbsp;{oddNumbersCount} : {5 - oddNumbersCount} (Odd/Even)
        </span>
      )
    }

    const renderMegaballSettings = () => {
      return (
        <span>
          Megaball:
          <input
            type={'radio'}
            name={'megaball'}
            value={true}
            checked={isMegaballEven === true}
            onChange={() => setIsMegaballEven(true)}
          />
          Even
          <input
            type={'radio'}
            name={'megaball'}
            value={false}
            checked={isMegaballEven === false}
            onChange={() => setIsMegaballEven(false)}
          />
          Odd
        </span>
      )
    }

    const handleButtonClick = () => {
      const result = []
      for (let i = 0; i < numberOfGames; i++) {
        result.push(generateNumbers(lotteryName, oddNumbersCount, isMegaballEven))
      }
      setLotteryNumbers(result)
    }

    const handleOddNumbersChange = (e) => {
      const value = e.target.value
      setOddNumbersCount(value)
    }

    const toggleShowNumbersSettings = () => {
      setShowNumberSettings(!showNumberSettings)
    }

    return (
      <div className='number-generator'>
        <h1>Lottery Number Generator</h1>
        <Row>{ renderLotterySelect() }</Row>
        <Row>{ renderNumberOfGamesSelect() }</Row>
        <Column>
          <div className="number-setting-button" onClick={toggleShowNumbersSettings}>
            Show Numbers Setting&nbsp;
            {showNumberSettings ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </div>
          { showNumberSettings  && <Row>{ renderWhiteBallRatio() }</Row> }
          { showNumberSettings  && <Row>{ renderMegaballSettings() }</Row> }
        </Column>  
        <button onClick={handleButtonClick}>Generate</button>  
        {lotteryNumbers  && <LottoNumbersList lottoNumbers={lotteryNumbers} />}
      </div>
    )
}

export default NumberGenerator