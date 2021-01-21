import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import Trail from "./Components/Trail";
import ModelDesign from "./Components/ModelDesign";
import Statistics from "./Components/Statistics";
import FAQ from "./Components/FAQ";
// import PhotoPickerScreen from './Components/Cameracomp';
import ImageScreen from "./Components/ImageScreen";
import ResultScreen from "./Components/ResultScreen";

const Tab = createBottomTabNavigator();
const Trailstack = createStackNavigator();
const ModelDesignstack = createStackNavigator();
const Performancestack = createStackNavigator();
const Statisticsstack = createStackNavigator();
const FAQstack = createStackNavigator();

function TrailScreen() {
  return (
    <Trailstack.Navigator>
      <Trailstack.Screen
        name="Trailstack"
        component={Trail}
        options={{
          title: "Leaf-Health",
          headerStyle: {
            backgroundColor: "#ff576a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            includeFontPadding: true,
          },
        }}
      />
      <Trailstack.Screen name="HomeScreen" component={ImageScreen} />
      <Trailstack.Screen name="ResultScreen" component={ResultScreen} />
    </Trailstack.Navigator>
  );
}

function ModelDesignScreen() {
  return (
    <ModelDesignstack.Navigator>
      <ModelDesignstack.Screen
        name="Trail"
        component={ModelDesign}
        options={{
          title: "Leaf-Health",
          headerStyle: {
            backgroundColor: "#ff576a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            includeFontPadding: true,
          },
        }}
      />
    </ModelDesignstack.Navigator>
  );
}

function StatisticsScreen() {
  return (
    <Statisticsstack.Navigator>
      <Statisticsstack.Screen
        name="Trail"
        component={Statistics}
        options={{
          title: "Leaf-Health",
          headerStyle: {
            backgroundColor: "#ff576a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            includeFontPadding: true,
          },
        }}
      />
    </Statisticsstack.Navigator>
  );
}

function FAQScreen() {
  return (
    <FAQstack.Navigator>
      <FAQstack.Screen
        name="Trail"
        component={FAQ}
        options={{
          title: "Leaf-Health",
          headerStyle: {
            backgroundColor: "#ff576a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            includeFontPadding: true,
          },
        }}
      />
    </FAQstack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Trail"
      tabBarOptions={{
        activeTintColor: "#d9534f",
        labelPosition: "below-icon",
        showLabel: true,
        labelStyle: {
          fontSize: 14,
          margin: -8,
          paddingBottom: 6,
        },

        style: { height: "10.5%", backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="Trail"
        component={TrailScreen}
        options={{
          title: "Leaf-Health",
          tabBarLabel: "Trail",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="home" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ModelDesign"
        component={ModelDesignScreen}
        options={{
          title: "Leaf-Health",
          tabBarLabel: "Model",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="codepen-circle" size={34} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          title: "Leaf-Health",
          tabBarLabel: "Statistics",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="history" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          title: "Leaf-Health",
          tabBarLabel: "FAQ",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="questioncircle" size={34} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
