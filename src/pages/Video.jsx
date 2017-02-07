import React, {Component} from 'react'
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

class Video extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.videos.map(function (one) {
                        return one.description;
                    })
                }
            </div>
        )
    }
}
export default Video = connect(mapStateToProps)(Video)