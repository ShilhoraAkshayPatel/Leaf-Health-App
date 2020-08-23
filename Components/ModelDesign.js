import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import model from '../assets/images/Leafmodel.png'


export default class ModelDesign extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>

                        <Text style={styles.heading}> Model design</Text>
                        <View style={styles.container}>
                            <Image source={model} style={{ width: 390, height: 600 }} />

                        </View>
                        <Text style={styles.paragraph} >
                            The model first consists of preprocessing block where images with variant pixel resolution are squashed to a resolution of 128*128*3.
                            Three-channel RGB is considered to extract precise features using VGGNet


                            In this article, I’ll explain each of the following models:

                        </Text>


                    </View>

                    <View style={styles.container}>
                        <Text style={styles.paragraph} >
                            The next step followed by feature extraction where the transfer of feature takes place with keenly identifying individual class.
                            As these images are very similar to each peculiar image kind fine-grained recognition is a challenging task. But, carefully tuning and additional training of these transferred features from VGGNet can be adaptable of our problem statement. The domain adaptability of these VGGNet not only gave effective recognition for fine-grained varieties but also gave significant outcomes.
                        </Text>


                    </View>

                    <View style={styles.container}>
                        <Text style={styles.paragraph} >
                            Followed by feature extraction we have series of Dense layers for classifying these extracted features. But, between these dense layers, a block of dropout and batch normalization layers are included to obtain optimal regularization for the designed model.
                            These models obtained on par results when compared to previous literature.
                        </Text>


                    </View>


                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 5,
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: 'Roboto',
        color: '#192A56',
        padding: 4,
    },
    paragraph: {
        fontSize: 17,
        color: '#192A56',
        fontFamily: 'monospace',
        padding: 2,
    }
});