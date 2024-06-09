import React from "react";
import { range, sample } from 'lodash';
import { LOTTTERY_NAMES } from "../components/NumberGenerator";

const MEGAMILLIONS_NUMBERS = range(1,70)
const POWERBALL_NUMBERS = range(1,69)

const MEGAMILLIONS_MEGABALL_NUMBERS = range(1,25)
const POWERBALL_MEGABALL_NUMBERS = range(1,26)

const useGenerateNumbers = () => {
  const generateNumbers = (lotteryName, oddNumbersCount, isMegaballEven) => {
        const isMegamillions = lotteryName === LOTTTERY_NAMES.megamillions
        const possibleNumbers = isMegamillions ? MEGAMILLIONS_NUMBERS : POWERBALL_NUMBERS
        const possibleMegaballNumbers = isMegamillions ? MEGAMILLIONS_MEGABALL_NUMBERS : POWERBALL_MEGABALL_NUMBERS

        const numbers = [];
        const megaball = sample(possibleMegaballNumbers.filter((n) => {
          return isMegaballEven ? n % 2 === 0 : n % 2 === 1
        }));

        let oddCounter = 0;
        let evenCounter = 0;

       const evenNumberCount = 5 - oddNumbersCount;

        while (numbers.length < 5) {
            const number = sample(possibleNumbers);
            if (numbers.includes(number)) { continue };

          if (number % 2 === 1 && oddCounter < oddNumbersCount) {
                numbers.push(number);
                oddCounter += 1;
          } else if (number % 2 === 0 && evenCounter < evenNumberCount) {
                numbers.push(number);
                evenCounter += 1;
            };
        };
        numbers.sort((a, b) => a - b)

        return { numbers, megaball };
    }

    return { generateNumbers }
}

export default useGenerateNumbers