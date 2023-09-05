import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <h1>
      This is{' '}
      <a target="_blank" href="https://google.com">
        {' '}
        {name}{' '}
      </a>
    </h1>
  );
};
