import * as React from 'react';
import { Button, Image, View, Text, TouchableOpacity, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { AntDesign } from '@expo/vector-icons';

export default class Trail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
            result: null,
            hasCameraPermission: null,
            message: {
                image: null,
            },
        };


    }



    render() {
        let { image, result } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity
                    onPress={this._pickImage}
                    style={{ backgroundColor: '#67E6DC', width: "90%", height: "30%", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, paddingTop: 40, textAlign: 'center', color: '#fff' }}>
                        <AntDesign name="upload" size={94} color="black" />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._capture}
                    style={{ backgroundColor: '#67E6DC', width: "90%", height: "30%", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, paddingTop: 40, textAlign: 'center', color: '#fff' }}>
                        <AntDesign name="camerao" size={94} color="black" />
                    </Text>
                </TouchableOpacity>



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




    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
                base64: true,

            });
            if (!result.cancelled) {
                this.setState({ image: result.uri, message: { image: result.base64 } });

                this.props.navigation.navigate('Trail', {
                    screen: 'HomeScreen',
                    initial: false,
                    params: { state: this.state },
                });
                // console.log(this.state)
            }


        } catch (E) {
            console.log(E);
        }
    };

    _capture = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                base64: true,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri, message: { image: result.base64 } });

                this.props.navigation.navigate('Trail', {
                    screen: 'HomeScreen',
                    initial: false,
                    params: { state: this.state },
                });
                // console.log(this.state)
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };
}
