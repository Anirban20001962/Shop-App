import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DefaultText from '../component/DefaultText';
import Color from '../constants/colors';
import OrderDetail from '../component/OrderDetails';

const OrderItem = (props) => {
	const [showDetail, changeDetail] = useState(false);
	const item = props.item;
	let itemKeys = Object.keys(item);
	itemKeys = itemKeys.slice(0, itemKeys.length - 2);
	return (
		<View style={styles.orderContainer}>
			<View style={styles.top}>
				<DefaultText style={styles.text}>${item.price}</DefaultText>
				<DefaultText style={styles.color}>{item.date}</DefaultText>
			</View>
			<View style={styles.button}>
				<Button
					title={showDetail ? 'HIDE DETAILS' : 'SHOW DETAILS'}
					color={Color.primary}
					onPress={() => changeDetail(!showDetail)}
				/>
			</View>
			{showDetail &&
				itemKeys.map((el) => <OrderDetail key={el} item={item[el]} />)}
		</View>
	);
};

const styles = StyleSheet.create({
	orderContainer: {
		marginTop: 15,
		paddingTop: 10,
		marginLeft: 12,
		marginBottom: 15,
		width: '93%',
		backgroundColor: 'white',
		paddingHorizontal: 20,
		borderRadius: 15,
		elevation: 5,
	},
	text: {
		fontSize: 19,
		fontWeight: 'bold',
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	color: {
		color: Color.accent,
	},
	button: {
		marginVertical: 10,
		alignItems: 'center',
	},
});

export default OrderItem;
