# @fishtrax/core



## Installation

Modify your .npmrc file to have the correct registry and authentication

Install the package in your project directory with:

```sh
// with npm
npm install @fishtrax/core

// with yarn
yarn add @fishtrax/core
```

Add in custom theme with MuiThemeProvider in your root App.js file
```jsx
import { MuiThemeProvider } from '@material-ui/core/styles';
import fishtraxTheme from '@fishtrax/core/Theme';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={fishtraxTheme}>
        /** Your components here **/
      </MuiThemeProvider>
    );
  }
}

export default App;
```


## Usage

Import components like you would any other React component

```js
/** Footer Component **/
import Footer from '@fishtrax/core/Footer';
```


## Packages

#### Calendar

React-Big-Calendar component styled and designed for maintenance cases
```js
import Calendar from '@fishtrax/core/Calendar';
```

#### Eyebrow

Eyebrow component styled and designed for the top of the fishtrax.com homepage
```js
import Eyebrow from '@fishtrax/core/Eyebrow';
```

#### ExpandCard

Expandable Card component with large image
```js
import ExpandCard from '@fishtrax/core/ExpandCard';
```

#### FiberMap

Esri Map component, built to display interactable fiber for Shop-by-Location page
```js
import FiberMap from '@fishtrax/core/FiberMap';
```

#### FiberStats

Large FiberStats component for homepage
```js
import FiberStats from '@fishtrax/core/FiberStats';
```

#### Footer

Large Footer component
```js
import Footer from '@fishtrax/core/Footer';
```

#### GhostNav

Main navigation for fishtrax.com homepage
```js
import GhostNav from '@fishtrax/core/GhostNav';
```

#### HeaderBar

Custom gradient AppBar component, built for use as a page navigation
```js
import HeaderBar from '@fishtrax/core/HeaderBar';
```

#### Input

Basic input component with multiple design options. See: [@fishtrax/Input](./Input)
```js
import Input from '@fishtrax/core/Input';
```

#### LeafletMap

Leaflet map component styled and designed for maintenance cases
```js
import LeafletMap from '@fishtrax/core/LeafletMap';
```

#### Login

Login component styled and designed for fishtrax.com login page
```js
import Login from '@fishtrax/core/Login';
```

#### Modal

Basic Modal component
```js
import Modal from '@fishtrax/core/Modal';
```

#### fishtraxTheme

Material-UI Theme for @fishtrax/core components
```js
import fishtraxTheme from '@fishtrax/core/Theme';
```
