import React, { Component } from 'react'
import {hashHistory} from 'react-router'
export default class MainArea extends Component{
    constructor(props){
        super(props)
        this.getToUrl = this.getToUrl.bind(this)
    }
    getToUrl(){

        this.props.fetchVideos(this.props.routeurl)
        hashHistory.push(this.props.url)

    }
    render(){
        return(
            <div>
                <button onClick={this.getToUrl} type="button">
                    <p>{this.props.bool}</p>
                    <img/>
                </button>
            </div>
        )
    }
}