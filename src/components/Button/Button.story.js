import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Button from './Button';

const options = ['primary', 'secondary'];

storiesOf('Button', module).add('Default', () => (
  <Button variant={select('variant', options, options[0])}>Button</Button>
));
