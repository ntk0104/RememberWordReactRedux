import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import {showAll, showMemorized, showNeedPractice} from '../redux/actionCreators'

class Filter extends Component {

    constructor(props) {
        super(props)
    }

    getStyleButton(buttonTitle) {
        const { myFilterStatus } = this.props
        if (buttonTitle === myFilterStatus) {
            return (
                {
                    color: 'white',
                    fontWeight: 'bold'
                }
            )
        }
    }

    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType })
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: "center",
                    resizeMode: "contain",
                }}>
                <TouchableOpacity
                    onPress={() => this.props.showAll()}
                    style={{
                        backgroundColor: 'red',
                        flex: 1,
                        justifyContent: "space-around",
                        alignItems: 'center',
                    }}>
                    <Text style={this.getStyleButton('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.showMemorized()}
                    style={{
                        backgroundColor: 'pink',
                        flex: 1,
                        justifyContent: "space-around",
                        alignItems: 'center',
                    }}>
                    <Text style={this.getStyleButton('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.showNeedPractice()}
                    style={{
                        backgroundColor: 'blue',
                        flex: 1,
                        justifyContent: "space-around",
                        alignItems: 'center',
                    }}>
                    <Text style={this.getStyleButton('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        myFilterStatus: state.filterStatus
    }
}

export default connect(mapStateToProps, {
    showAll, 
    showMemorized, 
    showNeedPractice
}
)(Filter)