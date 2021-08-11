import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../component/Icon';
import ProductItem from '../component/ProductItem';
import { useSelector } from 'react-redux';

const Products = (props) => {
	const { navigation } = props;
	const products = useSelector((state) => state.product.products);
	const renderItem = (props) => {
		return <ProductItem navigation={navigation} {...props} />;
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Icon
					title="drawer"
					iconName="ios-menu"
					color="white"
					action={navigation.toggleDrawer}
				/>
			),
			headerRight: () => (
				<Icon
					title="cart"
					iconName="cart-sharp"
					color="white"
					action={() => navigation.navigate('Cart')}
				/>
			),
		});
	}, [navigation]);
	return (
		<View style={styles.screen}>
			<FlatList
				data={products}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
});

export default Products;
