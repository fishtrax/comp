# Login Component

#### install:
```sh
  npm install @fishtrax/Login --save
```

#### import:
```jsx
  import { Login } from '@fishtrax/Login';

  <Login />
```

# Props:

## onSubmit

The function you want to execute on submit. This will return the username and password values.

```sh
  <Login onSubmit={yourFunction} />
```

## loginFail

A variable used to determine a failed login attempt. Passing this anything besides null will show the login error text.

```sh
  <Login loginFail={loginFail}/>
```


## linkOptions

A function to determine what functionality you want for the links at the bottom of the component

```jsx
  const yourFunction = (prop) => {
    switch (prop) {
      case 'Forgot Username':
        /** execute a function if Forgot Username link was clicked **/
        forgotUser()
        break;
      case 'Forgot Password':
        forgotPass()
        break;
      case 'Privacy Policy':
        privacyPolicy()
        break;
      default:
        default()
        break;
    }
  }

  ...

  <Login linkOptions={yourFunction} />
```
