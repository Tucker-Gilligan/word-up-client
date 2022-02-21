import { useState, useEffect } from 'react';

const useWordUp = () => {
  const [guess, setGuess] = useState<string>('');
  const [rowId, setRowId] = useState<string>('row-1');
  const [tryNum, setTryNum] = useState<number>(1);
  const [feedback, setFeedback] = useState<string>('');

  const todaysWord = 'PIZZA';

  const onClick = (evt: any) => {
    evt.preventDefault();
    if (guess.length < 5 && evt.target.value.length === 1) {
      setGuess(guess + evt.target.value);
    }
    if (evt.target.value === 'ENTER') {
      if (guess.length === 5 && tryNum < 6) {
        if (guess === todaysWord) {
          setFeedback('YOU WIN!');
        } else {
          setTryNum(tryNum + 1);
          // send guess to API,
          setGuess('');
        }
      } else if (guess.length !== 5) {
        console.error('each guess requires 5 ');
      } else {
        setFeedback('BETTER LUCK NEXT TIME');
      }
    }
  };

  useEffect(() => {
    if (rowId !== 'row-6') {
      setRowId(`row-${tryNum}`);
    }
  }, [tryNum, rowId]);

  return {
    guess,
    rowId,
    feedback,
    onClick,
  };
};

export default useWordUp;
