import * as React from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

export default class Trail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
            result: null,
            message: {
                image: null,
            },
        };


    }



    render() {
        let { image, result } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={this._pickImage} />
                {image &&
                    <>
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                        <Button title="Pedict" onPress={this.handlebutton.bind(this)} />
                    </>
                }
                {result && <Text>{result}</Text>}
            </View>
        );
    }



    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    async handlebutton() {
        const image64 = this.state.message
        const data = JSON.stringify(
            image64
        )

        axios({
            method: 'post',
            url: 'https://malareaapi333.herokuapp.com/api/predict',
            data: data,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                //handle success
                const result = response.data
                return result

            }).then(result => {
                this.setState({
                    result: result
                })
            })
            .catch(function (error) {
                //handle error
                console.log(error);
            });

    }



    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
                base64: true,

            });
            if (!result.cancelled) {
                this.setState({ image: result.uri, message: { image: result.base64 } });

            }


        } catch (E) {
            console.log(E);
        }
    };
}