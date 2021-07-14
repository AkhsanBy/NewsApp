import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'

import { TimeIcon } from '../assets/icons'
import { purple_color, silver_color, white_color } from '../utility/color'

const Card = ({ navigation, article, id }) => {
	const getTime = new Date(article.publishedAt);
	const time = getTime.toDateString();

	return (
		<TouchableOpacity style={styles.card} activeOpacity={0.7} 
			onPress={() => navigation.navigate("DetailCard", { article, time })}>
			<Image source={{uri: `${article.urlToImage}`}} style={styles.image}/>
			<View style={styles.text}>
				<Text style={styles.title} numberOfLines={2}>{article.title}</Text>
				<View style={styles.source}>
					<Text style={styles.label} numberOfLines={1}>{article.source.name}</Text>
				</View>
				<View style={styles.time}>
					<TimeIcon width={15} height={15}/>
					<Text style={styles.time_label}>{time}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default Card

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	card: {
		backgroundColor: white_color,
		height: windowHeight*0.19,
		flexDirection: 'row',
		marginTop: 20,
		borderRadius: 10,
		alignItems: 'center',

		shadowColor: "#000",
	    shadowOffset: {
	      width: 0,
	      height: 5,
	    },
	    shadowOpacity: 0.46,
	    shadowRadius: 11.14,
	    elevation: 4,
	},
	image: {
		width: windowHeight*0.19,
    	height: windowHeight*0.19,
    	backgroundColor: silver_color,
    	borderRadius: 10
	},
	text: {
		marginHorizontal: 15,
		flex: 1
	},
	title: {
		fontSize: 12,
		fontFamily: 'Poppins-SemiBold',
	},
	source: {
		borderColor: purple_color,
		borderWidth: 2, 
		alignItems: 'center',
		borderRadius: 10,
		marginVertical: 5
	},
	label: {
		fontSize: 11,
		fontFamily: 'Poppins-Medium',
	},
	time: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	time_label: {
		fontSize: 11,
		fontFamily: 'Poppins-Regular',
		marginLeft: 5
	}
})