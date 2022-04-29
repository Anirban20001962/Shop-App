import React, { useState, useEffect, useCallback } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	ScrollView,
	Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Color from '../constants/colors';
import DefaultText from '../component/DefaultText';
import CartItem from '../component/CartItem';
import { productActions } from '../Redux/product';

const Cart = (props) => {
	const dispatch = useDispatch();
	const { navigation } = props;
	const [totalPrice, changeTotalPrice] = useState(0);
	const cart = useSelector((state) => state.product.cart);
	let temp = 0;
	cart.forEach((element) => {
		temp = temp + element.price;
	});
	useEffect(() => {
		changeTotalPrice(temp.toFixed(2));
	}, [cart]);
	const confirmOrderHandler = useCallback(() => {
		let date = new Date();
		let dateString = date.toUTCString();
		if (cart.length === 0) {
			Alert.alert('Empty Cart', 'Order Cannot be placed! Cart is empty');
			return;
		}
		dispatch(productActions.addOrders(cart, dateString, totalPrice));
		navigation.navigate('Orders');
	}, [navigation, cart, totalPrice]);
	return (
		<View style={styles.screen}>
			<View style={styles.checkout}>
				<DefaultText style={styles.text}>
					Total: <Text style={styles.color}>${totalPrice}</Text>
				</DefaultText>
				<Button
					title="CHECKOUT"
					color={Color.accent}
					onPress={confirmOrderHandler}
				/>
			</View>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					alignItems: 'center',
				}}
				style={styles.scroll}
			>
				<View style={styles.lists}>
					{cart.map((el) => (
						<CartItem key={el.id} item={el} />
					))}
					{cart.length === 0 && (
						<View>
							<DefaultText
								style={{
									...styles.text,
									...styles.none,
								}}
							>
								Cart is Empty
							</DefaultText>
						</View>
					)}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	checkout: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10,
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderRadius: 20,
		width: '85%',
		backgroundColor: 'white',
		marginBottom: 20,
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	color: {
		color: Color.primary,
	},
	scroll: {
		width: '100%',
	},
	lists: {
		width: '80%',
		backgroundColor: 'white',
	},
	none: {
		textAlign: 'center',
		paddingVertical: 10,
	},
});

export default Cart;
