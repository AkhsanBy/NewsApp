import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

import { 
	HomeIconActive, 
	HomeIcon, 
	SearchIcon, 
	SearchIconActive, 
	AccountIconActive, 
	AccountIcon 
} from '../assets/icons'
import { purple_color, gray_color } from '../utility/color'

const TabItem = ({ label, isFocused, onPress, onLongPress }) => {
	const Icon = () => {
		if (label === 'Home') return isFocused ? <HomeIconActive/> : <HomeIcon/>
		if (label === 'Search') return isFocused ? <SearchIconActive/> : <SearchIcon/>
		if (label === 'Account') return isFocused ? <AccountIconActive/> : <AccountIcon/>
		return <HomeIconActive />
	}

	return (
		<TouchableOpacity onPress={onPress}	onLongPress={onLongPress} style={styles.container}>
			<Icon />
			<Text style={styles.label(isFocused)}>{label}</Text>
		</TouchableOpacity>
	)
}

export default TabItem

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: (isFocused) => ({
		fontSize: windowWidth*0.03,
		color: isFocused ? purple_color : gray_color,
		fontFamily: 'Poppins-Regular'
	})
})