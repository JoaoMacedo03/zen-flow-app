import { ErrorMessage } from '@/presentation/components';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('ErrorMessageComponent', () => {
  it('should render the component with error message', () => {
    render(<ErrorMessage error="ErrorJest" />);
    expect(screen.queryByTestId('errorWrap')?.textContent).toBe('ErrorJest');
  });
});
