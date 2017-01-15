import React, { Component } from 'react'
import {hashHistory} from 'react-router'
export default class MainArea extends Component{
    constructor(props){
        super(props)
        this.getToUrl = this.getToUrl.bind(this)
    }
    getToUrl(){
        hashHistory.push(this.props.url)
    }
    render(){
        return(
            <div>
                <button onClick={this.getToUrl} type="button">
                    <img src={this.props.picurl}/>
                </button>
            </div>
        )
    }
}