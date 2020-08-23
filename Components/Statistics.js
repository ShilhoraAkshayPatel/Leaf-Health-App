import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";

import { VictoryBoxPlot, VictoryLine, VictoryHistogram, VictoryChart, VictoryTheme } from "victory-native";


export default class Statistics extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>

                        <Text style={styles.heading}> Stats and History </Text>
                        <Text style={styles.paragraph} >
                            Crop losses caused by plant pathogens, worldwide, have obstructed efforts to increase crop productivity as well as total crop production. In spite of significant progress achieved in plant breeding, chemotherapy, and other disease management techniques, losses due to diseases remain a major factor limiting agriculture in many parts of the world, including many developed nations. With what appears to have been a past decade of only marginal increases in the yield of major food crops, and of continuing projections of world food deficits and expanding world populations, interest has been renewed in the international the scientific community in research to improve the understanding of the relationship between disease and loss and to better quantify it as a means for sound plant protection programs.
                            Plant protection is a practical exercise in problem-solving and crop loss assessment provides an objective means for defining the problem. Without the proper definition, it is illogical to expect any rational or optimal strategies for disease management, either by farmers or by national and international agencies.

                        </Text>


                    </View>

                    <View style={styles.container}>

                        <Text style={styles.paragraph} >
                            Historically, plant pathology developed greatly only when the cause and magnitude of crop failure were recognized. Plant pathologists, like G. Lyman in the U.S., questioned the lack of attention devoted to improving loss estimates, even as early as 1918. In his 1974 review, W. C. James noted that both the availability and accuracy of regional loss estimates have not markedly improved since Lyman's concern. The 1965 United States Department of Agriculture, crop loss handbook and Cramer's compilation remain commonly cited sources for regional loss information.

                        </Text>


                    </View>

                    <View style={styles.container}>

                        <Text style={styles.paragraph} >
                            According to Cramer, global preharvest losses due to plant
                            pathogens are 9 to 15% of annual production. Crops like potatoes, grapes, and cacao incur even higher losses due to disease, 20% or more on a worldwide basis. The U.S.D.A. the handbook provides estimates of disease losses in the U.S. of 11.5%, resembling the estimates of 13.1%, 12.9% and 11.3%, respectively, for Europe, Africa and Asia. This suggests that either most regions of the world are similar in their disease losses or that our.
                            comprehensive estimates of losses need to be revised. Indeed, recognition of the latter has led to some international effort at updating regional loss estimates, particularly by the Food and Agriculture Organization of the United Nations. The practising agriculturalist is commonly concerned about how plant pathogens cause crop losses and how they may be reduced. Knowledge of the prevalence and intensity of a disease enables decision-making in research and extension, especially when competitive funds are to be allocated. However, crop loss assessment further provides a means to satisfy scientific curiosity: what is the pathogen doing to a crop? Many authors have examined the rationale for loss assessment, and we refer the reader to those publications. With the increasing role of computer technology in plant protection, we envisage crop loss assessment
                            Downloaded by [Texas A&M University Libraries] at 19:45 17 June 2013
                            22 CRC Critical Reviews in Plant Sciences becoming an integral duty of any crop manager, by providing economic criteria for evaluating disease control measures before and during the cropping season.[1]

                        </Text>


                    </View>

                    <View style={styles.container}>

                        <Text style={styles.paragraph} >

                            Our approach will reflect the increased influence that disciplines
                            outside of plant pathology is having on crop loss assessment — in particular, plant physiology and computer modelling.


                        </Text>

                    </View>

                    <View style={styles.container}>

                        <Text style={styles.paragraph} >

                            [1] Teng, P. S., W. W. Shane, and David R. MacKenzie. "Crop losses due to plant pathogens." Critical Reviews in Plant Sciences 2.1 (1984): 21-47.
                           


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