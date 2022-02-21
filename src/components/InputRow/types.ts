export const styles = {
  LetterInput: {
    width: '50px',
    height: '50px',
    fontSize: '50px',
    textAlign: 'center' as 'center',
    backgroundColor: 'black',
    border: 'solid 1px lightgray'
  },
  InputContainer: {
    display: 'flex',
  },
  TableRow: {
  },
}

export interface InputRowProps {
  id: string;
  guess: string;
  rowId: string;
}