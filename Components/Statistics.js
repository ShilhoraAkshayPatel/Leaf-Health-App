import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { VictoryBoxPlot, VictoryLine, VictoryHistogram, VictoryChart, VictoryTheme } from "victory-native";


export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <VictoryChart domainPadding={20}>
                            <VictoryBoxPlot
                                boxWidth={20}
                                data={[
                                    { x: 1, y: [1, 2, 3, 5] },
                                    { x: 2, y: [3, 2, 8, 10] },
                                    { x: 3, y: [2, 8, 6, 5] },
                                    { x: 4, y: [1, 3, 2, 9] }
                                ]}
                            />
                        </VictoryChart>

                        <VictoryChart
                            theme={VictoryTheme.material}
                        >
                            <VictoryLine
                                style={{
                                    data: { stroke: "#c43a31" },
                                    parent: { border: "1px solid #ccc" }
                                }}
                                data={[
                                    { x: 1, y: 2 },
                                    { x: 2, y: 3 },
                                    { x: 3, y: 5 },
                                    { x: 4, y: 4 },
                                    { x: 5, y: 7 }
                                ]}
                            />
                        </VictoryChart>

                        <VictoryChart
                            domainPadding={10}
                        >
                            <VictoryHistogram
                                style={{ data: { fill: "#c43a31" } }}
                                data={[
                                    { x: 18 },
                                    { x: 62 },
                                    { x: 26 },
                                    { x: 90 },
                                    { x: 85 },
                                    { x: 21 },
                                ]}
                            />
                        </VictoryChart>

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
    }
});