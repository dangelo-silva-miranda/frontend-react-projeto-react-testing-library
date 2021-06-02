import React from 'react';
import { render } from '@testing-library/react';
import { About } from '../components';

describe(`Test the About component: test if the page
 contains information about Pokédex`, () => {
  test('if the page contains a heading h2 with the text About Pokédex',
    () => {
      const { getByRole } = render(
        <About />,
      );

      const heading = getByRole('heading', { level: 2, name: /^About Pokédex$/i });
      expect(heading).toBeInTheDocument();
    });
});
