import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";

export default class Trail extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}> FAQ? </Text>

          <View style={styles.container}>
            <Text style={styles.question}>
              Q: Is there any source to check or download the train-test
              configurations regarding the designed model?
            </Text>
            <Text style={styles.answer}>
              Ans: Yes, plant-village database is freely available as an
              opensource. For some samples, the purpose of testing, data is
              available at:
              <Text
                style={{ color: "blue" }}
                onPress={() =>
                  Linking.openURL(
                    " https://drive.google.com/drive/folders/15DAXlmpoIqhsoIxdDk8w-QB_8AxQuKO2?usp=sharing"
                  )
                }
              >
                Here
              </Text>
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.question}>
              Q: Why is it consuming more time to predict a high-resolution
              image( greater than 128x128)?
            </Text>
            <Text style={styles.answer}>
              Ans: The designed model was trained on 128x128 pixel resolution.
              Further, the present model is an intermediate model, not yet
              optimized fully. So, such issues can be fixed further.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 6,
  },
  heading: {
    fontSize: 32,
    fontFamily: "monospace",
    color: "#383CC1",
    paddingBottom: "2%",
    textAlign: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3DBE29",
    fontFamily: "Roboto",
    padding: "1%",
  },
  answer: {
    fontSize: 18,
    color: "#192A56",
    fontWeight: "200",
    fontFamily: "Roboto",
    padding: 2,
  },
});
