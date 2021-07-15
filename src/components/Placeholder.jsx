import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { purple_color, silver_color, white_color } from '../utility/color'

const CardPlaceholder = () => {
	return (
		<View>
			<SkeletonPlaceholder>
				<View style={styles.card}></View>
			</SkeletonPlaceholder>
		</View>
	);
};

export { CardPlaceholder };

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	card: {
		height: windowHeight*0.19,
		flexDirection: 'row',
		marginTop: 20,
		borderRadius: 10,
		alignItems: 'center'
	}
});
