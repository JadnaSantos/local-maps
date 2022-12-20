/* eslint-disable indent */
import React from 'react';
import { render } from '@testing-library/react';
import { SignIn } from '../../pages/SignIn';


const mockedUsedNavigate = jest.fn();
const mockedSignIn = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => ({
      push: mockedUsedNavigate
    }),
  };
});


jest.mock('react-router-dom', () => {
  return {};
});


jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe('SignIn Page', () => {
  beforeEach(() => {
    mockedUsedNavigate.mockClear();
  });

  it('should render component correctly', () => {
    render(<SignIn />);
  });
});
