import React, { Component } from 'react'
import {hashHistory, browserHistory} from 'react-router'
export default class MainArea extends Component{
    constructor(props){
        super(props)
        this.getToUrl = this.getToUrl.bind(this)
    }
    getToUrl(){

        this.props.fetchVideos(this.props.routeurl)
        browserHistory.push(this.props.url)

    }
    render(){
        return(
            <div>
                <button onClick={this.getToUrl} type="button">
                    <img/>
                </button>
            </div>
        )
    }
}