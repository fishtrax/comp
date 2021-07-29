import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        color: '#FFF',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 20,
        fontWeight: 600,
        textTransform: 'none',
        borderRadius: 5,
        background: 'linear-gradient(135deg, #F15C22 0%, #F58220 100%)'
      },
      buttonLabel: {
        height: 28,
      }
    };

class CookieBanner extends Component {



    render() {

    const { classes } = this.props;

      return (
        <div className="App">
          <CookieConsent
            onAccept={this.props.click.bind(this)}
            cookieName="fishtraxui"
            style={{zIndex: 9999999}}
            hideOnAccept={true}
            expires={90}
            buttonStyle={{ background:'#efefef',  borderRadius: 5, color: "#000", fontSize: "13px" }}
            >
            This website allows the use of cookies to ensure we give you the best experience and serve you the most relevant information. View our Cookie Notice for more information.

          </CookieConsent>
        </div>
      );
    }
  }

  export default withStyles(styles, {index: 99999})(CookieBanner);
