import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LoginOptions from './options';
import './styles.css'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height:450,
    maxWidth: 400,
    width: '85%',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFF',
    border: '1px solid #E3E5E4',
    borderRadius: 5,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  welcome: {
    margin: 0,
    marginBottom: 10,
    color: '#0E2030',
    fontSize: '2em',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  input: {
    width: '90%',
    maxWidth: 250,
  },
  root: {
    height: 35,
  },
  inputDense: {
    padding: '7px 15px',
  },
  button: {
    color: '#FFF',
    width: 200,
    height: 40,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: 5,
    background: '#0E2030'
  },
  backButton: {
    height: 40,
    width: 110,
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    textTransform: 'none',
    borderRadius: 10,
    background: '#efefef'
  },
  buttonLabel: {
    height: 28,
  },
  failedAuth: {
    color: 'red',
    margin: 0,
    fontSize: 14,
    lineHeight: 1,
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      showPassword: false,
      forgotPassword: false,
      forgotUsername: false,
      userField: ''
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  linkOptions = (prop) => {
    switch (prop) {
     
      case 'Forgot Password':
        this.setState({ 
          forgotPassword: true,
          forgotUsername: false,
          userField: 'Password'
        })
        break;
      case 'Privacy Policy':
        console.log(prop)
        break;
      case 'New to fishtrax?':
        console.log(prop)
        break;
      case 'Sign in via zLogin':
        debugger
        this.props.zLogin()
        break;
      case 'What is zLogin?':
        console.log(prop)
        break;
      default:
        console.log(prop)
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <h3 className={classes.welcome}> 
        { this.state.forgotPassword || this.state.forgotUsername ? (this.state.forgotUsername ? 'Username Request' : 'Password Reset') : "Welcome" } 
        </h3>

        {this.props.loginFail
          ? <p className={classes.failedAuth}> Invalid Username or Password </p>
          : null
        }

        <TextField
          id='outlined'
          label={ this.state.forgotUsername ? 'Email' : 'Username' }
          className={classes.input}
          margin='dense'
          variant='outlined'
          value={this.state.user}
          onChange={this.handleChange('user')}
          InputProps={{ classes: { root: classes.root, inputMarginDense: classes.inputDense } }}
          InputLabelProps={{ id: 'userDense' }}
        />
        { this.state.forgotPassword || this.state.forgotUsername ? null : (
          <TextField
            id="outlined-adornment-password"
            className={classes.input}
            variant="outlined"
            margin='dense'
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            value={this.state.pass}
            onChange={this.handleChange('pass')}
            InputProps={{
              classes: { root: classes.root, inputMarginDense: classes.inputDense },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    style={{ padding: 5 }}
                  >
                    {this.state.showPassword || this.state.forgotUsername ? <Visibility/> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ id: 'passDense' }}
          />
        )}

        <Button
          className={classes.button}
          style={{ 
            fontSize: (this.state.forgotPassword || this.state.forgotUsername ? '18px' : '25px'), 
            marginBottom: (this.state.forgotPassword || this.state.forgotUsername ? '20px' : null) 
          }}
          onClick={() => this.props.onSubmit(this.state.user, this.state.pass)}
          classes={{ label: classes.buttonLabel }}
        >
          { this.state.forgotPassword || this.state.forgotUsername ? `Request ${this.state.userField}` : "Login" }
        </Button>

        {  this.state.forgotPassword || this.state.forgotUsername ? (
            <Button
              className={classes.backButton}
              onClick={() => this.setState({forgotPassword: false, forgotUsername: false})}
              classes={{ label: classes.buttonLabel }}
            >
              Back
            </Button>
          ) : null
          
        }

        <LoginOptions linkOptions={this.linkOptions}/>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {index: 999})(Login);
