import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

import { white_color } from '../utility/color' 

const Splash = ({ navigation }) => {
	useEffect(() => {
	    setTimeout(() => {
	      	navigation.replace('BottomNav')
	    }, 3000)
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../assets/images/news.png')}/>
			<Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>NewsApp</Text>
			<Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular' }}>Stay update about the world</Text>
		</View>
	)
}

export default Splash

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: white_color
	},
	logo: {
		width: 200,
		height: 200
	}
})