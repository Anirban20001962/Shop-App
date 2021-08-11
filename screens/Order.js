import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Icon from '../component/Icon';
import { useSelector } from 'react-redux';
import OrderItem from '../component/OrderItem';
import DefaultText from '../component/DefaultText';

const Orders = (props) => {
	const orders = useSelector((state) => state.product.orders);
	const { navigation } = props;
	const renderItem = (props) => {
		return <OrderItem item={props.item} />;
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
		});
	}, [navigation]);
	return (
		<View style={styles.screen}>
			{orders.length !== 0 && (
				<FlatList
					data={orders}
					renderItem={renderItem}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					style={styles.flatScreen}
				/>
			)}
			{orders.length === 0 && (
				<View style={styles.empty}>
					<DefaultText style={styles.text}>
						Your Orders are empty
					</DefaultText>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flexGrow: 1,
		alignItems: 'center',
	},
	flatScreen: {
		width: '100%',
	},
	empty: {
		flex: 1,
	},
	text: {
		fontWeight: 'bold',
		marginTop: 18,
		fontSize: 18,
	},
});

export default Orders;
