import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { connect } from 'react-redux'
import Word from './Word';
import Filter from './Filter'
import Header from './Header'
import Form from './Form'

class Main extends Component {

    constructor(props) {
        super(props)
    }

    getWordList(){
        const { filterStatus, arrWords } = this.props
        if(filterStatus === 'MEMORIZED'){
            return arrWords.filter(e => e.memorized)
        }
        if( filterStatus === 'NEED_PRACTICE'){
            return arrWords.filter(e => !e.memorized)
        }
        return arrWords
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
                <Header></Header>
                {this.props.isAdding ? <Form></Form> : null}
                <View
                    style={{
                        flex: 10
                    }}
                >
                    <FlatList
                        data={this.getWordList()}
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
        arrWords: state.arrWords,
        isAdding: state.isAdding
    }
}

export default connect(MapStateToProps)(Main)