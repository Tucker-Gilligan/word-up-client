import React from 'react';
import { InputRow } from '../InputRow/InputRow';
import Keyboard from '../Keyboard/Keyboard'
import { styles } from './types'
import useWordUp from '../../hooks/useWordUp'

const App = () => {
  const { guess, rowId, onClick, feedback } = useWordUp();
  return (
    <div className='App' style={styles.App}>
      <div className='App-header' style={styles.Header} id="header">
        Word Up
      </div>
      <div className='table-container' style={styles.TableContainer}>
        <table className='guess-table' style={styles.Table}>
          <tbody>
            <InputRow id={'row-1'} guess={guess} rowId={rowId}/>
            <InputRow id={'row-2'} guess={guess} rowId={rowId}/>
            <InputRow id={'row-3'} guess={guess} rowId={rowId}/>
            <InputRow id={'row-4'} guess={guess} rowId={rowId}/>
            <InputRow id={'row-5'} guess={guess} rowId={rowId}/>
            <InputRow id={'row-6'} guess={guess} rowId={rowId}/>
          </tbody>
        </table>
      
      </div> 
      {!feedback ? (<div id="keyboard-container">
        <Keyboard onClick={onClick}/>
      </div>) : <div>{feedback}</div>}
    </div>
  );
};

export default App;
