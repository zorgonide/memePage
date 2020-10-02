import React, { Component } from 'react'
import { data } from "./download";
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'sad',
            topText: ["Mech+bois", "Civil+bois", "IP+bois", "ICE+bois"],
            bottomText: ["Placement+nhi+bhaukal", "Chaud", "Jaldi+se+dood+pee+leta+hun", "Professional+Virgins", "Civil+chutiya", "TT+core+committee+for+lyf", "Company+nhi+ladki+milti+humme", "Mummy+ka+laadla", "Na+dare+na+bhide+jab+mann+kare+OT+me+tapak+jaaye" , "Tiktok+is+passion" , "4LPA+job+andhapaisa", "cringeee", "Maths+2+makeup+time"],
            options: data,
        };
    }
    render() {
        let str = `http://apimeme.com/meme?meme=${this.state.options[Math.floor(Math.random()*this.state.options.length)]}&top=${this.state.topText[Math.floor(Math.random()*this.state.topText.length)]}&bottom=${this.state.bottomText[Math.floor(Math.random()*this.state.bottomText.length)]}&test=1`
        
        return (
            <div className="container">
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center login-container">
                        <div className="card border text-center">
                            <h1 className="text-danger ">Hello, I'm Bhaukal</h1>
                            <a href={str} className="btn btn-danger">For proof click here</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
