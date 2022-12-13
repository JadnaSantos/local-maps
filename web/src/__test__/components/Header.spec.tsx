/* eslint-disable indent */
import React from 'react';
import { Header } from '../../components/Header';
import { render, screen } from '@testing-library/react';
import { describe } from '@jest/globals';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

describe('Header', () => {
    it('should render component correctly', () => {
        render(<Header />);

        expect(screen.getByText('Explorar')).toBeInTheDocument();
        expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    });
});
