import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    onAdding() {
        this.props.dispatch({
            type: 'CHANGE_ADDING_STATUS'
        })

    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    marginTop: 34,
                    justifyContent: "center",
                    alignItems: 'center',
                    height: 45,
                    flexDirection: 'row',
                    flex: 1
                }}>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 30
                    }}>My Words</Text>
                <TouchableOpacity
                    onPress={this.onAdding.bind(this)}
                >
                    <Text
                        style={{
                            color: 'blue',
                            marginLeft: 150
                        }}>Add</Text>
                </TouchableOpacity>


            </View>
        );
    }
}


export default connect()(Header)