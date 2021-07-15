import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	ScrollView
} from "react-native";
import { NEWS_API_KEY } from "@env";
import axios from "axios";

import Card from "../components/Card";
import { CardPlaceholder } from "../components/Placeholder";

import { white_color, dark_purple_color } from "../utility/color";

const Home = ({ navigation }) => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getTopHeadlines = () => {
		setIsLoading(true);
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
			)
			.then((response) => {
				const result = response.data.articles;
				setArticles(result);
				setIsLoading(false);
			})
			.catch((error) => {
				alert("Server gagal merespon");
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getTopHeadlines();
	}, []);

	return (
		<ScrollView style={{ backgroundColor: white_color }}>
			<View style={styles.container}>
				<Text style={styles.h1}>Home | Top Headlines</Text>
				{!isLoading ? (
					articles.map((article, index) => (
						<Card
							article={article}
							key={index}
							navigation={navigation}
						/>
					))
				) : (
					<View>
						<CardPlaceholder />
						<CardPlaceholder />
						<CardPlaceholder />
					</View>
				)}
			</View>
		</ScrollView>
	);
};

export default Home;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: white_color,
		// flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 30,
	},
	h1: {
		color: dark_purple_color,
		fontSize: 20,
		fontFamily: "Poppins-SemiBold",
	},
});
