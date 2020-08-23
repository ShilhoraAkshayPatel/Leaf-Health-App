import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Image } from "react-native";
import { VictoryBar, VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
import acc from '../assets/images/acc.png'
import loss from '../assets/images/loss.png'

export default class Performance extends React.Component {

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <Image source={acc} style={{ width: 350, height: 200 }} />

                    </View>
                    <View style={styles.container}>
                        <Image source={loss} style={{ width: 350, height: 200 }} />

                    </View>


                </ScrollView >
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 20
    }
});