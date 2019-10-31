import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

class Loading extends Component {

    render() {
        return (
            <div className={'loader'}>
                <CircularProgress color="secondary"/>
            </div>
        );
    }
}

export default Loading;
