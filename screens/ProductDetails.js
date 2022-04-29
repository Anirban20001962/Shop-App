import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import Color from '../constants/colors';
import DefaultText from '../component/DefaultText';
import { useDispatch } from 'react-redux';
import { productActions } from '../Redux/product';

const ProductDetails = (props) => {
	const dispatch = useDispatch();
	const item = props.route.params.item;
	const { navigation } = props;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: item.title,
		});
	}, [navigation, item]);

	return (
		<View style={styles.screen}>
			<Image source={{ uri: item.imageUrl }} style={styles.image} />
			<Button
				title="ADD TO CART"
				color={Color.primary}
				onPress={() => {
					dispatch(productActions.addCartHandler(item));
					navigation.navigate('Cart');
				}}
			/>
			<DefaultText style={styles.text}>${item.price}</DefaultText>
			<DefaultText style={styles.describe}>
				{item.description}
			</DefaultText>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 300,
		marginBottom: 10,
	},
	text: {
		fontWeight: 'bold',
		marginTop: 30,
		color: Color.accent,
		fontSize: 22,
	},
	describe: {
		textAlign: 'center',
		width: '80%',
		marginTop: 5,
	},
});

export default ProductDetails;
