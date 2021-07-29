import { addParameters, addDecorator, configure } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { muiTheme } from 'storybook-addon-material-ui';
import FishTraxTheme from '../packages/Theme/src/index'
import './styles.css'

window.$ = window.jQuery = require('jquery');

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    showSearchBox: false,
    panelPosition: "bottom",
    sortStoriesByKind: true,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: true // true by default
  },
  theme: {
    brandTitle: "UI Libary",
  },
})

addDecorator(withNotes);
addDecorator(withInfo({
    styles: {
      button: {
        topRight: {
          bottom: 0,
          right: 0,
          top: 'unset',
          borderRadius: '5px 0 0 0',
        }
      }
    }
  })
);
addDecorator(muiTheme(FishTraxTheme))

//const reqMain = require.context('../stories', true, /\.?stories\.js$/);
//const reqLib = require.context('../src', true, /\.?stories\.js$/);
const reqPackages = require.context("../packages", true, /\.?stories\.js$/);

function loadStories() {
  //require('../stories'); // For QA Global stories
  //reqMain.keys().forEach(filename => reqMain(filename));
  //reqLib.keys().forEach(filename => reqLib(filename));
  reqPackages.keys().forEach(filename => reqPackages(filename));
}

configure(loadStories, module);
