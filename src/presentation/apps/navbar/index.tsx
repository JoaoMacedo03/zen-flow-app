import { BaseComponentProps } from '@/interfaces';
import React from 'react';

const Navbar: React.FC<BaseComponentProps> = (_: BaseComponentProps) => (
  <div data-testid="navbarWrap">Isso é um navbar</div>
);

export default Navbar;
