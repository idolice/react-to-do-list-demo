import React, {Component} from 'react'
import Header from '../components/Header/Header'
import MainArea from '../components/MainArea'
import {connect} from 'react-redux';
import {videoRequest} from '../actions/todos'

function mapStateToProps(state) {
    return {
        fetchingData: state.fetchingData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVideos: (url) => dispatch(videoRequest(url))
    }
}
class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                <MainArea bool={this.props.fetchingData} fetchVideos={this.props.fetchVideos} routeurl="http://localhost:8080/video/videolist" url="video" picurl="../images/tabowvideo.jpg"/>
                <MainArea url="la"/>
            </div>
        )
    }
}

export default HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)