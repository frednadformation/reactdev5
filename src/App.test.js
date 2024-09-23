import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('Test des composants react', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
});
