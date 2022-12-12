/* eslint-disable indent */
import { Button } from '.';
import { render } from '@testing-library/react';

describe('Header', () => {
    it('should render component correctly', () => {
        render(<Button children={undefined} />);
    });
});
