import React from 'react';
import { storiesOf } from '@storybook/react';

import T from '../index';

storiesOf('T', module).add('basic', () => (
  <T minus={10} onComplete={() => console.log('blast off!')} onTick={({ secondsLeft }) => console.log(secondsLeft)}>
    {({ isComplete, secondsLeft }) =>
      isComplete ? (
        <img src="https://media.giphy.com/media/26xBEamXwaMSUbV72/giphy.gif" alt="rocket launch" />
      ) : (
        <div>{secondsLeft} seconds until launch...</div>
      )
    }
  </T>
));
