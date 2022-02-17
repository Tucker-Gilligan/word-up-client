import './App.css';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import React from 'react';

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
  LetterInput: {
    width: '50px',
    height: '50px',
    fontSize: '50px',
    textAlign: 'center' as 'center',
  },
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
      <div className='App-header' style={styles.Header}>
        Word Up
      </div>
      <div className='table-container' style={styles.TableContainer}>
        <table className='guess-table' style={styles.Table}>
          <tbody>
            <tr>
              <td>
                <input type='text' maxLength={1} style={styles?.LetterInput} />
                <input type='text' maxLength={1} style={styles?.LetterInput} />
                <input type='text' maxLength={1} style={styles?.LetterInput} />
                <input type='text' maxLength={1} style={styles?.LetterInput} />
                <input type='text' maxLength={1} style={styles?.LetterInput} />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
                <input
                  type='text'
                  maxLength={1}
                  style={styles?.LetterInput}
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/*
            NEED:
            - A word (different word each day)
      
      
            - 6 rows of 5 spaces (probably inputs)
            - A submit button
              * after submit, letters will be marked as either yellow red or green
      
      
            - Mock Keyboard Component
              - After a guess, a key becomes disabled if it is not in the word
      
            - Feedback Component
              - Color chart to share but no letters
      
            - Cypress for testing
          */}
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
