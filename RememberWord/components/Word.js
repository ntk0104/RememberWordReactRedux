import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

class Word extends Component {

    constructor(props) {
        super(props)
    }

    changeMemmorizedStatus() {
        this.props.dispatch({
            type: 'CHANGE_MEMORIZED_STATUS',
            id: this.props.myWord.id
        })

    }

    changeDisplayStatus() {
        this.props.dispatch({
            type: 'CHANGE_DISPLAY_STATUS',
            id: this.props.myWord.id
        })
    }

    render() {
        // myWord la 1 props duoc truyen tu Main.js sang
        const { en, vn, memorized, isShow } = this.props.myWord
        const textDecorationLine = memorized ? 'line-through' : 'none'
        const translationStyle = isShow === true ? {
            color: 'white',
            fontWeight: 'bold'
        } : {
            height: 0,
            width: 0
        }
        return (
            <View
                style={styles.container}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: 'red',
                        flex: 1,

                    }}>


                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            flex: 2,
                            backgroundColor: '#292',
                            padding: 10,
                            justifyContent: 'space-around'
                        }}
                        onPress={this.changeMemmorizedStatus.bind(this)}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Done
                        </Text>

                    </TouchableOpacity>

                    <View
                        style={{
                            flex: 8,
                            justifyContent: 'space-around',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={{ textDecorationLine }}
                        >
                            {en}
                        </Text>
                    </View>

                </View>

                <View
                    style={{
                        borderColor: 'black',
                        borderWidth: 0.3
                    }}>

                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: 'red',
                        flex: 1,

                    }}>


                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            flex: 2,
                            backgroundColor: '#234592',
                            padding: 10,
                            justifyContent: 'space-around'
                        }}
                        onPress={this.changeDisplayStatus.bind(this)}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Show
                        </Text>

                    </TouchableOpacity>

                    <View
                        style={{
                            flex: 8,
                            justifyContent: 'space-around',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={translationStyle}
                        >
                            {vn}
                        </Text>
                    </View>

                </View>

            </View>
        );
    }
}

function mapStatesToProps(state) {
    return {
        statusMemorized: state.memorized,
        displayStatus: state.isShow
    }
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#D2DEF6',
            margin: 10,
            flex: 1
        }
    }
)

export default connect(mapStatesToProps)(Word)