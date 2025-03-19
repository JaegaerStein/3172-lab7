import React from 'react'; // Add this line
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to My Portfolio/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the introduction text', () => {
    render(<Home />);
    const introText = screen.getByText(/Hi, I'm Jaegar Steinhauer/i);
    expect(introText).toBeInTheDocument();
  });
});