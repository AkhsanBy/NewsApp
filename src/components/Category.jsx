import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

import { dark_purple_color, gray_color } from '../utility/color'

const Category = ({ activeCategory, handleCategory }) => {
	const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

	return (
		<View style={{ flexDirection: 'row' }}>
			{/* looping all category */}
			{categories.map((category, index) => {
				return (
					<TouchableOpacity key={index} style={[activeCategory === category ? styles.selected_category : styles.unselected_category]} onPress={() => handleCategory(category)}>
						<Text style={[activeCategory === category ? styles.text_semibold : styles.text_regular]}>{category}</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default Category

const styles = StyleSheet.create({
	unselected_category: {
		padding: 10,
		borderColor: dark_purple_color,
		borderBottomWidth: 2
	},
	selected_category: {
		padding: 10,
		borderColor: dark_purple_color,
		borderBottomWidth: 5
	},
	text_regular: {
		color: dark_purple_color,
		fontFamily: 'Poppins-Regular',
		textTransform: 'capitalize'
	},
	text_semibold: {
		color: dark_purple_color,
		fontFamily: 'Poppins-SemiBold',
		textTransform: 'capitalize'
	}
})