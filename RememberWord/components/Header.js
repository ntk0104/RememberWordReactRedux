import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class Header extends Component {

    constructor(props) {
        super(props)
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
                <TouchableOpacity>
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

export default Header