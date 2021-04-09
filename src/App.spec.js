import { render, screen } from '@testing-library/react';
import App from './App';

describe('Shallow test', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('Bem vindo!');
    expect(linkElement).toBeInTheDocument();
  });
});
