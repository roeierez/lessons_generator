import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Generator from '../components/Generator';

storiesOf('Generator', module)
  .add('to Storybook', () => (
    <Generator/>
  ));
