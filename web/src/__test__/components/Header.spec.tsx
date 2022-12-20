import React from 'react';
import { screen, render, waitFor, fireEvent, renderHook } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Header } from '../../components/Header';
import { act } from 'react-dom/test-utils';


const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({}))
  })
}));

describe('Header', () => {
  it('should render Header correctly', async () => {
    render(<Header />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Explorar')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
  });
});

