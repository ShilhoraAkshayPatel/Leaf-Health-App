import * as React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: this.props.route.params.state.image, // access with this.
            message: this.props.route.params.state.message, //access with this.
            result: null,
            loading: false,

        };
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Spinner
                    visible={this.state.loading}
                    textContent={'Predicting...'}
                    size="large"
                />

                <Image source={{ uri: this.state.image }} style={{ borderRadius: 40, width: 300, height: 300 }} />
                <TouchableOpacity
                    onPress={this.handlebutton.bind(this)}
                    style={{ backgroundColor: '#67E6DC', borderRadius: 40, width: "60%", height: "10%", marginTop: 10 }}>
                    <Text style={{
                        fontSize: 27,
                        color: '#192A56',
                        fontFamily: 'monospace',
                        padding: 10, textAlign: 'center',

                    }}>
                        <AntDesign name="smileo" size={28} color="black" /> Predict
                    </Text>
                </TouchableOpacity>
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

    handlebutton = async () => {

        this.setState({ loading: true });
        const image64 = this.state.message
        const data = JSON.stringify(
            image64
        )


        axios({
            method: 'post',
            url: 'https://leafapi333.herokuapp.com/api/predict',
            data: data,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                //handle success
                const result = response.data
                return result

            }).then(result => {
                this.setState({
                    result: result,
                    loading: false,

                })
                this.props.navigation.navigate('Trail', {
                    screen: 'ResultScreen',
                    initial: false,
                    params: { data: this.state },
                });
            })
            .catch(function (error) {
                //handle error
                console.log(error);
            });

    }



}


