import './App.css';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import React from 'react';
import { InputRow } from '../InputRow/InputRow';

const styles = {
  App: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
  },
  Header: {
    paddingBottom: '16px',
  },
  TableContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    marginTop: '0px',
    paddingTop: '0px',
    paddingBottom: '20px',
  },
  Table: {},
  Keyboard: {
    paddingTop: '16px',
  },
  KeyboardContainer: {
    paddingTop: '16px',
  },
};

const App = () => {
  const onChange = input => {
    console.log('Input changed', input);
  };

  const onKeyPress = button => {
    console.log('Button pressed', button);
  };

  return (
    <div className='App' style={styles.App}>
      <div className='App-header' style={styles.Header} id="header">
        Word Up
      </div>
      <div className='table-container' style={styles.TableContainer}>
        <table className='guess-table' style={styles.Table}>
          <tbody>
            <InputRow id={'row-1'} />
            <InputRow id={'row-2'} disabled/>
            <InputRow id={'row-3'} disabled/>
            <InputRow id={'row-4'} disabled/>
            <InputRow id={'row-5'} disabled/>
            <InputRow id={'row-6'} disabled/>
          </tbody>
        </table>
        <div style={styles.KeyboardContainer}>
          <Keyboard
            onChange={onChange}
            onKeyPress={onKeyPress}
            style={styles.Keyboard}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
