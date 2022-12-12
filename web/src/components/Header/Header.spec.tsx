/* eslint-disable indent */
import { Header } from '.';
import { render, screen } from '@testing-library/react';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

describe('Header', () => {
    it('should render component correctly', () => {
        render(<Header />);

        expect(screen.getByText('Qualquer coiss')).toBeInTheDocument();
    });
});
