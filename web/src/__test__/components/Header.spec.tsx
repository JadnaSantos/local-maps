import React from 'react';
import { render } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Header } from '../../components/Header';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header Component', () => {
  it('should render component correctly', () => {
    render(<Header />);
  });
});
