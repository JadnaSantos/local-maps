/* eslint-disable indent */
import { render } from '@testing-library/react';
import React from 'react';
import { SignIn } from '.';


const mockedUsedNavigate = jest.fn();
const mockedSignIn = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

// jest.mock('../../contexts/AuthContext', () => {
//     return {
//         AuthContext: () => ({
//             signIn: mockedSignIn,
//         }),
//     };
// });

describe('SignIn Page', () => {
    beforeEach(() => {
        mockedUsedNavigate.mockClear();
    });

    it('should render component correctly', () => {
        render(<SignIn />);
    });
});
