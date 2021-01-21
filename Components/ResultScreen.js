import * as React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
    console.log("datarom result screen ", this.state);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={{ uri: this.state.image }}
          style={{
            marginBottom: "2%",
            borderRadius: 20,
            width: "76%",
            height: "64%",
          }}
        />
        <Text
          style={{
            fontSize: 27,
            color: "#192A56",
            fontFamily: "monospace",
            padding: 10,
            textAlign: "center",
          }}
        >
          {this.state.result}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.button}>
              <AntDesign name="leftcircle" size={32} color="white" />

              <Text style={styles.buttonText}>Go Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    paddingTop: "2%",
  },
  button: {
    paddingVertical: "4%",
    paddingHorizontal: "16%",
    backgroundColor: "#d9534f",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    paddingLeft: "7%",
    fontFamily: "sans-serif",
  },
});
