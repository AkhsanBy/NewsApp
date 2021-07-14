import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native'

import { BackIcon, TimeIcon } from '../assets/icons'
import Gap from './Gap'
import { purple_color, silver_color, white_color } from '../utility/color'

const DetailCard = ({ navigation, route }) => {
	const { article, time } = route.params;

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
				<BackIcon width={30} height={30}/>
			</TouchableOpacity>
			<Image source={{uri: article.urlToImage}} style={styles.image} />
			<ScrollView>
				<View style={styles.content}>
					<View style={styles.header}>
						<Text style={styles.title}>{article.title}</Text>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.source}>
								<Text style={styles.label}>{article.source.name}</Text>
							</View>
							<Gap width={10}/>
							<View style={styles.time}>
								<TimeIcon width={15} height={15}/>
								<Text style={styles.time_label}>{time}</Text>
							</View>
						</View>
					</View>
					<Text style={styles.text}>{article.content}</Text>
					<TouchableOpacity style={styles.readMore} onPress={() => Linking.openURL(article.url)}>
						<Text style={styles.readMoreLabel}>Read more</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

export default DetailCard

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: white_color,
		flex: 1
	},
	backIcon: {
		backgroundColor: purple_color,
		borderColor: purple_color,
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: 50,
		height: 50,
		borderRadius: 50,
		position: 'absolute',
		top: 30,
		left: 10,
		zIndex: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
	},
	image: {
		width: windowWidth,
    	height: windowHeight*0.35,
    	backgroundColor: silver_color,
	},
	content: {
		paddingBottom: 30,
		paddingHorizontal: 40,
		paddingVertical: 25,
	},
	title: {
		fontSize: 18,
		fontFamily: 'Poppins-Bold',
	},
	source: {
		borderColor: purple_color,
		borderWidth: 2, 
		alignItems: 'center',
		borderRadius: 10,
		marginVertical: 5,
	},
	label: {
		fontSize: 11,
		fontFamily: 'Poppins-Medium',
		paddingHorizontal: 5
	},
	time: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	time_label: {
		fontSize: 11,
		fontFamily: 'Poppins-Regular',
		marginLeft: 5
	},
	text: {
		fontSize: 14,
		fontFamily: 'Poppins-Regular'
	},
	readMore: {
		backgroundColor: purple_color,
		borderRadius: 15,
		padding: 10,
		flexDirection: 'row',
		width: windowWidth*0.4,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},
	readMoreLabel: { 
		fontSize: 16, 
		fontFamily: 'Poppins-SemiBold',
		color: white_color 
	}
})