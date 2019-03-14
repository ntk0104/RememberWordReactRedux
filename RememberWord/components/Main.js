import React, { Component } from 'react'
import {
        View,
        Text
} from 'react-native';
import { connect } from 'react-redux'

class Main extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View
            style={{
                backgroundColor: "yellow",
                flex: 1
            }}>
                <Text>{this.props.filterStatus}</Text>
            </View>
        );
    }
}

function MapStateToProps(state){
    return {
        filterStatus: state.filterStatus
    }
}

export default connect(MapStateToProps)(Main)