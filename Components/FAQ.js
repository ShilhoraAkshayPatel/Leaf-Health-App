import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";

export default class Trail extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>

                        <Text style={styles.question}>Q: This is the First Question?</Text>
                        <Text style={styles.answer} >Ans: here Is the answer for the question</Text>

                    </View>

                    <View style={styles.container}>

                        <Text style={styles.question}>Q: This is the First Question?</Text>
                        <Text style={styles.answer} >Ans: here Is the answer for the question</Text>



                    </View>

                    <View style={styles.container}>

                        <Text style={styles.question}>Q: This is the First Question?</Text>
                        <Text style={styles.answer} >Ans: here Is the answer for the question</Text>



                    </View>

                    <View style={styles.container}>

                        <Text style={styles.question}>Q: This is the First Question?</Text>
                        <Text style={styles.answer} >Ans: here Is the answer for the question</Text>


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
        padding: 6,
    },
    question: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#192A56',
        fontFamily: 'Roboto',
        padding: 4,
    },
    answer: {
        fontSize: 17,
        color: '#192A56',
        fontFamily: 'monospace',
        padding: 2,
    }
});