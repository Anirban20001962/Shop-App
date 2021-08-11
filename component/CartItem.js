import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DefaultText from './DefaultText';
import Color from '../constants/colors';
import { useDispatch } from 'react-redux';
import { removeCartHandler } from '../Redux/Actions/products';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const item = props.item;
	return (
		<View style={styles.list}>
			<DefaultText style={styles.text}>
				{item.noOfItems}{' '}
				<Text style={styles.color}>
					{item.title.length >= 10
						? item.title.slice(0, 9) + '...'
						: item.title}
				</Text>
			</DefaultText>
			<View style={styles.fix}>
				<DefaultText style={{ ...styles.text, ...styles.fix1 }}>
					${item.price}
				</DefaultText>
				<TouchableOpacity
					onPress={() => {
						dispatch(removeCartHandler(item.id, item.noOfItems));
					}}
					style={{ paddingLeft: 8 }}
				>
					<Ionicons
						name="remove-circle"
						size={30}
						color={Color.accent}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
	},
	fix: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	fix1: {
		fontSize: 22,
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default CartItem;
