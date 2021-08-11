import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from './DefaultText';

const OrderDetails = (props) => {
	const item = props.item;
	return (
		<View>
			<View style={{ ...styles.top, ...styles.product }}>
				<DefaultText style={styles.text}>
					{item.noOfItems} {item.title}
				</DefaultText>
				<DefaultText style={styles.text}>${item.price}</DefaultText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 19,
		fontWeight: 'bold',
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	product: {
		marginVertical: 10,
	},
});

export default OrderDetails;
