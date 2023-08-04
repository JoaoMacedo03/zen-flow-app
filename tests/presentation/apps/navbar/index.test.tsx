import { Navbar } from '@/presentation/apps';
import { baseComponentMock } from '@/tests/mocks/base-component';
import { render, screen } from '@testing-library/react';

const baseComponentProps = baseComponentMock();

describe('NavbarComponent', () => {
  it('should render the component', () => {
    render(<Navbar settings={baseComponentProps.settings} />);
    expect(screen.queryByTestId('navbarWrap')?.textContent).toBe(
      'Isso é um navbar'
    );
  });
});
