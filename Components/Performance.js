import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { VictoryBar, VictoryPie, VictoryChart, VictoryTheme } from "victory-native";

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];
const piedata = [
    { y: 55 },
    { y: 70 },
    { y: 95 }
];

export default class Performance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            piedata: [
                { y: 0 },
                { y: 0.5 },
                { y: 1 }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            piedata: piedata
        })
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <VictoryChart animate={{ onEnter: { easing: 'exp' } }} width={350} theme={VictoryTheme.material}>
                            <VictoryBar data={data} x="quarter" y="earnings" />
                        </VictoryChart>

                    </View>

                    <View style={styles.container}>
                        <VictoryPie
                            animate={{ onEnter: { easing: 'exp' } }}
                            data={this.state.piedata}
                            width={250}
                            height={250}
                            innerRadius={50}
                            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                        />

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
    }
});