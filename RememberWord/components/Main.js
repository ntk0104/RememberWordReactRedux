import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { connect } from 'react-redux'
import Word from './Word';
import Filter from './Filter'

class Main extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: "yellow",
                    flex: 1,
                    alignSelf: 'stretch',
                    justifyContent: "center",

                }}>
                <View
                    style={{
                        flex: 10
                    }}
                >
                    <FlatList
                        data={this.props.arrWords}
                        renderItem={({ item }) => <Word myWord={item}></Word>}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'blue'
                    }}
                >
                    <Filter></Filter>
                </View>

            </View>
        );
    }
}

function MapStateToProps(state) {
    return {
        filterStatus: state.filterStatus,
        arrWords: state.arrWords
    }
}

export default connect(MapStateToProps)(Main)