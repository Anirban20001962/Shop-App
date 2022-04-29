import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import Color from '../constants/colors';
import DefaultText from '../component/DefaultText';
import { useDispatch } from 'react-redux';
import { productActions } from '../Redux/product';

const ProductItem = (props) => {
	const dispatch = useDispatch();
	return (
		<View style={styles.productContainer}>
			<Image
				style={styles.imageContainer}
				source={{
					uri: props.item.imageUrl,
				}}
			/>
			<View style={styles.textContainer}>
				<DefaultText style={styles.text}>
					{props.item.title}
				</DefaultText>
				<DefaultText style={styles.textPrice}>
					${props.item.price}
				</DefaultText>
			</View>
			<View style={styles.buttons}>
				<Button
					title="VIEW DETAILS"
					color={Color.primary}
					onPress={() => {
						props.navigation.navigate('Details', {
							item: props.item,
						});
					}}
				/>
				<Button
					title="TO CART"
					color={Color.primary}
					onPress={() => {
						dispatch(productActions.addCartHandler(props.item));
						props.navigation.navigate('Cart');
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: '55%',
	},
	productContainer: {
		marginTop: 25,
		marginHorizontal: 10,
		width: 300,
		height: 300,
		borderRadius: 20,
		overflow: 'hidden',
		backgroundColor: 'white',
		borderRadius: 15,
		elevation: 4,
		marginBottom: 10,
	},
	textContainer: {
		paddingVertical: 20,
	},
	text: {
		fontFamily: 'open-sans-bold',
		textAlign: 'center',
		fontSize: 16,
	},
	textPrice: {
		textAlign: 'center',
		color: Color.accent,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
});

export default ProductItem;
