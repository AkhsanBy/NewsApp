import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { NEWS_API_KEY } from '@env'
import axios from 'axios'

import Card from '../components/Card'
import Category from '../components/Category'
import Gap from '../components/Gap'

import { SearchIcon } from '../assets/icons'
import { white_color, dark_purple_color, gray_color } from '../utility/color'

const Search = ({ navigation }) => {
	const [articles, setArticles] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [activeCategory, setActiveCategory] = useState('')
	const [isLoading, setIsLoading] = useState(false);

	const seachByKeyword = (keyword) => {
		setIsLoading(true);
		axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NEWS_API_KEY}`)
		  	.then((response) => {
		    	const result = response.data.articles;
		    	setArticles(result);
		    	setIsLoading(false);
		  	}).catch((error) => {
		  		alert("Server gagal merespon")
		    	setIsLoading(false);
		  	})
	}

	const searchByCategory = (category) => {
		setIsLoading(true);
		axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`)
		  	.then((response) => {
		    	const result = response.data.articles;
		    	setArticles(result);
		    	setIsLoading(false);
		  	}).catch((error) => {
		  		alert("Server gagal merespon")
		    	setIsLoading(false);
		  	})
	}

	const handleSearch = () => {
		setArticles([])
		seachByKeyword(keyword);
		setKeyword('')
		setActiveCategory('')
	}

	const handleCategory = (category) => {
		setArticles([])
		searchByCategory(category)
		setActiveCategory(category)
	}

	return (
		<ScrollView style={{ backgroundColor: white_color }}>
			<View style={styles.container}>
				<Text style={styles.h1}>Search {(activeCategory ? activeCategory : '')}</Text>
				<View style={styles.search}>
					<SearchIcon style={styles.searchIcon}/>
					<Gap width={10}/>
					<TextInput 
						style={styles.input} 
						placeholder="Input keyword..." 
						onChangeText={(text) => setKeyword(text)}
						onSubmitEditing={() => handleSearch()}
						returnKeyType={'done'}
						value={keyword}
					/>
				</View>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<Category activeCategory={activeCategory} handleCategory={handleCategory}/>
				</ScrollView>
				<View>
					{!isLoading ? (
						articles.map((article, index) => 
							<Card article={article} key={index} navigation={navigation} />
						)
					) : (
						<ActivityIndicator size="large" color="#8D1BFF" />
					)}
				</View>
			</View>
		</ScrollView>
	)
}

export default Search

const styles = StyleSheet.create({
	container: {
		backgroundColor: white_color,
		flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 30,
	},
	h1: {
		color: dark_purple_color,
		fontSize: 20,
		fontFamily: 'Poppins-SemiBold',
		textTransform: 'capitalize'
	},
	search: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: gray_color,
		borderWidth: 2,
		borderRadius: 20,
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginTop: 20,
	},
	input: {
		flex: 1
	}
})