import React from 'react';
import { styles, InputRowProps } from './types'


export const InputRow = ({ guess, id, rowId }: InputRowProps) => {
  return (
    <tr id={`${id}-row`} style={styles.TableRow}>
      <td id={`${id}-data-cell`} style={styles.InputContainer}>
        <div style={styles?.LetterInput} id={`${id}-input-1`}>{id === rowId && guess[0]}</div>
        <div style={styles?.LetterInput} id={`${id}-input-2`}>{id === rowId && guess[1]}</div>
        <div style={styles?.LetterInput} id={`${id}-input-3`}>{id === rowId && guess[2]}</div>
        <div style={styles?.LetterInput} id={`${id}-input-4`}>{id === rowId && guess[3]}</div>
        <div style={styles?.LetterInput} id={`${id}-input-5`}>{id === rowId && guess[4]}</div>
      </td>
    </tr>
  );
};