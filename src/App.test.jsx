import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('renders the home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Check if the Home Page content is rendered
    const homePage = screen.getByText(/Welcome to My Portfolio/i);
    expect(homePage).toBeInTheDocument();
  });

  it('renders the 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );
    // Check if the 404 Page content is rendered
    const notFoundPage = screen.getByText(/404 - Page Not Found/i);
    expect(notFoundPage).toBeInTheDocument();

    // Check if the "Go Home" link is present and points to the Home Page
    const homeLink = screen.getByRole('link', { name: /go home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});