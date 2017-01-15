import React, { Component } from 'react'
import Header from '../components/Header/Header'
import MainArea from '../components/MainArea'
import
class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <MainArea url="/video" picurl="../images/tabowvideo.jpg"/>
                <MainArea url="la"/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    fetchVideos: dispatch()
}
export default HomePage = connect(mapDispatchToProps)(HomePage)