/* eslint-disable indent */
import React from 'react';
import { Header } from '../../components/Header';
import { render } from '@testing-library/react';
import { describe } from '@jest/globals';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Header', () => {
    test('should render component correctly', () => {
        const { debug } = render(<Header />);

        debug();
    });
});
