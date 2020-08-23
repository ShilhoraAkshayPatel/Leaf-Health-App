import * as React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';


export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: this.props.route.params.data.image, // access with this.
            message: this.props.route.params.data.message, //access with this.
            result: this.props.route.params.data.result,

        };
    }
    render() {
        console.log('datarom result screen ', this.state)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                <Image source={{ uri: this.state.image }} style={{ borderRadius: 40, width: 300, height: 300 }} />
                <Text style={{
                    fontSize: 27,
                    color: '#192A56',
                    fontFamily: 'monospace',
                    padding: 10, textAlign: 'center',

                }}>
                    {this.state.result}
                </Text>

                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{ backgroundColor: '#67E6DC', borderRadius: 40, width: "60%", height: "10%", marginTop: 10 }}>
                    <Text style={{
                        fontSize: 27,
                        color: '#192A56',
                        fontFamily: 'monospace',
                        padding: 10, textAlign: 'center',

                    }}>
                        Go Back
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }





}

