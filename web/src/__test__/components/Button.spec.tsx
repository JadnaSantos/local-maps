import React from 'react';
import { render } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Button } from '../../components/Button';

describe('Input Component', () => {
  it('should render component correctly', () => {
    render(<Button children={undefined} />);
  });


});
