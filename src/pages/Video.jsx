import React, {Component} from 'react'
import {connect} from 'react-redux';
import styles from '../containers/App/style.css'
function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

export class Video extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    this.props.videos.map((one,index)=> {
                        console.log(this)
                        return (<div>
                                    <img key={one} src={one.picUrl}/>
                                    <a className={styles.urlLink} key={index} href={one.url}>{one.description}</a>
                                </div>)
                    })
                }
            </div>
        )
    }
}
export default Video = connect(mapStateToProps)(Video)