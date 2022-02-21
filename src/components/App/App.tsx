import React, { useState, useEffect } from 'react';
import { InputRow } from '../InputRow/InputRow';
import Keyboard from '../Keyboard/Keyboard';
import { styles, WordUpData } from './types';

const App = () => {
  const [wordUpData, setWordUpData] = useState<WordUpData>({
    guess: '',
    rowId: 'row-1',
    tryNum: 1,
    feedback: '',
  });

  const todaysWord = 'PIZZA';
  const { guess, rowId, feedback, tryNum } = wordUpData;
  const onClick = (evt: any) => {
    if (wordUpData.guess.length < 5 && evt.target.value.length === 1) {
      const chosenLetter = String(evt.target.value);
      setWordUpData(prevState => ({
        ...prevState,
        guess: guess + chosenLetter,
      }));
    }

    if (evt.target.value === 'ENTER') {
      if (guess.length === 5 && tryNum <= 6) {
        if (guess === todaysWord) {
          setWordUpData(prevState => ({ ...prevState, feedback: 'YOU WIN!' }));
        } else if (tryNum === 6 && guess !== todaysWord) {
          setWordUpData(prevState => ({
            ...prevState,
            feedback: 'BETTER LUCK NEXT TIME',
          }));
        } else {
          setWordUpData(prevState => ({
            ...prevState,
            tryNum: tryNum + 1,
            guess: '',
          }));
        }
      } else if (guess.length !== 5) {
        console.error('each guess requires 5 letters');
      }
    }
  };

  useEffect(() => {
    if (rowId !== 'row-6') {
      setWordUpData(prevState => ({ ...prevState, rowId: `row-${tryNum}` }));
    }
  }, [tryNum, rowId]);

  const Footer = () =>
    !feedback ? (
      <div id='keyboard-container'>
        <Keyboard onClick={onClick} />
      </div>
    ) : (
      <div>{feedback}</div>
    );

  const Table = () => (
    <table className='guess-table' style={styles.Table}>
      <tbody>
        <InputRow id={'row-1'} guess={guess} rowId={rowId} />
        <InputRow id={'row-2'} guess={guess} rowId={rowId} />
        <InputRow id={'row-3'} guess={guess} rowId={rowId} />
        <InputRow id={'row-4'} guess={guess} rowId={rowId} />
        <InputRow id={'row-5'} guess={guess} rowId={rowId} />
        <InputRow id={'row-6'} guess={guess} rowId={rowId} />
      </tbody>
    </table>
  );

  return (
    <div className='App' style={styles.App}>
      <header className='App-header' style={styles.Header} id='header'>
        <h1>Word Up</h1>
      </header>
      <div className='table-container' style={styles.TableContainer}>
        <Table />
      </div>
      <Footer />
    </div>
  );
};

export default App;
