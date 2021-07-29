# Footer Component

#### install:
```sh
  npm install @fishtrax/Footer --save
```

#### import:
```jsx
  import { Footer } from '@fishtrax/Footer';

  <Footer />
```

# Props:


## handleLink

A function to determine what functionality you want for the links at the top of the footer

```jsx
  const yourFunction = (prop) => {
    switch (prop) {
      case 'Events':
        /** execute a function if Events link was clicked **/
        events()
        break;
      case 'Investors':
        investors()
        break;
      default:
        default()
        break;
    }
  }

  ...

  <Footer handleLink={yourFunction} />
```


## policyOpt

A function to determine what functionality you want for the links at the bottom of the footer (Policies, Privacy, Cookies)

```jsx
  const yourFunction = (prop) => {
    switch (prop) {
      case 'Policies':
        /** execute a function if Policies link was clicked **/
        policies()
        break;
      case 'Privacy':
        privacy()
        break;
      case 'Cookies':
        cookies()
        break;
      default:
        default()
        break;
    }
  }

  ...

  <Footer policyOpt={yourFunction} />
```
