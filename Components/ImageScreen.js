import * as React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner
          visible={this.state.loading}
          textContent={"Predicting..."}
          size="large"
        />

        <Image
          source={{ uri: this.state.image }}
          style={{
            marginBottom: "2%",
            borderRadius: 20,
            width: "76%",
            height: "64%",
          }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handlebutton.bind(this)}>
            <View style={styles.prebutton}>
              <AntDesign name="checkcircle" size={32} color="white" />

              <Text style={styles.buttonText}>Predict</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.backbutton}>
              <AntDesign name="leftcircle" size={32} color="white" />

              <Text style={styles.buttonText}>Go Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handlebutton = async () => {
    this.setState({ loading: true });
    const image64 = this.state.message;
    const data = JSON.stringify(image64);

    axios({
      method: "post",
      url: "https://leafapi3333.herokuapp.com/api/predict",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        const result = response.data;
        return result;
      })
      .then((result) => {
        this.setState({
          result: result,
          loading: false,
        });
        this.props.navigation.navigate("Trail", {
          screen: "ResultScreen",
          initial: false,
          params: { data: this.state },
        });
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  };
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    paddingTop: "2%",
  },
  prebutton: {
    paddingVertical: "4%",
    paddingHorizontal: "16%",
    backgroundColor: "#5cb85c",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backbutton: {
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
