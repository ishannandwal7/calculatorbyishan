import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
              
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div id="main" className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
                <div className="foot" id="foot">
                    <p> developed by 'ishan nandwal'</p>
                    <div className="ico">
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-linkedin" title="linkedin"></i> </a>
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-instagram" title="instagram"></i> </a>
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-twitter" title="twitter"></i> </a> 
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-github" title="github"></i> </a>
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-envelope" title="Email"></i> </a>

                    

                    </div>
                </div>
                <div className="about" id="about">
                    <div id="text">

                    <p><b>hey!</b></p><br/>
                    <p>im ishan nandwal a student,developer and many more..</p><br/>
                    <p>you can get in touch with me by ..</p><br/>
                    </div>
                    <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-linkedin" title="linkedin"></i> </a>
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-instagram" title="instagram"></i> </a>
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-twitter" title="twitter"></i> </a> 
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-github" title="github"></i> </a>
                   <a href="https://www.instagram.com/ishan_nandwal/">  <i className="fa fa-envelope" title="Email"></i> </a>

                    
                </div>
            </div>
        );
    }
}

export default App;

