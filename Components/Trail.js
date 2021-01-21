import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { AntDesign } from "@expo/vector-icons";

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
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Roboto",
                color: "#3DBE29",
                textAlign: "center",
                marginTop: "25%",
              }}
            >
              Upload Image
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Roboto",
                color: "#d9534f",
                textAlign: "center",
              }}
            >
              OR
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Roboto",
                color: "#0275d8",
                textAlign: "center",
              }}
            >
              Take a Picture
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: "30%",
            }}
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.6} onPress={this._pickImage}>
                <View style={styles.uploadbutton}>
                  <AntDesign name="cloudupload" size={60} color="black" />

                  <Text style={styles.buttonText}>UPLOAD</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.6} onPress={this._capture}>
                <View style={styles.camerabutton}>
                  <AntDesign name="camerao" size={60} color="black" />

                  <Text style={styles.buttonText}>CAMERA</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
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

        this.props.navigation.navigate("Trail", {
          screen: "HomeScreen",
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

        this.props.navigation.navigate("Trail", {
          screen: "HomeScreen",
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

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    padding: "2%",
  },
  uploadbutton: {
    paddingVertical: "3%",
    paddingHorizontal: "14%",
    backgroundColor: "#f2933f",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  camerabutton: {
    paddingVertical: "3%",
    paddingHorizontal: "14%",
    backgroundColor: "#f2933f",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    color: "#242B2E",
    paddingLeft: "8%",
    fontFamily: "monospace",
  },
});
