import { create } from '@storybook/theming/create';
import sigle from './assets/sigle.svg';

export default create({
  base: '#light',

  colorPrimary: '#0e2356',
  colorSecondary: '#00afcb',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#00afcb',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Avenir", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#0e2356',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#0e2356',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#0e2356',
  inputBorderRadius: 4,

  brandTitle: 'OCTO Design System',
  brandUrl: 'https://octo.com',
  brandImage: sigle,
});
