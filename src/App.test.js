import { render, screen } from '@testing-library/react';
import App from './App';

describe('Basic Render', () => {
  it('Word up title', () => {
    render(<App />);
    const title = screen.getByText('Word Up');
    expect(title).toBeInTheDocument();
  });
});
