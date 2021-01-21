import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import model from "../assets/images/Leafmodel.png";
import acc from "../assets/images/acc.png";
import loss from "../assets/images/loss.png";

export default class ModelDesign extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.heading}> Model Design</Text>

            <View style={styles.imagecontainer}>
              <Image
                source={model}
                style={{ marginRight: "-5%", width: 350, height: 506 }}
              />
            </View>
            <View style={styles.pracontainer}>
              <Text style={styles.paragraph}>
                The model first consists of preprocessing block where images
                with variant pixel resolution are squashed to a resolution of
                128*128*3. Three-channel RGB is considered to extract precise
                features using VGGNet In this article, I’ll explain each of the
                following models:
              </Text>
            </View>
            <View style={styles.pracontainer}>
              <Text style={styles.paragraph}>
                The next step followed by feature extraction where the transfer
                of feature takes place with keenly identifying individual class.
                As these images are very similar to each peculiar image kind
                fine-grained recognition is a challenging task. But, carefully
                tuning and additional training of these transferred features
                from VGGNet can be adaptable of our problem statement. The
                domain adaptability of these VGGNet not only gave effective
                recognition for fine-grained varieties but also gave significant
                outcomes.
              </Text>
            </View>
            <View style={styles.lastpracontainer}>
              <Text style={styles.paragraph}>
                Followed by feature extraction we have series of Dense layers
                for classifying these extracted features. But, between these
                dense layers, a block of dropout and batch normalization layers
                are included to obtain optimal regularization for the designed
                model. These models obtained on par results when compared to
                previous literature.
              </Text>
            </View>
            <Text style={styles.heading}> Model Performance</Text>
            <View style={styles.container}>
              <Image source={acc} style={{ width: 340, height: 190 }} />
            </View>
            <View style={styles.container}>
              <Image source={loss} style={{ width: 340, height: 190 }} />
            </View>
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
    paddingTop: "2%",
    paddingBottom: "4%",
  },
  pracontainer: {
    width: "95%",
    paddingTop: "4%",
  },
  lastpracontainer: {
    width: "95%",
    paddingTop: "4%",
    paddingBottom: "8%",
  },

  heading: {
    fontSize: 32,
    fontFamily: "monospace",
    color: "#8D3DAF",
    paddingBottom: "6%",
    textAlign: "center",
    marginLeft: "-6%",
  },
  paragraph: {
    fontSize: 18,
    color: "#192A56",
    fontFamily: "Roboto",
    padding: 2,
  },
});
