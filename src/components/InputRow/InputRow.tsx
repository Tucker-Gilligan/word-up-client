import React from 'react';

const styles = {
  LetterInput: {
    width: '50px',
    height: '50px',
    fontSize: '50px',
    textAlign: 'center' as 'center',
  },
}

interface InputRowProps {
  id: string;
  disabled?: boolean;
}

export const InputRow = ({ disabled, id }: InputRowProps) => {
  return (
    <tr id={`${id}-row`}>
      <td id={`${id}-data-cell`}>
        <input type='text' maxLength={1} style={styles?.LetterInput} disabled={disabled} id={`${id}-input-1`} />
        <input type='text' maxLength={1} style={styles?.LetterInput} disabled={disabled} id={`${id}-input-2`}/>
        <input type='text' maxLength={1} style={styles?.LetterInput} disabled={disabled} id={`${id}-input-3`}/>
        <input type='text' maxLength={1} style={styles?.LetterInput} disabled={disabled} id={`${id}-input-4`}/>
        <input type='text' maxLength={1} style={styles?.LetterInput} disabled={disabled} id={`${id}-input-5`}/>
      </td>
    </tr>
  )
};