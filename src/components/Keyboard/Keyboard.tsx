import React from 'react';
import useKeyboard from '../../hooks/useKeyboard'
import { KeyboardProps } from './types'

const Keyboard = ({ onClick }: KeyboardProps) => {  
  const { createKeyboard } = useKeyboard();
  const keyboardRows = ['Q W E R T Y U I O P', 'A S D F G H J K L', 'ENTER Z X C V B N M'];
  const KeyboardEl = () => createKeyboard(keyboardRows, onClick);

  return <KeyboardEl />;
};

export default Keyboard;
