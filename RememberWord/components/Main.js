import React, { Component } from 'react'
import {
        View,
        Text,
        FlatList
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
                flex: 1,
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <FlatList
                data = {this.props.arrWords}
                renderItem={({item}) => <Text>{item.en}</Text>}
                keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

function MapStateToProps(state){
    return {
        filterStatus: state.filterStatus,
        arrWords: state.arrWords
    }
}

export default connect(MapStateToProps)(Main)