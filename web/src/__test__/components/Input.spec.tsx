import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Input } from '../../components/Input';

describe('Input Component', () => {
  it('should render component correctly', () => {
    render(<Input />);
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #232119');
      expect(containerElement).toHaveStyle('color:  #232119');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('color:  #232119');
      expect(containerElement).not.toHaveStyle('border-color: #232119');
    });
  });


  it('should input border highlight when input is filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input');

    fireEvent.change(inputElement, {
      target: { value: 'user@example.com' },
    });
    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('color: #232119');
    });
  });
});
