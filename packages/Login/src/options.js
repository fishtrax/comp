import React from 'react';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  optContain: {
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  forgotLink: {
    color: '#008896',
    fontSize: 12,
    cursor: 'pointer',
  },
  forgotSpt: {
    margin: '5px 8px',
    height: 10,
    width: 1,
    border: 'none',
    backgroundColor: '#008896',
  },
  newToLink: {
    color: '#0E2030',
    fontSize: 12,
    fontStyle: 'italic',
    cursor: 'pointer',
  },
  zLogLink: {
    color: '#0E2030',
    fontSize: 12,
    cursor: 'pointer',
  },
  zLogSpt: {
    margin: '5px 8px',
    height: 10,
    width: 1,
    border: 'none',
    backgroundColor: '#0E2030',
  },
}

const LoginOptions = (props) => {
  const { classes } = props

  return (
    <div className={classes.container}>
      <div id='optContain' className={classes.optContain}>
        
       
        <Link className={classes.forgotLink} onClick={() => props.linkOptions('Forgot Password')}>
          Forgot Password
        </Link>
        <hr id='forgotSpt' className={classes.forgotSpt}/>
        <Link className={classes.forgotLink} onClick={() => props.linkOptions('Privacy Policy')}>
          Privacy Policy
        </Link>
      </div>

      <div className={classes.optContain}>
        <Link className={classes.newToLink} onClick={() => props.linkOptions('New to fishtrax?')}>
          <b>Sign Up Now</b> 
        </Link>
      </div>



    </div>
  )
}

LoginOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {index: 999})(LoginOptions);
