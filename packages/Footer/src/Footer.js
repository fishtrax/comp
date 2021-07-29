import React from 'react';
import { Typography } from '@material-ui/core';

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const fishtrax_BUCKET = 'https://fishtrax-ui-bucket.s3-us-west-2.amazonaws.com'
const Facebook = `${fishtrax_BUCKET}/Common/Social/facebook-icon-orange.svg`
const Twitter = `${fishtrax_BUCKET}/Common/Social/twitter-icon-orange.svg`
const Instagram = `${fishtrax_BUCKET}/Common/Social/instagram-icon-orange.svg`
const LinkedIn = `${fishtrax_BUCKET}/Common/Social/linkedin-icon-orange.svg`

const styles = theme => ({
  footer: {
    width: '100%',
    padding: '3% 0 60px 0',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    color: '#0E2030',
    width: 850,
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    margin: '0px 15px',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  smallContainer: {
    background: 'black',
    height: 60,
    color: 'white',
    display: 'flex',
    padding: '7px 0 0 40px'
  },
  smallContent: {
    padding: '0px 0 0 10px',
    fontSize: 14,
    fontWeight: 300,
    fontFamily: 'Rajdhani, sans serif',
  },
  linksContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  linkSection: {
    width: 'fit-content',
    display: 'flex',
    flexFlow: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '45%',
    },
  },
  title: {
    margin: '15px 0px',
    fontSize: '1.5em',
    fontWeight: 600,
  },
  link: {
    cursor: 'pointer',
    width: 'fit-content',
    '&:hover': {
      color: '#0E2030',
    }
  },
  seperator: {
    margin: '10px 0 20px 0',
    height: 2,
    width: '100%',
    border: 'none',
    backgroundColor: '#0E2030',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 25,
    },
  },
  tagLine: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '40px',
    marginBottom: '10px',
  },
  sepSmall: {
    margin: '5px 7px',
    height: 12,
    width: 1,
    border: 'none',
    backgroundColor: '#0E2030',
  },
  sepSmallLast: {
    margin: '5px 7px',
    height: 12,
    width: 1,
    border: 'none',
    backgroundColor: '#0E2030',
  },
  bottomOpt: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  privacyContainer: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '70%',
      flexFlow: 'wrap',
      justifyContent: 'center',
    },
  },
  policyContainer: {
    paddingLeft: 10
  },
  privacy: {
    margin: 0,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
    '&:hover': {
      color: '#0E2030',
    }
  },
  socialContainer: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      width: '30%',
      flexFlow: 'row',
      flexWrap: 'wrap',
    },
  },
  socialIcon: {
    height: 35,
    width: 35,
    borderRadius: '50%',
    margin: '0px 15px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0E2030',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 5,
    },
  },
  icon: {
    height: 35,
    width: 35,
    margin: 0,
  },
  copyright: {
    color: '#0E2030',
    fontSize: 13,
    [theme.breakpoints.down('xs')]: {
      marginTop: 5,
      marginLeft: 10,
      textAlign: 'left'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
      textAlign: 'center'
    },
  }
})

const keyGenerator = () => {
  return (Math.random() * 10501)
}

const tallFooter = (classes, handleLink, policyOpt, links ) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.linksContainer}>
          {Object.keys(links).map(key => {
            if(key != 'Policy' && key != 'Copyright'){
              return (
                <div key={keyGenerator()} className={classes.linkSection}>
                  <h4  className={classes.title}> {key} </h4>
                  {links[key].map(link => (
                    <a
                      className={classes.link}
                      onClick={() => handleLink(link)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )
            }
          })}
        </div>
          <div style={{width: '100%'}}>
            <p className={classes.tagLine}>It’s Your Water…Explore It®</p>
          </div>
        <hr className={classes.seperator}/>

        <div className={classes.bottomOpt}>
          <div className={classes.privacyContainer}>
            <div key='Policy' className={classes.policyContainer}>
              {
                links['Policy'].map((link, index) => (
                  <div key={index} style={{ display: 'inline-flex'}}>
                    <a className={classes.privacy} onClick={() => policyOpt(link)}>{link}</a>
                  { 
                    index < links['Policy'].length - 1 ? <hr className={classes.sepSmallLast}/> : null 
                  }
                  </div>
                ))
              }
           </div>
            <div key='Copyright'>
              {links['Copyright'].map(link => (
                <Typography key={keyGenerator()} variant='subtitle1' align='center' component='p' className={classes.copyright}>
                {link}
                </Typography>
              ))}
           </div>
          </div>

          <div className={classes.socialContainer}>
            {/* <a className={classes.socialIcon} href='https://twitter.com/@fishtraxGroup' target='_blank'>
              <img className={classes.icon} src={ Twitter } alt='Twitter Logo'/>
            </a>
            <a className={classes.socialIcon} href='https://www.linkedin.com/company/fishtrax-group' target='_blank'>
              <img className={classes.icon} src={ LinkedIn } alt='LinkedIn Logo'/>
            </a>
            <a className={classes.socialIcon} href='https://www.facebook.com/fishtraxgroup' target='_blank'>
              <img className={classes.icon} src={ Facebook } alt='Facebook Logo'/>
            </a>
            <a className={classes.socialIcon} href='https://www.instagram.com/lifeatfishtrax' target='_blank'>
              <img className={classes.icon} src={ Instagram } alt='Instagram Logo'/>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

const smallFooter = (classes, content) => {
  return(
    <footer className={classes.smallContainer}>
      <p className={classes.smallContent}>{content.copyright}</p>
      <p className={classes.smallContent}>{content.name}</p>
      <p className={classes.smallContent}>{content.rights}</p>
    </footer>
  )
}

const Footer = (props) => {
  const { classes, handleLink, policyOpt, links, size, content } = props;
  return(
    <div>
    {
      size === 'small' ? smallFooter(classes, content) : tallFooter(classes, handleLink, policyOpt, links)
    }
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {index: 999})(Footer);
