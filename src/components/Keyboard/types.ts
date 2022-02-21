export const styles = {
  KeyboardContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '300px',
    border: 'solid 1px white',
    alignItems: 'flex-start',
    flexWrap: 'nowrap' as 'nowrap',
    padding: '4px',
  },
  KeyboardRow: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap' as 'nowrap',
    paddingBottom : '2px',
  },
  Key: {
    width: '100%',
    cursor: 'pointer',
  },
};

export interface KeyboardProps {
  onClick: (evt: any) => void;
}