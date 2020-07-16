import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";

export default class ModelDesign extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>

                        <Text style={styles.heading}> Introduction </Text>
                    <Text style={styles.paragraph} >
                                Deep Learning is a growing field with applications that span across a number of use cases. For anyone new to this field, it is important to know and understand the different types of models used in Deep Learning.
                                In this article, I’ll explain each of the following models:
                    
                        </Text>


                    </View>

                    <View style={styles.container}>

                        <Text style={styles.heading}>
                            Supervised Models
                        </Text>
                    <Text style={styles.paragraph} >
                            Classic Neural Networks (MLP)
                                {'\n'}
                            Conv.. Neural Networks (CNN)
                                {'\n'}
                            Recurrent Neural Networks (RNN)
                    
                        </Text>


                    </View>

                    <View style={styles.container}>

                        <Text style={styles.heading}>
                            Unsupervised Models
                        </Text>
                    <Text style={styles.paragraph} >
                            Self-Organizing Maps (SOMs)
                            Boltzmann Machines
                            AutoEncoders                    
                    </Text>

                    </View>

                    <View style={styles.container}>

                        <Text style={styles.heading}>
                         Supervised vs Unsupervised Models
                        </Text>
                    <Text style={styles.paragraph} >
                         There are a number of features that distinguish the two, but the most integral 
                         point of difference is in how these models are trained. While supervised models
                         are trained through examples of a particular set of data, unsupervised models are
                         only given input data and don’t have a set outcome they can learn from. So that
                         y-column that we’re always trying to predict is not there in an unsupervised model.
                         While supervised models have tasks such as regression and classification and will
                         produce a formula, unsupervised models have clustering and association rule learning.                    
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