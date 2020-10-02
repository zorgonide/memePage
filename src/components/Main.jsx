import React, { Component } from 'react'
import { data } from "./download";
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'sad',
            topText: ["Mech+bois", "Civil+bois", "IP+bois"],
            bottomText: ["Placement+nhi+bhaukal", "#Chaud", "Jaldi+se+dood+pee+leta+hun", "Professional+Virgins", "Civil+chutiya"],
            options: data,
        };
    }
    render() {
        let str = `http://apimeme.com/meme?meme=${this.state.options[Math.floor(Math.random()*1700)]}&top=${this.state.topText[Math.floor(Math.random()*this.state.topText.length)]}&bottom=${this.state.bottomText[Math.floor(Math.random()*this.state.bottomText.length)]}&test=1`
        
        return (
            <div className="container">
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center login-container">
                        <div className="card border p-10">
                            <h1 className="text-danger">Hello, I'm Bhaukal</h1>
                            <a href={str} className="btn btn-danger">For proof click here</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
