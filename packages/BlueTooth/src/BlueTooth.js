import React, { Component } from 'react';
//import {Puck} from './Puck';
const Puck = require('./Puck.js')
import Button from '@material-ui/core/Button';
import Chart from "react-apexcharts";
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
    constructor(props) {
        super(props);
    this.state = {
        optionsRadial: {
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: "70%",
                background: "#fff",
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: "#fff",
                strokeWidth: "67%",
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
  
              dataLabels: {
                showOn: "always",
                name: {
                  offsetY: -20,
                  show: true,
                  color: "#999",
                  fontSize: "13px"
                },
                value: {
                  formatter: function (val) {
                    return val;
                  },
                  color: "#999",
                  fontSize: "30px",
                  show: true
                }
              }
            }
          },
          fill: {
            type: "solid",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ff0000"],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: "round"
          },
          labels: ["Battery"]
        },
        seriesRadial: [0],
        optionsBar: {
          chart: {
            stacked: true,
            stackType: "100%",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          dataLabels: {
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 0
          },
         
          fill: {
            opacity: 1,
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "vertical",
              shadeIntensity: 0.35,
              gradientToColors: undefined,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.65,
              stops: [90, 0, 100]
            }
          },
  
          legend: {
            position: "bottom",
            horizontalAlign: "right"
          }
        },
        
      };

    }

    puck = ()=>{
        let _this = this;
        Puck.eval("{bat:Puck.getBatteryPercentage()}", function(d,err) {
            if (!d) {
              alert("Web Bluetooth connection failed!\n"+(err||""));
              return;
            }

            console.log(d)
            // _this.setState({ 
            //     seriesRadial:d.bat
            // })
            // Puck.eval("history", function(d) {
            //     this.setState({ 
            //         seriesRadial:d
            //     })
            // });
          });

    }


    render() {
        
    const { classes } = this.props;

      return (
        <div className="App">
          <Button onClick={connectDevice}>Connect</Button>
          <Button onClick={this.puck}>puck</Button>
          <div>
          <Chart
              options={this.state.optionsRadial}
              series={this.state.seriesRadial}
              type="radialBar"
              width="280"
            />
         
           
          </div>
        </div>
      );
    }
  }

  export default withStyles(styles, {index: 99999})(BlueTooth);