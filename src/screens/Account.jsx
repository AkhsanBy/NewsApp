import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { CardPlaceholder } from '../components/Placeholder'

const Home = () => {
	return (
		<ScrollView style={{ backgroundColor: "#FFFFFF" }}>
			<View style={styles.container}>
				<Text style={styles.h1}>My Account</Text>
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		// flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 30,
	},
	h1: {
		color: "#17002F",
		fontSize: 20,
		fontFamily: "Poppins-SemiBold",
	},
});
