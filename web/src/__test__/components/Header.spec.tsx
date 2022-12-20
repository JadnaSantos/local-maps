import React from 'react';
import { render } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Header } from '../../components/Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

describe('Header Component', () => {
  it('should render component correctly', () => {
    const { debug } = render(<Header />);

    debug();
  });
});
