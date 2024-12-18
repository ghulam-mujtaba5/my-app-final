//anlyischart screen
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, FlatList } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const ProgressScreen = () => {
  const [progressData, setProgressData] = useState([
    { key: "Quiz 1", score: 80 },
    { key: "Quiz 2", score: 90 },
    { key: "Quiz 3", score: 70 },
    { key: "Quiz 4", score: 85 },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"],
    datasets: [
      {
        data: [80, 90, 70, 85],
        strokeWidth: 2, // optional
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // line color
      },
    ],
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Your Progress</Text>
      
      <Text style={styles.subtitle}>Quiz Completion Stats</Text>

      <LineChart
        data={chartData}
        width={Dimensions.get("window").width - 32}
        height={220}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />

      <Text style={styles.subtitle}>Quiz History</Text>
      
      <FlatList
        data={progressData}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>{item.key}</Text>
            <Text style={styles.historyScore}>{item.score}%</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />

      <TouchableOpacity style={styles.refreshButton} onPress={() => setIsLoading(true)}>
        <Text style={styles.buttonText}>{isLoading ? "Refreshing..." : "Refresh Data"}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#007BFF",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#555",
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
  },
  historyItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyText: {
    fontSize: 16,
    color: "#333",
  },
  historyScore: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
  refreshButton: {
    marginTop: 32,
    padding: 12,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProgressScreen;
