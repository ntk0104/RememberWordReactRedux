import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    TextInput,
    Text
} from 'react-native';
import {connect} from 'react-redux'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            en: '',
            vn: ''
        }

        this.addNewWord = this.addNewWord.bind(this)
    }
    
    addNewWord = () => {
        this.props.dispatch(
            {
                type: 'ADD_NEW_TASK',
                en: this.state.en,
                vn: this.state.vn
            }
        )
        this.setState({
            en: '',
            vn : ''
        })
    }

    render() {
        return (
            <View
                style={
                    {
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: 'stretch',
                    }
                }>
                <TextInput
                    value={this.state.en}
                    placeholder="English word"
                    onChangeText={(text) => this.setState({
                        en: text
                    })}
                    style={{
                        width: 300,
                        backgroundColor: 'white',
                        marginBottom: 5,
                        marginTop: 5
                    }}></TextInput>
                <TextInput
                    value={this.state.vn}
                    placeholder="Nghĩa của từ"
                    onChangeText={(text) => this.setState({
                        vn: text
                    })}
                    style={{
                        width: 300,
                        backgroundColor: 'white',
                        marginBottom: 5,
                        marginTop: 5
                    }}></TextInput>
                <TouchableOpacity
                    onPress={this.addNewWord}
                    style={{
                        width: 50,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#635',
                    }}
                >
                    <Text
                        style={{
                            color: 'white'
                        }}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(Form)