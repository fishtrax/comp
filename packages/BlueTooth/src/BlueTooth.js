import React, { Component } from 'react';
//import {Puck} from './Puck';
import { withStyles } from '@material-ui/core/styles';
const Puck = require('./Puck.js')
import Button from '@material-ui/core/Button';

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
    function onLine(line) {
        try {
          var j = JSON.parse(line);
          console.log("Received JSON: ",j);
          elements.light.setValue(j.light*100);
        } catch(e) {
          console.log("Received: ",line);
        }
      }

console.log(Puck)

let connection;
    function connectDevice() {
      Puck.connect(function(c) {
          console.log(c)
        if (!c) {
          alert("Couldn't connect!",c);
          return;
        }
        connection = c;
        // remove modal window
        //elements.modal.remove();
        // Handle the data we get back, and call 'onLine'
        // whenever we get a line
        var buf = "";
        connection.on("data", function(d) {
          buf += d;
          var i = buf.indexOf("\n");
          while (i>=0) {
            onLine(buf.substr(0,i));
            buf = buf.substr(i+1);
            i = buf.indexOf("\n");
          }
        });
        // First, reset Puck.js
        connection.write("reset();\n", function() {
          // Wait for it to reset itself
          setTimeout(function() {
            // Now tell it to write data on the current light level to Bluetooth
            // 10 times a second. Also ensure that when disconnected, Puck.js
            // resets so the setInterval doesn't keep draining battery.
            connection.write("setInterval(function(){Bluetooth.println(JSON.stringify({light:Puck.light()}));},100);NRF.on('disconnect', function() {reset()});\n",
              function() { console.log("Ready..."); });
            }, 1500);
          });
        });
  
    }   

class BlueTooth extends Component {



    render() {

    const { classes } = this.props;

      return (
        <div className="App">
          <Button onClick={connectDevice()}>Connect</Button>
        </div>
      );
    }
  }

  export default withStyles(styles, {index: 99999})(BlueTooth);